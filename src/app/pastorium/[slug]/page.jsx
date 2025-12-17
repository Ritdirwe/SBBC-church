import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageGallery from "@/components/ImageGallery";
import DepartmentForm from "@/components/DepartmentForm";
import {
  Target,
  Users,
  Music,
  Video,
  BookOpen,
  Globe2,
  HeartHandshake,
  Calendar,
  Mic2,
  Paintbrush2,
  Building,
  Megaphone,
  MapPin,
  Mail,
} from "lucide-react";

export default function PastoriumDetailPage({ params: { slug } }) {
  const titleFromSlug = (s) =>
    s
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const humanTitleMap = {
    "be-mandate": "Be Mandate",
    "youth-church": "Youth Church",
    "worship-intersensory": "Worship/Intersensory",
    "the-pastors": "The Pastors",
    "media-hub": "Media Hub",
    "church-structures": "Church Structures",
  };

  const pageTitle = humanTitleMap[slug] || titleFromSlug(slug || "");

  const descriptionMap = {
    "be-mandate":
      "Our core mission: reaching people with the Gospel, discipling believers, and serving communities with the love of Christ.",
    "youth-church":
      "A vibrant space where teens and young adults grow in faith, character, and leadership through worship, groups, and outreach.",
    "worship-intersensory":
      "Worship that engages heart and mind — music, prayer, and creative expression that points to Jesus.",
    "the-pastors":
      "Meet the pastoral team who shepherd the church, preach the Word, and equip the saints for ministry.",
    "media-hub":
      "Messages, testimonies, and stories — all the ways we share Christ online and keep the family connected.",
    "church-structures":
      "An overview of how our church is organized for ministry — boards, departments, teams, and how they serve together.",
  };

  const bodyText =
    descriptionMap[slug] ||
    "This page provides a simple overview of this area of Operations.";

  // UPDATED: Be Mandate now uses the uploaded image with responsive variants.
  const heroImageMap = {
    "be-mandate":
      // Base src: exact fit to current hero aspect (1920x600), centered crop, smart quality
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x600/center/-/quality/smart/-/format/auto/",
    "youth-church":
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=600&fit=crop&q=80",
    "worship-intersensory":
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1920&h=600&fit=crop&q=80",
    "the-pastors":
      // Switch to the requested SBBC pic6 image with a clean hero crop and sharpening
      "https://ucarecdn.com/30d0681c-cb87-4d51-9a4d-d1f6052c2afa/-/scale_crop/1920x600/center/-/quality/smart/-/format/auto/-/sharp/2/",
    "media-hub":
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=600&fit=crop&q=80",
    "church-structures":
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1920&h=600&fit=crop&q=80",
  };

  // NEW: srcSet only where needed (Be Mandate) to serve a sharper large-screen version.
  const heroImageSrcSetMap = {
    "be-mandate": [
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1280x400/center/-/quality/smart/-/format/auto/ 1280w",
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x600/center/-/quality/smart/-/format/auto/ 1920w",
      // Use 2560x800 to match the hero aspect for crispness on large screens
      "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/2560x800/center/-/quality/smart/-/format/auto/ 2560w",
    ].join(", "),
  };

  const heroImage = heroImageMap[slug];
  const heroSrcSet = heroImageSrcSetMap[slug];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero (image with overlay, concise and readable) */}
      <div className="relative w-full h-72 md:h-96">
        <img
          src={
            heroImage ||
            "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=600&fit=crop&q=80"
          }
          alt={pageTitle}
          className="w-full h-full object-cover"
          // Keep top focus for the Pastors hero so the subject sits nicely
          style={
            slug === "the-pastors"
              ? { objectPosition: "center top" }
              : undefined
          }
          // NEW: Serve sharper source on large screens for Be Mandate
          srcSet={heroSrcSet}
          sizes={heroSrcSet ? "100vw" : undefined}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            {/* Remove the breadcrumb "Operations / Be Mandate" specifically on the Be Mandate page */}
            {slug !== "be-mandate" && (
              <nav className="text-sm mb-2 text-white/80">
                <a href="/pastorium" className="hover:underline">
                  Operations
                </a>{" "}
                / <span className="text-white">{pageTitle}</span>
              </nav>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {pageTitle}
            </h1>
            <p className="mt-4 text-white/90 max-w-3xl">{bodyText}</p>
          </div>
        </div>
      </div>

      {/* Content switch: tailor each page with pictures, writeups, icons, and forms */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* BE MANDATE */}
          {slug === "be-mandate" && (
            <div className="space-y-16">
              <div className="grid grid-cols-1 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-black dark:text-white">
                    The Mission
                  </h2>
                  <p className="mt-4 text-[#6E6E6E] dark:text-[#A0A0A0] leading-relaxed">
                    We exist to preach Christ, make disciples, and serve the
                    city. Join outreaches, prayer walks, and neighborhood care
                    projects happening every month.
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Feature
                      icon={Target}
                      title="Evangelism"
                      text="Street, campus, and marketplace"
                    />
                    <Feature
                      icon={Globe2}
                      title="Missions"
                      text="New cities and church plants"
                    />
                    <Feature
                      icon={HeartHandshake}
                      title="Compassion"
                      text="Food, care, and counseling"
                    />
                    <Feature
                      icon={Megaphone}
                      title="Training"
                      text="Gospel conversations that work"
                    />
                  </div>
                </div>
                {/**
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1509099836639-18ba02c0e2e1?w=1200&q=80&fit=crop"
                    alt="Outreach"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                */}
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Get Involved
                  </h3>
                  <p className="mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    Sign up to serve with a team.
                  </p>
                  <div className="mt-6">
                    <DepartmentForm />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Gallery
                  </h3>
                  <p className="mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    Moments from recent outreaches.
                  </p>
                  <div className="mt-4">
                    <ImageGallery />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* YOUTH CHURCH */}
          {slug === "youth-church" && (
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Vibes + Discipleship
                </h2>
                <p className="mt-3 text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Weekly hangouts, small groups, and worship nights designed to
                  help young people follow Jesus together.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MiniCard
                    icon={Calendar}
                    title="Fridays 5pm"
                    text="Youth night"
                  />
                  <MiniCard
                    icon={Users}
                    title="Crews"
                    text="Small groups by schools & streets"
                  />
                  <MiniCard
                    icon={Mic2}
                    title="Open Mic"
                    text="Music, poetry, testimonies"
                  />
                </div>
              </div>

              <div>
                <ImageGallery />
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Join the Youth Team
                  </h3>
                  <p className="mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    Mentors, musicians, media — we’d love you on the squad.
                  </p>
                  <div className="mt-6">
                    <DepartmentForm />
                  </div>
                </div>
                <div className="bg-[#F9FAFB] dark:bg-[#1B1B1B] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333]">
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Upcoming
                  </h3>
                  <ul className="mt-4 space-y-3 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    <li>• Campus outreach week</li>
                    <li>• City-wide youth night</li>
                    <li>• Leaders training retreat</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* WORSHIP / INTERSENSORY */}
          {slug === "worship-intersensory" && (
            <div className="space-y-16">
              <div className="grid md:grid-cols-3 gap-6">
                <InfoCard
                  icon={Music}
                  title="Choir & Band"
                  text="Auditions, rehearsals, services."
                />
                <InfoCard
                  icon={Paintbrush2}
                  title="Creative Arts"
                  text="Dance, drama, visuals for worship."
                />
                <InfoCard
                  icon={HeartHandshake}
                  title="Prayer"
                  text="Intercession and altars of fire."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=1200&q=80&fit=crop"
                  alt="Worship"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Audition / Join a Team
                  </h3>
                  <p className="mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    We welcome passionate worshipers and intercessors. Sign up
                    below and a leader will reach out.
                  </p>
                  <div className="mt-6 max-w-xl">
                    <DepartmentForm />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* THE PASTORS */}
          {slug === "the-pastors" && (
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Pastor Mrs. Lawson Mgoa",
                    role: "Pastor",
                    photo:
                      "https://ucarecdn.com/1be42260-c4a0-4cd7-a60a-a3357077cc2b/-/format/auto/",
                  },
                  {
                    name: "Pastor Joshua Golden",
                    role: "Residence Pastor/Church Secretary",
                    photo:
                      "https://ucarecdn.com/e1bb00b5-5507-4388-8b16-24219a8ae3de/-/format/auto/",
                  },
                  {
                    name: "Pr. Daniel K.",
                    role: "Worship Pastor",
                    photo:
                      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80&fit=crop",
                  },
                  {
                    name: "Pr. Joy N.",
                    role: "Youth Pastor",
                    photo:
                      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&q=80&fit=crop",
                  },
                  {
                    name: "Pr. Emma O.",
                    role: "Outreach Pastor",
                    photo:
                      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&q=80&fit=crop",
                  },
                  {
                    name: "Pr. Grace I.",
                    role: "Prayer Pastor",
                    photo:
                      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80&fit=crop",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl overflow-hidden"
                  >
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="w-full h-72 object-cover"
                      // Keep heads clearly visible for the first two portraits
                      style={
                        i === 0
                          ? { objectPosition: "center 15%" }
                          : i === 1
                            ? { objectPosition: "center 10%" }
                            : undefined
                      }
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        {p.name}
                      </h3>
                      <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                        {p.role}
                      </p>
                      <div className="mt-4 flex gap-3 text-sm">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-[#C29C1A] hover:underline"
                        >
                          <Mail size={16} /> Email
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-[#C29C1A] hover:underline"
                        >
                          <MapPin size={16} /> Meet
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MEDIA HUB */}
          {slug === "media-hub" && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-black dark:text-white">
                    Watch & Listen
                  </h2>
                  <p className="mt-3 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    Catch up on messages and stories across our platforms. New
                    content weekly.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/messages"
                      className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold"
                    >
                      Watch Messages
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      className="px-5 py-3 rounded-lg border border-[#E9E9E9] dark:border-[#333] text-black dark:text-white"
                    >
                      Visit YouTube
                    </a>
                  </div>
                </div>
                <div>
                  <ImageGallery />
                </div>
              </div>

              <div className="bg-white dark:bg-[#1E1E1E] border border-[#E9E9E9] dark:border-[#333] rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Media Team — Join Us
                </h3>
                <p className="mt-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Cameras, editing, graphics, live mix — we can train you.
                </p>
                <div className="mt-6 max-w-xl">
                  <DepartmentForm />
                </div>
              </div>
            </div>
          )}

          {/* CHURCH STRUCTURES */}
          {slug === "church-structures" && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StructureCard
                  icon={Building}
                  title="Boards"
                  text="Oversight & governance"
                />
                <StructureCard
                  icon={Users}
                  title="Departments"
                  text="Day-to-day ministry work"
                />
                <StructureCard
                  icon={HeartHandshake}
                  title="Teams"
                  text="Focused serving units"
                />
                <StructureCard
                  icon={BookOpen}
                  title="House Fellowships"
                  text="Care, teaching, prayer"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    How we work together
                  </h3>
                  <p className="mt-3 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    Clear roles, shared vision, and aligned rhythms help us
                    serve people well. If you’d like to be part of a team, sign
                    up below and we’ll guide you to the best fit.
                  </p>
                  <div className="mt-6 max-w-xl">
                    <DepartmentForm />
                  </div>
                </div>
                <div>
                  <ImageGallery />
                </div>
              </div>
            </div>
          )}

          {/* DEFAULT (fallback) */}
          {![
            "be-mandate",
            "youth-church",
            "worship-intersensory",
            "the-pastors",
            "media-hub",
            "church-structures",
          ].includes(slug) && (
            <div className="max-w-4xl">
              <p className="text-[#444] dark:text-[#D1D1D1] leading-relaxed">
                {bodyText}
              </p>
            </div>
          )}
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-[#111]/90 dark:bg-white/10 flex items-center justify-center text-[#F4D03F]">
        <Icon size={20} />
      </div>
      <div>
        <div className="font-semibold text-black dark:text-white">{title}</div>
        <div className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">{text}</div>
      </div>
    </div>
  );
}

function MiniCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-[#E9E9E9] dark:border-[#333] p-5 bg-white dark:bg-[#1E1E1E]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] text-black flex items-center justify-center">
          <Icon size={18} />
        </div>
        <div>
          <div className="font-semibold text-black dark:text-white">
            {title}
          </div>
          <div className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-[#E9E9E9] dark:border-[#333] p-6 bg-white dark:bg-[#1E1E1E]">
      <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] dark:bg-white/10 text-[#F4D03F] flex items-center justify-center">
        <Icon size={22} />
      </div>
      <div className="mt-3 font-semibold text-black dark:text-white">
        {title}
      </div>
      <div className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">{text}</div>
    </div>
  );
}

function StructureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-[#E9E9E9] dark:border-[#333] p-6 bg-white dark:bg-[#1E1E1E]">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#60A5FA] to-[#2563EB] text-white flex items-center justify-center">
          <Icon size={20} />
        </div>
        <div>
          <div className="font-semibold text-black dark:text-white">
            {title}
          </div>
          <div className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
