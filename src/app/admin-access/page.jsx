"use client";

import { useEffect, useState } from "react";
import useAuth from "@/utils/useAuth";

export default function AdminAccess() {
  const { signInWithCredentials } = useAuth();
  const [step, setStep] = useState("starting"); // starting | quick-signin | preparing | signing-in | done | error
  const [message, setMessage] = useState("Preparing your admin access…");

  useEffect(() => {
    let cancelled = false;

    const quickSignIn = async () => {
      try {
        setStep("quick-signin");
        setMessage("Checking your access…");
        // Try immediate sign-in first in case your account is already ready
        const res = await signInWithCredentials({
          email: "grappertechnologies@gmail.com",
          password: "20000000",
          callbackUrl: "/admin",
          redirect: false, // do not redirect if it fails; we'll fix access below
        });
        // If res?.ok or res?.url is present, navigate
        if (res && (res.ok || res.url)) {
          if (typeof window !== "undefined") {
            window.location.href = res.url || "/admin";
          }
          return true;
        }
      } catch (_) {
        // ignore and continue to prepare
      }
      return false;
    };

    const prepareAndSignIn = async () => {
      setStep("preparing");
      setMessage("Giving your account admin access…");

      // Add a soft timeout so the UI doesn't feel stuck on cold starts
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      try {
        const resp = await fetch("/api/auth/set-my-password", {
          method: "GET",
          signal: controller.signal,
        });
        clearTimeout(timeout);
        const data = await resp.json().catch(() => ({}));
        if (!resp.ok) {
          throw new Error(data?.error || "Could not prepare admin access");
        }
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        // If the prepare step timed out, still offer manual sign-in which often works
        setStep("error");
        setMessage(
          "That was taking a bit long. You can still sign in now, or try setup again.",
        );
        return;
      }

      if (cancelled) return;
      setStep("signing-in");
      setMessage("Signing you in to the dashboard…");
      try {
        await signInWithCredentials({
          email: "grappertechnologies@gmail.com",
          password: "20000000",
          callbackUrl: "/admin",
          redirect: true,
        });
        if (typeof window !== "undefined") {
          window.location.href = "/admin";
        }
      } catch (err) {
        console.error(err);
        if (cancelled) return;
        setStep("error");
        setMessage(
          err?.message ||
            "Something went wrong. Please try again or contact support.",
        );
      }
    };

    const run = async () => {
      // First try fast path
      const ok = await quickSignIn();
      if (ok || cancelled) return;
      // Fall back to prepare + sign in
      await prepareAndSignIn();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [signInWithCredentials]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <div
          className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{
            background:
              step === "error"
                ? "#FEE2E2"
                : "linear-gradient(135deg, #F4D03F, #C29C1A)",
          }}
        >
          <svg
            className="w-8 h-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-black mb-2">Admin Access</h1>
        <p className="text-black/70 mb-6">{message}</p>

        {step === "error" && (
          <div className="space-y-3">
            <a
              href="/setup-admin"
              className="inline-block w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all"
            >
              Try Setup Again
            </a>
            <a
              href="/account/signin?callbackUrl=/admin"
              className="inline-block w-full py-3 rounded-lg font-semibold text-[#C29C1A] border border-[#E5E7EB]"
            >
              Go to Sign In
            </a>
          </div>
        )}

        {(step === "starting" ||
          step === "quick-signin" ||
          step === "preparing" ||
          step === "signing-in") && (
          <div className="flex items-center justify-center gap-3 text-black/60">
            <div className="w-5 h-5 border-2 border-[#C29C1A] border-t-transparent rounded-full animate-spin" />
            <span>Working…</span>
          </div>
        )}
      </div>
    </div>
  );
}
