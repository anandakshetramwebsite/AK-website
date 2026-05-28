"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const search = useSearchParams();
  const next = search.get("next") || "/admin";
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Login failed.");
      return;
    }
    window.location.href = next;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#3A0808] px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-[#FBF6EE] p-8 shadow-xl"
      >
        <h1 className="font-serif text-3xl text-[#7B1515]">Admin Login</h1>
        <p className="mt-2 text-sm text-[#3A0808]/70">
          Manage website content, bookings, and analytics.
        </p>
        <div className="mt-6 space-y-3">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full rounded-xl border border-[#7B1515]/20 px-4 py-3"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-[#7B1515]/20 px-4 py-3"
            required
          />
        </div>
        {error && <p className="mt-3 text-sm text-[#7B1515]">{error}</p>}
        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-[#C9941A] py-3 font-semibold text-[#3A0808]"
        >
          Sign In
        </button>
        <p className="mt-4 text-xs text-[#3A0808]/50">
          Default: admin / Ananda@2026 (change after first login)
        </p>
      </form>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
