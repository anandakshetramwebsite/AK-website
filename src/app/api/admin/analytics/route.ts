import { NextResponse } from "next/server";
import { buildAnalyticsReport } from "@/lib/analytics";
import { requireAdminSession } from "@/lib/auth/session";

export async function GET() {
  try {
    await requireAdminSession();
    const report = await buildAnalyticsReport();
    return NextResponse.json(report);
  } catch {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
}
