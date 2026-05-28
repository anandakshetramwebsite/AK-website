"use client";

import { useEffect, useState } from "react";
import type { AnalyticsReport } from "@/lib/analytics";
import type { SiteContent } from "@/lib/cms/types";

type Tab = "dashboard" | "content" | "settings";

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [jsonDraft, setJsonDraft] = useState("");
  const [analytics, setAnalytics] = useState<AnalyticsReport | null>(null);
  const [msg, setMsg] = useState("");
  const [pwd, setPwd] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/content").then((r) => r.json()),
      fetch("/api/admin/analytics").then((r) => r.json()),
    ]).then(([c, a]) => {
      setContent(c);
      setJsonDraft(JSON.stringify(c, null, 2));
      setAnalytics(a);
    });
  }, []);

  async function saveContent() {
    setMsg("");
    try {
      const parsed = JSON.parse(jsonDraft) as SiteContent;
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });
      if (!res.ok) throw new Error("Save failed");
      setContent(parsed);
      setMsg("Website content saved successfully.");
    } catch {
      setMsg("Invalid JSON or save failed. Check syntax and try again.");
    }
  }

  async function changePassword(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");
    const res = await fetch("/api/admin/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pwd),
    });
    const data = await res.json();
    if (!res.ok) {
      setMsg(data.error || "Password change failed.");
      return;
    }
    setMsg("Password updated successfully.");
    setPwd({ currentPassword: "", newPassword: "", confirmPassword: "" });
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  const maxHour = Math.max(...(analytics?.byHour.map((h) => h.count) || [1]), 1);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
      <header className="border-b border-white/10 bg-[#111] px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Ananda Admin</h1>
            <p className="text-xs text-white/50">CMS · Analytics · Bookings</p>
          </div>
          <div className="flex gap-2">
            <a
              href="/"
              target="_blank"
              className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
            >
              View Site
            </a>
            <button
              onClick={logout}
              className="rounded-lg bg-[#7B1515] px-3 py-2 text-sm hover:bg-[#9a1a1a]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6">
        <aside className="w-52 shrink-0 space-y-1">
          {(
            [
              ["dashboard", "Dashboard & Analytics"],
              ["content", "Edit Website Content"],
              ["settings", "Account Settings"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                tab === id ? "bg-[#C9941A] text-[#1a1a1a]" : "hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </aside>

        <main className="min-w-0 flex-1">
          {msg && (
            <p className="mb-4 rounded-lg border border-[#C9941A]/40 bg-[#C9941A]/10 px-4 py-2 text-sm">
              {msg}
            </p>
          )}

          {tab === "dashboard" && analytics && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Total Bookings", analytics.totals.bookings],
                  ["Page Views", analytics.totals.pageViews],
                  ["WhatsApp Clicks", analytics.totals.whatsappClicks],
                  [
                    "Est. Revenue",
                    `₹${analytics.totals.estimatedRevenue.toLocaleString("en-IN")}`,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-[#222] p-4"
                  >
                    <p className="text-xs text-white/50">{label}</p>
                    <p className="mt-1 text-2xl font-semibold text-[#E8B84B]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-[#222] p-5">
                <h2 className="text-lg font-semibold">Booking Forecast</h2>
                <p className="mt-2 text-3xl font-bold text-[#E8B84B]">
                  ~{analytics.totals.projectedMonthlyBookings} bookings / 30 days
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Model uses recent form intents + growth estimate.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[#222] p-5">
                  <h2 className="mb-4 font-semibold">Best Times to Book</h2>
                  <ul className="space-y-2 text-sm">
                    {analytics.bestBookingWindows.map((w) => (
                      <li key={w} className="rounded-lg bg-white/5 px-3 py-2">
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#222] p-5">
                  <h2 className="mb-4 font-semibold">AI Insights</h2>
                  <ul className="space-y-2 text-sm text-white/80">
                    {analytics.insights.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#222] p-5">
                <h2 className="mb-4 font-semibold">Inquiry Activity by Hour</h2>
                <div className="flex h-32 items-end gap-1">
                  {analytics.byHour.map((h) => (
                    <div
                      key={h.hour}
                      title={`${h.hour}:00 — ${h.count}`}
                      className="flex-1 rounded-t bg-[#7B1515]"
                      style={{ height: `${(h.count / maxHour) * 100}%`, minHeight: 2 }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#222] p-5">
                <h2 className="mb-4 font-semibold">Recent Bookings</h2>
                {analytics.recentBookings.length === 0 ? (
                  <p className="text-sm text-white/50">No bookings logged yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-white/50">
                        <tr>
                          <th className="py-2">Date</th>
                          <th>Name</th>
                          <th>Experience</th>
                          <th>Group</th>
                          <th>Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analytics.recentBookings.map((b) => (
                          <tr key={b.id} className="border-t border-white/10">
                            <td className="py-2">
                              {new Date(b.createdAt).toLocaleDateString("en-IN")}
                            </td>
                            <td>{b.name}</td>
                            <td>{b.experienceType}</td>
                            <td>{b.groupSize}</td>
                            <td>{b.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === "content" && (
            <div className="space-y-4">
              <p className="text-sm text-white/60">
                Edit the full website JSON — homepage, all 16 pages content, SEO, pricing,
                FAQs, schools, testimonials, navigation, and contact details. Save to
                publish instantly.
              </p>
              {content && (
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setJsonDraft(
                        JSON.stringify(
                          { ...content, homepage: content.homepage },
                          null,
                          2
                        )
                      )
                    }
                    className="rounded bg-white/10 px-2 py-1 text-xs"
                  >
                    Reset draft
                  </button>
                </div>
              )}
              <textarea
                value={jsonDraft}
                onChange={(e) => setJsonDraft(e.target.value)}
                className="h-[60vh] w-full rounded-xl border border-white/10 bg-[#111] p-4 font-mono text-xs text-[#e8e8e8]"
                spellCheck={false}
              />
              <button
                onClick={saveContent}
                className="rounded-lg bg-[#C9941A] px-6 py-3 font-semibold text-[#1a1a1a]"
              >
                Save All Website Changes
              </button>
            </div>
          )}

          {tab === "settings" && (
            <form onSubmit={changePassword} className="max-w-md space-y-4">
              <h2 className="text-lg font-semibold">Change Password</h2>
              <p className="text-sm text-white/60">
                Enter your current password to set a new one.
              </p>
              <input
                type="password"
                placeholder="Current password"
                value={pwd.currentPassword}
                onChange={(e) =>
                  setPwd({ ...pwd, currentPassword: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3"
                required
              />
              <input
                type="password"
                placeholder="New password (min 8 chars)"
                value={pwd.newPassword}
                onChange={(e) => setPwd({ ...pwd, newPassword: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3"
                required
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={pwd.confirmPassword}
                onChange={(e) =>
                  setPwd({ ...pwd, confirmPassword: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-[#7B1515] px-6 py-3 font-semibold"
              >
                Update Password
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
