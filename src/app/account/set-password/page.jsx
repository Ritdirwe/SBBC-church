"use client";

import { useEffect, useState } from "react";

export default function SetPasswordPage() {
  const [status, setStatus] = useState("Setting your password...");

  useEffect(() => {
    // Automatically set password when page loads
    fetch("/api/auth/set-my-password")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("✅ Password set successfully!");
          setTimeout(() => {
            window.location.href = "/account/signin";
          }, 2000);
        } else {
          setStatus("❌ Error: " + (data.error || "Unknown error"));
        }
      })
      .catch((err) => {
        setStatus("❌ Error: " + err.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-2xl font-bold text-black mb-4">Password Setup</h1>
        <p className="text-lg text-[#2B2B2B] mb-6">{status}</p>

        <div className="bg-[#F5F5F5] rounded-lg p-4 text-left">
          <p className="text-sm text-[#6E6E6E] mb-2">
            <strong>Email:</strong> grappertechnologies@gmail.com
          </p>
          <p className="text-sm text-[#6E6E6E]">
            <strong>Password:</strong> 20000000
          </p>
        </div>

        {status.includes("✅") && (
          <p className="mt-4 text-sm text-[#6E6E6E]">
            Redirecting to sign in...
          </p>
        )}
      </div>
    </div>
  );
}
