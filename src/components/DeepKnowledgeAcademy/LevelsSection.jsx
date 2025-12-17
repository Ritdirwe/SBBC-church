import { BookOpen, Users, GraduationCap } from "lucide-react";

export function LevelsSection() {
  return (
    <section id="levels" className="py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-black dark:text-white text-center mb-10"
          data-animate
        >
          Nursery • Primary • Secondary
        </h2>
        <div className="grid md:grid-cols-3 gap-6" data-animate>
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
            <div className="w-12 h-12 rounded-full bg-[#FFF3C4] flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-[#C29C1A]" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Nursery (Ages 2–5)
            </h3>
            <p className="mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
              Play‑based learning with strong phonics and number sense in a
              caring, faith‑filled setting.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
            <div className="w-12 h-12 rounded-full bg-[#E6F0FF] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Primary (Years 1–6)
            </h3>
            <p className="mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
              Foundational literacy, numeracy, science, and Bible with projects
              and character formation.
            </p>
          </div>
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
            <div className="w-12 h-12 rounded-full bg-[#EAFBF4] flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Secondary (JSS1 – SS3)
            </h3>
            <p className="mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
              Strong academics, leadership, clubs, and exam preparation within a
              Christ‑centered culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
