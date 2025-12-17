"use client";
import { useState, useMemo } from "react";
import useAuth from "@/utils/useAuth";

export default function SignUpPage() {
  const { signUpWithCredentials } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callbackUrlFromQuery = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const cb = new URLSearchParams(window.location.search).get("callbackUrl");
    return cb || undefined;
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await signUpWithCredentials({
        email: email.trim(),
        password,
        callbackUrl: callbackUrlFromQuery || "/admin",
        redirect: true,
      });
    } catch (err) {
      console.error(err);
      setError("Could not create your account. Try a different email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7] px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-black mb-2">Create account</h1>
        <p className="text-black/60 mb-8">Sign up to get access</p>

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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]"
              placeholder="At least 8 characters"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29C1A]"
              placeholder="Re-enter password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Creating account…" : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-black/60">
          Already have an account?{" "}
          <a
            href="/account/signin"
            className="text-[#C29C1A] font-medium hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
