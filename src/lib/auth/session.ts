import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "ak_admin_session";
const MAX_AGE = 60 * 60 * 24 * 7;

function getSecret() {
  return process.env.ADMIN_SECRET || "dev-only-change-in-production";
}

export async function createSession(username: string) {
  const payload = JSON.stringify({
    username,
    exp: Date.now() + MAX_AGE * 1000,
  });
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
  const token = Buffer.from(`${payload}.${signature}`).toString("base64url");
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function getSessionUsername(): Promise<string | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [payload, signature] = decoded.split(".");
    if (!payload || !signature) return null;
    const expected = crypto
      .createHmac("sha256", getSecret())
      .update(payload)
      .digest("hex");
    if (signature !== expected) return null;
    const data = JSON.parse(payload) as { username: string; exp: number };
    if (data.exp < Date.now()) return null;
    return data.username;
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const username = await getSessionUsername();
  if (!username) {
    throw new Error("UNAUTHORIZED");
  }
  return username;
}
