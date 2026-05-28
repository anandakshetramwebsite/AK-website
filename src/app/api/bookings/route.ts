import { NextResponse } from "next/server";
import { addBooking, addEvent } from "@/lib/cms/storage";
import type { BookingRecord } from "@/lib/cms/types";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    phone?: string;
    email?: string;
    experienceType?: string;
    preferredDate?: string;
    groupSize?: number;
    notes?: string;
  };

  if (!body.name || !body.phone || !body.experienceType || !body.preferredDate) {
    return NextResponse.json(
      { error: "Name, phone, experience, and preferred date are required." },
      { status: 400 }
    );
  }

  const now = new Date();
  const booking: BookingRecord = {
    id: crypto.randomUUID(),
    createdAt: now.toISOString(),
    name: body.name,
    phone: body.phone,
    email: body.email,
    experienceType: body.experienceType,
    preferredDate: body.preferredDate,
    groupSize: Number(body.groupSize) || 1,
    notes: body.notes,
    source: "form",
  };

  await addBooking(booking);
  await addEvent({
    id: crypto.randomUUID(),
    type: "booking_intent",
    path: "/contact-book-now",
    experienceType: body.experienceType,
    hour: now.getHours(),
    dayOfWeek: now.getDay(),
    createdAt: now.toISOString(),
  });

  return NextResponse.json({ ok: true, id: booking.id });
}
