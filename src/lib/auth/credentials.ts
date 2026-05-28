import bcrypt from "bcryptjs";
import { getAdminCredentials, saveAdminCredentials } from "@/lib/cms/storage";
import type { AdminCredentials } from "@/lib/cms/types";

export async function ensureAdminUser() {
  const existing = await getAdminCredentials();
  if (existing) return existing;

  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "Ananda@2026";
  const passwordHash = await bcrypt.hash(password, 12);
  const creds: AdminCredentials = {
    username,
    passwordHash,
    updatedAt: new Date().toISOString(),
  };
  await saveAdminCredentials(creds);
  return creds;
}

export async function verifyLogin(username: string, password: string) {
  const creds = await ensureAdminUser();
  if (creds.username !== username) return false;
  return bcrypt.compare(password, creds.passwordHash);
}

export async function changePassword(
  username: string,
  currentPassword: string,
  newPassword: string
) {
  const creds = await ensureAdminUser();
  if (creds.username !== username) {
    return { ok: false as const, error: "Invalid username." };
  }
  const valid = await bcrypt.compare(currentPassword, creds.passwordHash);
  if (!valid) {
    return { ok: false as const, error: "Current password is incorrect." };
  }
  if (newPassword.length < 8) {
    return {
      ok: false as const,
      error: "New password must be at least 8 characters.",
    };
  }
  const passwordHash = await bcrypt.hash(newPassword, 12);
  await saveAdminCredentials({
    username,
    passwordHash,
    updatedAt: new Date().toISOString(),
  });
  return { ok: true as const };
}
