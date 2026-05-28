"use client";

import { useState } from "react";

const EXPERIENCE_TYPES = [
  "Family Outing",
  "School Field Trip",
  "Corporate Retreat",
  "Night Stay",
  "Birthday / Celebration",
  "Kitty Party",
  "Reunion",
  "Other",
];

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      experienceType: String(form.get("experienceType") || ""),
      preferredDate: String(form.get("preferredDate") || ""),
      groupSize: Number(form.get("groupSize") || 1),
      notes: String(form.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thank you! Our team will contact you shortly on WhatsApp or phone.");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Could not submit. Please WhatsApp us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-xl border border-brand-crimson/20 bg-ivory px-4 py-3"
        />
        <input
          name="phone"
          required
          placeholder="Phone / WhatsApp"
          className="rounded-xl border border-brand-crimson/20 bg-ivory px-4 py-3"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email (optional)"
        className="w-full rounded-xl border border-brand-crimson/20 bg-ivory px-4 py-3"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <select
          name="experienceType"
          required
          className="rounded-xl border border-brand-crimson/20 bg-ivory px-4 py-3"
          defaultValue=""
        >
          <option value="" disabled>
            Select experience
          </option>
          {EXPERIENCE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <input
          name="preferredDate"
          type="date"
          required
          className="rounded-xl border border-brand-crimson/20 bg-ivory px-4 py-3"
        />
      </div>
      <input
        name="groupSize"
        type="number"
        min={1}
        defaultValue={10}
        placeholder="Group size"
        className="w-full rounded-xl border border-brand-crimson/20 bg-ivory px-4 py-3"
      />
      <textarea
        name="notes"
        rows={3}
        placeholder="Any special requests?"
        className="w-full rounded-xl border border-brand-crimson/20 bg-ivory px-4 py-3"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="brand-button w-full bg-brand-gold text-midnight-crimson hover:bg-warm-gold disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Booking Request"}
      </button>
      {message && (
        <p
          className={`text-sm ${status === "error" ? "text-brand-crimson" : "text-forest-green"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
