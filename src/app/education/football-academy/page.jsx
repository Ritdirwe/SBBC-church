import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
// add more icons for rich sections
import {
  Trophy,
  Users,
  Dumbbell,
  Clock,
  MapPin,
  Calendar,
  Shield,
  Medal,
  Flag,
  Mail,
  Phone,
} from "lucide-react";
import { useState, useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ShareFormLink from "@/components/ShareFormLink";

export default function FootballAcademyPage() {
  // Content data
  const highlights = [
    "Youth development pathways",
    "Elite performance coaching",
    "Strength & conditioning",
    "Sports science & nutrition",
    "League and tournament exposure",
  ];

  const programs = [
    {
      title: "U10-U12 Fundamentals",
      detail: "Skills, coordination, fun-based learning",
      color: "bg-[#E6FFFA] dark:bg-[#0F3B36]",
    },
    {
      title: "U13-U15 Development",
      detail: "Tactics, ball mastery, positional play",
      color: "bg-[#FFF7ED] dark:bg-[#3B2E1F]",
    },
    {
      title: "U16-U19 Performance",
      detail: "Competition prep, S&C, video analysis",
      color: "bg-[#EEF2FF] dark:bg-[#1F2440]",
    },
    {
      title: "Senior / Elite",
      detail: "Trials, showcase, pro/college pathways",
      color: "bg-[#F0FDF4] dark:bg-[#0F2314]",
    },
  ];

  const schedule = [
    { day: "Mon", time: "4:00–6:00 PM", focus: "Technical + Ball Mastery" },
    { day: "Wed", time: "4:00–6:00 PM", focus: "Tactics + Small Sided" },
    { day: "Fri", time: "4:00–6:00 PM", focus: "Conditioning + Finishing" },
    { day: "Sat", time: "10:00–12:00 PM", focus: "Match Prep / Scrimmage" },
  ];

  const coaches = [
    {
      name: "Coach Daniel Lawson",
      role: "Head Coach – UEFA B",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop&q=60",
      badges: ["UEFA B", "10+ yrs"],
    },
    {
      name: "Coach Mercy A.",
      role: "Strength & Conditioning",
      img: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?w=400&h=400&fit=crop&q=60",
      badges: ["NSCA", "Sports Science"],
    },
    {
      name: "Coach Peter K.",
      role: "Youth Development",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&q=60",
      badges: ["FA Youth", "Safeguarding"],
    },
  ];

  const facilities = [
    { icon: MapPin, label: "Full-size grass & 5-a-side pitches" },
    { icon: Dumbbell, label: "High-performance gym & recovery" },
    { icon: Shield, label: "On-site physio & injury prevention" },
    { icon: Calendar, label: "Video analysis & classroom" },
  ];

  const pathways = [
    {
      icon: Medal,
      title: "Scholarships",
      desc: "Academic & athletic scholarships for top talent",
    },
    {
      icon: Flag,
      title: "Showcase",
      desc: "Trials & scouting events with partner clubs",
    },
    {
      icon: Trophy,
      title: "Leagues",
      desc: "Local & regional league participation",
    },
  ];

  const fixturesUpcoming = [
    { date: "Nov 23", opp: "City U19", venue: "Home", time: "10:00" },
    { date: "Dec 01", opp: "Rovers U17", venue: "Away", time: "14:00" },
  ];
  const resultsRecent = [
    { date: "Nov 15", opp: "United U19", score: "2 - 1", note: "W" },
    { date: "Nov 08", opp: "Lions U17", score: "1 - 1", note: "D" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1521417531039-7957f3d1f4a6?w=800&q=60",
    "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=800&q=60",
    "https://images.unsplash.com/photo-1526232761682-d26e02d0815d?w=800&q=60",
    "https://images.unsplash.com/photo-1603808033192-6d1313e69d57?w=800&q=60",
    "https://images.unsplash.com/photo-1542332213-9f7f5b4c43b1?w=800&q=60",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=60",
  ];

  // Trial application form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ageGroup, setAgeGroup] = useState("U16-U19");
  const [position, setPosition] = useState("Midfield");
  const [experience, setExperience] = useState("");

  const queryClient = useQueryClient();

  // Prepare payload for submission
  const qualifications = useMemo(() => {
    return `Age Group: ${ageGroup} | Position: ${position} | Experience: ${experience}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ageGroup, position, experience]);

  const trialMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          school_name: "Football Academy",
          full_name: fullName,
          email,
          phone,
          qualifications,
        }),
      });
      if (!response.ok) {
        throw new Error(
          `When fetching /api/school-admission, the response was [${response.status}] ${response.statusText}`,
        );
      }
      return response.json();
    },
    onSuccess: () => {
      // Clear form and optionally invalidate any related queries
      setFullName("");
      setEmail("");
      setPhone("");
      setExperience("");
      queryClient.invalidateQueries({
        queryKey: ["applications", "football-academy"],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      console.error("Missing required fields");
      return;
    }
    trialMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-[420px] md:h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=1920&h=700&fit=crop&q=80"
          alt="Football Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto w-full px-6">
            <div className="text-left">
              <Trophy className="w-14 h-14 text-[#F4D03F] mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Football Academy
              </h1>
              <p className="mt-3 text-white/90 max-w-2xl">
                Building world-class athletes through discipline, coaching, and
                community. Join our pathways from grassroots to elite.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#F4D03F] text-black font-semibold hover:bg-[#C29C1A] transition-colors"
                >
                  Apply for Trials
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About & Highlights */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              About the Academy
            </h2>
            <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
              Our program focuses on player development from fundamentals to
              elite performance. Athletes train with certified coaches and
              benefit from a holistic approach to fitness, nutrition, recovery,
              and mindset.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Users className="w-6 h-6 text-[#C29C1A]" />
              <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
                Safeguarding and youth-first approach
              </p>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <Dumbbell className="w-6 h-6 text-[#C29C1A]" />
              <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
                Strength & conditioning integrated into weekly plans
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Highlights
            </h2>
            <ul className="space-y-2">
              {highlights.map((h) => (
                <li key={h} className="text-[#2B2B2B] dark:text-[#E0E0E0]">
                  • {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Programs & Age Groups */}
      <section id="programs" className="py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Programs & Age Groups
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className={`rounded-xl p-6 border border-[#E9E9E9] dark:border-[#333333] ${p.color}`}
              >
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section id="schedule" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#C29C1A]" /> Training Schedule
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {schedule.map((s) => (
              <div
                key={s.day}
                className="rounded-xl p-5 bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333333]"
              >
                <div className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  {s.day}
                </div>
                <div className="text-lg font-semibold text-black dark:text-white">
                  {s.time}
                </div>
                <div className="text-[#2B2B2B] dark:text-[#E0E0E0]">
                  {s.focus}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            Schedule may vary during league weeks and holidays.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Coaching Staff
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl overflow-hidden border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#1E1E1E]"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {c.name}
                  </h3>
                  <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">{c.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.badges.map((b) => (
                      <span
                        key={b}
                        className="text-xs px-2 py-1 rounded-full bg-[#F4D03F] text-black"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Pathways */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Facilities
            </h2>
            <div className="space-y-3">
              {facilities.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <f.icon className="w-5 h-5 text-[#C29C1A]" /> {f.label}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Pathways & Partnerships
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {pathways.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl p-4 border border-[#E9E9E9] dark:border-[#333333]"
                >
                  <p.icon className="w-6 h-6 text-[#C29C1A]" />
                  <div className="mt-2 text-black dark:text-white font-semibold">
                    {p.title}
                  </div>
                  <div className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fixtures & Results */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h3 className="text-xl font-bold text-black dark:text-white mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C29C1A]" /> Upcoming Fixtures
            </h3>
            <ul className="space-y-2">
              {fixturesUpcoming.map((fx) => (
                <li
                  key={`${fx.date}-${fx.opp}`}
                  className="flex items-center justify-between text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <span>
                    {fx.date} • {fx.opp}
                  </span>
                  <span className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                    {fx.venue} • {fx.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h3 className="text-xl font-bold text-black dark:text-white mb-3 flex items-center gap-2">
              <Flag className="w-5 h-5 text-[#C29C1A]" /> Recent Results
            </h3>
            <ul className="space-y-2">
              {resultsRecent.map((r) => (
                <li
                  key={`${r.date}-${r.opp}`}
                  className="flex items-center justify-between text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <span>
                    {r.date} • {r.opp}
                  </span>
                  <span className="text-sm font-semibold">
                    {r.score}{" "}
                    <span className="ml-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                      ({r.note})
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <img
                key={i}
                src={g}
                alt={`Academy gallery ${i + 1}`}
                className="w-full h-40 md:h-56 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fees & Scholarships + FAQs */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h3 className="text-xl font-bold text-black dark:text-white mb-3">
              Fees & Scholarships
            </h3>
            <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
              We offer accessible fees with need-based aid and merit
              scholarships. Trials are free. Detailed fee sheets are provided
              after application.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h3 className="text-xl font-bold text-black dark:text-white mb-3">
              FAQs
            </h3>
            <ul className="space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
              <li>
                • What gear is required? – Boots, shin guards, water bottle.
              </li>
              <li>• Where are trainings held? – Main campus pitches.</li>
              <li>
                • Do you support academic balance? – Yes, study hours & tutoring
                available.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trial Application Form */}
      <section id="apply" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] p-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
              Apply for Trials
            </h2>
            <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mb-6">
              Fill out the form and our team will contact you with trial dates
              and next steps.
            </p>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Full Name
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Age Group
                </label>
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white"
                >
                  <option>U10-U12</option>
                  <option>U13-U15</option>
                  <option>U16-U19</option>
                  <option>Senior / Elite</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Preferred Position
                </label>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white"
                >
                  <option>Goalkeeper</option>
                  <option>Defence</option>
                  <option>Midfield</option>
                  <option>Forward</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Experience (clubs, years, achievements)
                </label>
                <textarea
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#242424] px-3 py-2 text-black dark:text-white"
                  placeholder="e.g. 3 years at City Juniors, U17 regional champions"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
                <button
                  type="submit"
                  disabled={trialMutation.isPending}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#F4D03F] text-black font-semibold hover:bg-[#C29C1A] transition-colors disabled:opacity-60"
                >
                  {trialMutation.isPending
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
                {trialMutation.isSuccess && (
                  <span className="text-green-600 dark:text-green-400">
                    Thanks! We received your details.
                  </span>
                )}
                {trialMutation.isError && (
                  <span className="text-red-600 dark:text-red-400">
                    Could not submit right now. Please try again.
                  </span>
                )}
              </div>
              <div className="md:col-span-2 text-sm text-[#6E6E6E] dark:text-[#A0A0A0] flex items-center gap-3 mt-1">
                <Mail className="w-4 h-4" /> academy@yourdomain.org
                <Phone className="w-4 h-4" /> +234 706 420 0926
              </div>
            </form>

            <ShareFormLink label="Share this trials form" anchor="#apply" />
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
