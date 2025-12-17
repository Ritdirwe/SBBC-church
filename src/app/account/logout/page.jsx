"use client";
import { useEffect } from "react";
import useAuth from "@/utils/useAuth";

export default function LogoutPage() {
  const { signOut } = useAuth();

  useEffect(() => {
    // Sign out then send home
    signOut({ callbackUrl: "/", redirect: true });
  }, [signOut]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-2">Signing out…</h1>
        <p className="text-black/60">You'll be redirected shortly</p>
      </div>
    </div>
  );
}
