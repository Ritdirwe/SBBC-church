"use client";

import { useEffect } from "react";

export default function DisableAdminBypass() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem("SBBC_ADMIN_BYPASS");
        setTimeout(() => {
          window.location.replace("/");
        }, 300);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-black mb-2">Bypass Disabled</h1>
        <p className="text-black/70">Taking you back home…</p>
      </div>
    </div>
  );
}
