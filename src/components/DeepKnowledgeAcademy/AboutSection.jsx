import {
  BookOpen,
  GraduationCap,
  Users,
  Heart,
  CheckCircle,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-6">
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        data-animate
      >
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
            About the School
          </h2>
          <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
            We partner with families to nurture students in wisdom, excellence,
            and godly character. Teaching is rigorous and joyful, with daily
            devotion, Scripture memory, and mentoring woven through school life.
          </p>
          <ul className="mt-4 space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#34D399] mt-0.5" />{" "}
              Qualified, caring teachers
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#34D399] mt-0.5" /> Safe
              campus with strong safeguarding
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#34D399] mt-0.5" /> Strong
              academics and discipleship
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
            Our Christian Ethos
          </h3>
          <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
            Jesus Christ is at the center of our life together. We affirm the
            authority of Scripture and aim to cultivate love for God and
            neighbor through chapel, service, and learning.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[#FFF9E6] dark:bg-[#2A230E] border border-[#FCE7A0]">
              <Heart className="w-5 h-5 text-[#C29C1A]" />
              <p className="mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]">
                Character & service
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#E6F0FF] dark:bg-[#0F1A2A] border border-[#A7C4FF]">
              <BookOpen className="w-5 h-5 text-[#3B82F6]" />
              <p className="mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]">
                Biblical worldview
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#EAFBF4] dark:bg-[#0F231C] border border-[#B5F5DE]">
              <Users className="w-5 h-5 text-[#10B981]" />
              <p className="mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]">
                Family partnership
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FDEAF3] dark:bg-[#2A0F21] border border-[#F8B5D5]">
              <GraduationCap className="w-5 h-5 text-[#EC4899]" />
              <p className="mt-2 text-sm text-[#2B2B2B] dark:text-[#E0E0E0]">
                Academic excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
