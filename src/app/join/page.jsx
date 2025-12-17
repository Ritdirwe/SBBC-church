import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import SEOHead from "@/components/SEOHead";
import { toast } from "sonner";

export default function JoinPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/discipleship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        let message = `When fetching /api/discipleship, the response was [${res.status}] ${res.statusText}`;
        try {
          const j = await res.json();
          if (j?.error) message = j.error;
        } catch {}
        throw new Error(message);
      }
      return res.json();
    },
    onSuccess: () => {
      setSuccess(true);
      setError(null);
      toast.success("Thank you! We'll be in touch soon.");
      setFullName("");
      setEmail("");
      setPhone("");
    },
    onError: (e) => {
      console.error(e);
      setError(e.message || "Something went wrong");
      toast.error("Could not submit. Please try again.");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const payload = {
      full_name: fullName,
      email,
      phone,
    };
    mutation.mutate(payload);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        path="/join"
        title="Join Us | SBBC Worldwide"
        description="Share your details to connect with SBBC. We'd love to welcome you."
      />
      <ChurchHeader />

      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Subtle background lights */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden
        >
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A]" />
          <div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-[#C29C1A] to-[#F4D03F]" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]">
              SBBC
            </span>
          </h1>
          <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto">
            We’d love to welcome you. Share your details and our team will reach
            out.
          </p>

          <form
            onSubmit={onSubmit}
            className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 md:p-8 shadow-2xl"
            noValidate
          >
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label
                  className="block text-sm text-white/80 mb-2"
                  htmlFor="full_name"
                >
                  Full Name
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sarah Johnson"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                />
              </div>

              <div>
                <label
                  className="block text-sm text-white/80 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                />
              </div>

              <div>
                <label
                  className="block text-sm text-white/80 mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +234 706 420 0926"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                />
              </div>

              {error ? (
                <div className="text-red-300 bg-red-900/20 border border-red-400/30 rounded-xl px-4 py-3">
                  {error}
                </div>
              ) : null}

              {success ? (
                <div className="flex items-center gap-2 text-green-300 bg-green-900/20 border border-green-400/30 rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-5 h-5" />
                  Thank you! Your details were submitted.
                </div>
              ) : null}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={mutation.isLoading}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-black font-bold bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] shadow-[0_8px_24px_rgba(194,156,26,0.45)] hover:shadow-[0_12px_28px_rgba(194,156,26,0.6)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {mutation.isLoading ? "Submitting..." : "Submit"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-white/60 text-center">
                We respect your privacy. Your information will only be used by
                SBBC to follow up with you.
              </p>
            </div>
          </form>
        </div>
      </section>

      <ChurchFooter />
    </div>
  );
}
