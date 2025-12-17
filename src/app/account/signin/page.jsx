"use client";
import { useState, useMemo, useEffect } from "react";
import useAuth from "@/utils/useAuth";
// ADD: eye icons for password visibility toggle
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const { signInWithCredentials } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // ADD: state to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const callbackUrlFromQuery = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const cb = new URLSearchParams(window.location.search).get("callbackUrl");
    return cb || undefined;
  }, []);

  // NEW: support auto sign-in via URL params (?email=...&password=...&auto=1)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const auto = params.get("auto");
    const e = params.get("email");
    const p = params.get("password");
    if (auto === "1" && e && p) {
      setEmail(e);
      setPassword(p);
      // Delay a tick to allow state to settle, then submit
      setTimeout(() => {
        onSubmit(new Event("submit"));
      }, 50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithCredentials({
        email: email.trim(),
        password,
        callbackUrl: callbackUrlFromQuery || "/admin",
        redirect: true,
      });
    } catch (err) {
      console.error(err);
      setError("Could not sign you in. Please check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7] px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-black mb-2">Sign in</h1>
        <p className="text-black/60 mb-8">Access your dashboard</p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Password
            </label>
            {/* WRAP password input to place an eye icon on the left inside the field */}
            <div className="relative">
              {/* Left eye toggle button inside input */}
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-black/60 hover:text-black focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                // add left padding so the icon doesn't overlap text
                className="w-full pl-10 pr-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-black/60">
          New here?{" "}
          <a
            href="/account/signup"
            className="text-[#C29C1A] font-medium hover:underline"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
