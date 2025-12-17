import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Heart } from "lucide-react";
// added: react + react-query for the registration form
import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import ShareFormLink from "@/components/ShareFormLink"; // ADD: share row

export default function MarriageAcademyPage() {
  const tracks = [
    "Premarital foundations",
    "Marriage enrichment",
    "Parenting & family life",
    "Communication & conflict resolution",
    "Counseling & mentorship",
  ];

  // ---------------- Registration form state ----------------
  const [partner1Name, setPartner1Name] = useState("");
  const [partner2Name, setPartner2Name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Engaged");
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [preferredSchedule, setPreferredSchedule] = useState("Weekend");
  const [weddingDate, setWeddingDate] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const submitLabel = "Submit Registration";

  const registrationMutation = useMutation({
    mutationFn: async () => {
      const full_name = [partner1Name, partner2Name]
        .filter(Boolean)
        .join(" & ");
      const payload = {
        school_name: "Marriage Academy",
        full_name,
        email,
        phone,
        qualifications: JSON.stringify({
          partner1Name,
          partner2Name,
          maritalStatus,
          track: selectedTrack,
          preferredSchedule,
          weddingDate,
          isMember,
          notes,
        }),
      };
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(
          `When fetching /api/school-admission, the response was [${response.status}] ${response.statusText}`,
        );
      }
      return response.json();
    },
    onSuccess: () => {
      setSuccess(
        "Thanks! Your registration has been received. Our team will contact you shortly.",
      );
      setError(null);
      setPartner1Name("");
      setPartner2Name("");
      setEmail("");
      setPhone("");
      setMaritalStatus("Engaged");
      setSelectedTrack(tracks[0]);
      setPreferredSchedule("Weekend");
      setWeddingDate("");
      setIsMember(false);
      setNotes("");
      setConsent(false);
    },
    onError: (e) => {
      console.error(e);
      setError(
        "Sorry, we couldn't submit your registration. Please try again.",
      );
      setSuccess(null);
    },
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!consent) return;
      setSuccess(null);
      setError(null);
      registrationMutation.mutate();
    },
    [consent, registrationMutation],
  );

  const isDisabled = registrationMutation.isLoading || !consent;

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* SEO */}
      <SEOHead path="/education/marriage-academy" />
      <ChurchHeader />

      <div className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=480&fit=crop&q=80"
          alt="Marriage Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <Heart className="w-14 h-14 text-[#F4D03F] mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Marriage Academy
            </h1>
            <p className="mt-2 text-white/90 max-w-3xl mx-auto">
              Practical courses and mentoring to build strong, joyful homes.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              What You'll Learn
            </h2>
            <ul className="space-y-2">
              {tracks.map((t) => (
                <li key={t} className="text-[#2B2B2B] dark:text-[#E0E0E0]">
                  • {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              About the Academy
            </h2>
            <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
              Sessions are led by seasoned mentors and counselors with practical
              tools for everyday life. Whether you're preparing for marriage or
              seeking to enrich your relationship, there's a track for you.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section
        id="marriage-academy-register"
        className="py-16 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E9E9E9] dark:border-[#333333] p-8 md:p-10 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                Register for Marriage Academy
              </h2>
              <p className="mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                Fill in your details below and we’ll reach out with next steps.
              </p>
            </div>

            {success ? (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/40 p-4 text-green-800 dark:text-green-200">
                {success}
              </div>
            ) : null}
            {error ? (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/40 p-4 text-red-800 dark:text-red-200">
                {error}
              </div>
            ) : null}

            <form onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Partner 1 Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={partner1Name}
                    onChange={(e) => setPartner1Name(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Partner 2 Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={partner2Name}
                    onChange={(e) => setPartner2Name(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                    placeholder="e.g. Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Primary Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                    placeholder="e.g. +234 706 420 0926"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Marital Status
                  </label>
                  <select
                    value={maritalStatus}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  >
                    {[
                      "Engaged",
                      "Newly Married (0-2 yrs)",
                      "Married (2+ yrs)",
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Select Track
                  </label>
                  <select
                    value={selectedTrack}
                    onChange={(e) => setSelectedTrack(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  >
                    {tracks.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Preferred Schedule
                  </label>
                  <select
                    value={preferredSchedule}
                    onChange={(e) => setPreferredSchedule(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  >
                    {["Morning", "Evening", "Weekend"].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Wedding Date (optional)
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Are you members of SBBC?
                  </label>
                  <select
                    value={isMember ? "Yes" : "No"}
                    onChange={(e) => setIsMember(e.target.value === "Yes")}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black dark:text-white mb-1">
                    Notes (optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full rounded-xl border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#151515] px-4 py-3 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                    placeholder="Tell us anything helpful (availability, special considerations, etc.)"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-[#E5E7EB] dark:border-[#444] text-[#C29C1A] focus:ring-[#F4D03F]"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  I agree to be contacted regarding my registration and consent
                  to the processing of my information for this purpose.
                </label>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg ${
                    isDisabled
                      ? "bg-gray-300 dark:bg-[#333] text-gray-600 dark:text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black hover:scale-[1.02] active:scale-100"
                  }`}
                >
                  {registrationMutation.isLoading
                    ? "Submitting..."
                    : submitLabel}
                </button>
              </div>
            </form>

            <ShareFormLink
              label="Share this registration form"
              anchor="#marriage-academy-register"
            />
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
