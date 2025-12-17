"use client";

import { useEffect, useState } from "react";

export default function AdminBypassToggle() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("SBBC_ADMIN_BYPASS", "1");
        setDone(true);
        // small delay so storage writes before navigating
        setTimeout(() => {
          window.location.replace("/admin?bypass=1");
        }, 300);
      }
    } catch (e) {
      console.error(e);
      setError("Could not enable bypass automatically");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-black mb-2">
          Enable Admin Bypass
        </h1>
        <p className="text-black/70 mb-6">
          This lets you enter the dashboard without signing in. You can turn it
          off later.
        </p>

        {!done && !error && (
          <div className="flex items-center justify-center gap-3 text-black/60">
            <div className="w-5 h-5 border-2 border-[#C29C1A] border-t-transparent rounded-full animate-spin" />
            <span>Enabling…</span>
          </div>
        )}

        {done && (
          <div className="text-black">
            Bypass enabled. Taking you to the dashboard…
          </div>
        )}

        {error && (
          <div className="space-y-4">
            <div className="text-red-600">{error}</div>
            <a
              href="/admin?bypass=1"
              className="inline-block w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all"
            >
              Go to Dashboard
            </a>
          </div>
        )}

        <div className="mt-6 text-sm text-black/60">
          To disable later, visit <code>/admin-bypass/disable</code>
        </div>
      </div>
    </div>
  );
}
