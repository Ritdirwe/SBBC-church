import { Calendar } from "lucide-react";

const terms = [
  { term: "First Term", dates: "Sept 9 – Dec 13" },
  { term: "Second Term", dates: "Jan 6 – Mar 28" },
  { term: "Third Term", dates: "Apr 28 – Jul 18" },
];

export function CalendarSection() {
  return (
    <section id="calendar" className="py-16 px-6">
      <div className="max-w-6xl mx-auto" data-animate>
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-10">
          Academic Calendar (Sample)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {terms.map((t) => (
            <div
              key={t.term}
              className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#C29C1A]" />
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {t.term}
                </h3>
              </div>
              <p className="mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
                {t.dates}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
