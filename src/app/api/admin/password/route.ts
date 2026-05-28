import { NextResponse } from "next/server";
import { changePassword } from "@/lib/auth/credentials";
import { requireAdminSession } from "@/lib/auth/session";

export async function POST(request: Request) {
  try {
    const username = await requireAdminSession();
    const body = (await request.json()) as {
      currentPassword?: string;
      newPassword?: string;
      confirmPassword?: string;
    };
    if (!body.currentPassword || !body.newPassword || !body.confirmPassword) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (body.newPassword !== body.confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }
    const result = await changePassword(
      username,
      body.currentPassword,
      body.newPassword
    );
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
}
