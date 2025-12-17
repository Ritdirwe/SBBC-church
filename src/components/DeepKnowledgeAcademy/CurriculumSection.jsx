export function CurriculumSection({ subjects }) {
  return (
    <section id="curriculum" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6" data-animate>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            Nursery
          </h3>
          <ul className="space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
            {subjects.nursery.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            Primary
          </h3>
          <ul className="space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
            {subjects.primary.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            Secondary
          </h3>
          <ul className="space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
            {subjects.secondary.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
