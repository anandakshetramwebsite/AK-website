import { NextResponse } from "next/server";
import { verifyLogin } from "@/lib/auth/credentials";
import { createSession } from "@/lib/auth/session";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    username?: string;
    password?: string;
  };
  if (!body.username || !body.password) {
    return NextResponse.json({ error: "Username and password required." }, { status: 400 });
  }
  const ok = await verifyLogin(body.username, body.password);
  if (!ok) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }
  await createSession(body.username);
  return NextResponse.json({ ok: true });
}
