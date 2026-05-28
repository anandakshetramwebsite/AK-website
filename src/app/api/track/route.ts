import { NextResponse } from "next/server";
import { addEvent } from "@/lib/cms/storage";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    type?: "page_view" | "booking_intent" | "whatsapp_click";
    path?: string;
    experienceType?: string;
  };
  if (!body.type || !body.path) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }
  const now = new Date();
  await addEvent({
    id: crypto.randomUUID(),
    type: body.type,
    path: body.path,
    experienceType: body.experienceType,
    hour: now.getHours(),
    dayOfWeek: now.getDay(),
    createdAt: now.toISOString(),
  });
  return NextResponse.json({ ok: true });
}
