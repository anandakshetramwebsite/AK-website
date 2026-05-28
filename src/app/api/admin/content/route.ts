import { NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/cms/storage";
import type { SiteContent } from "@/lib/cms/types";
import { requireAdminSession } from "@/lib/auth/session";

export async function GET() {
  try {
    await requireAdminSession();
    const content = await getSiteContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdminSession();
    const body = (await request.json()) as SiteContent;
    await saveSiteContent(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
}
