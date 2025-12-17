"use client";
import { useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, CheckCircle2, Calendar, Clock, Phone } from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import SEOHead from "@/components/SEOHead";
import ShareFormLink from "@/components/ShareFormLink";
import { toast } from "sonner";

// Build the next N Fridays from today
function getUpcomingFridays(count = 8) {
  const out = [];
  const today = new Date();
  let d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const day = d.getDay(); // 0=Sun ... 5=Fri
  const delta = (5 - day + 7) % 7; // days until Friday
  d.setDate(d.getDate() + delta);

  for (let i = 0; i < count; i++) {
    const date = new Date(d);
    date.setDate(d.getDate() + i * 7);
    const label = date.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    // store an ISO-ish short value too (YYYY-MM-DD) for simplicity
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    out.push({ label, value });
  }
  return out;
}

export default function ContactPage() {
  const fridays = useMemo(() => getUpcomingFridays(8), []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferredDate, setPreferredDate] = useState(fridays[0]?.value || "");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/counseling-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        let message = `When fetching /api/counseling-booking, the response was [${res.status}] ${res.statusText}`;
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
      toast.success("Booking received. We will confirm your Friday session.");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      // keep selected date
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

    // Convert YYYY-MM-DD to a nicer string for storage/display consistency
    const chosen = fridays.find((f) => f.value === preferredDate);
    const preferredLabel = chosen ? chosen.label : preferredDate;

    const payload = {
      full_name: fullName,
      email,
      phone,
      preferred_date: preferredLabel,
      message,
    };
    mutation.mutate(payload);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        path="/contact"
        title="Book a Friday Session | SBBC Worldwide"
        description="Book a Friday counseling session with the Pastor. Fill the short form and we will confirm your time."
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
            Book a Friday Session
          </h1>
          <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">
            Meet the Pastor for one-on-one counseling on Fridays only.
          </p>

          {/* Helpful info row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white/90">
              <Calendar className="w-4 h-4 text-[#F4D03F]" /> Fridays
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white/90">
              <Clock className="w-4 h-4 text-[#F4D03F]" /> 9:00 AM – 5:00 PM
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white/90">
              <Phone className="w-4 h-4 text-[#F4D03F]" /> +234 706 420 0926
            </div>
          </div>

          <form
            id="book"
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

              <div className="grid sm:grid-cols-2 gap-5">
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
              </div>

              <div>
                <label
                  className="block text-sm text-white/80 mb-2"
                  htmlFor="preferred_date"
                >
                  Choose a Friday
                </label>
                <select
                  id="preferred_date"
                  name="preferred_date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                >
                  {fridays.map((f) => (
                    <option
                      key={f.value}
                      value={f.value}
                      className="text-black"
                    >
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-sm text-white/80 mb-2"
                  htmlFor="message"
                >
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a short note..."
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
                  Thank you! We'll confirm your Friday session.
                </div>
              ) : null}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={mutation.isLoading}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-black font-bold bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] shadow-[0_8px_24px_rgba(194,156,26,0.45)] hover:shadow-[0_12px_28px_rgba(194,156,26,0.6)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {mutation.isLoading ? "Submitting..." : "Book Session"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <ShareFormLink
                label="Share this counseling form"
                anchor="#book"
              />

              <p className="text-xs text-white/60 text-center">
                Sessions are scheduled for Fridays. If you need a different day,
                please call the office so we can assist.
              </p>
            </div>
          </form>
        </div>
      </section>

      <ChurchFooter />
    </div>
  );
}
