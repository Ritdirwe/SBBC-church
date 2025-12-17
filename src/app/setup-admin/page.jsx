"use client";

import { useState } from "react";

export default function SetupAdminPage() {
  const [status, setStatus] = useState("ready"); // ready, loading, success, error
  const [message, setMessage] = useState("");

  const handleSetup = async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/auth/set-my-password");
      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        // Wait 2 seconds then redirect to sign in
        setTimeout(() => {
          window.location.href = "/account/signin";
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.error || "Setup failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Could not complete setup");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-black mb-2">Admin Setup</h1>
          <p className="text-gray-600 mb-8">
            Click the button below to set up your admin account
          </p>

          {status === "ready" && (
            <button
              onClick={handleSetup}
              className="w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-bold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Set Up Admin Access
            </button>
          )}

          {status === "loading" && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#F4D03F] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600">Setting up your account...</p>
            </div>
          )}

          {status === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-green-800 font-semibold mb-2">{message}</p>
              <p className="text-green-600 text-sm">
                Redirecting to sign in...
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800 font-semibold mb-4">{message}</p>
              <button
                onClick={handleSetup}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {status === "ready" && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg text-left">
              <h3 className="font-semibold text-black mb-2">What this does:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  ✓ Sets your password to: <strong>20000000</strong>
                </li>
                <li>✓ Grants you admin access</li>
                <li>✓ Allows you to access /admin dashboard</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
