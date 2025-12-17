export function FeesSection() {
  return (
    <section id="fees" className="py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]">
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        data-animate
      >
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
            Fees Overview
          </h3>
          <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
            Tuition varies by level and class. Detailed fee schedules are shared
            during admissions. We also offer sibling discounts and limited
            scholarships.
          </p>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
            Financial Aid
          </h3>
          <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">
            Need assistance? Indicate interest in aid in your application notes,
            and our team will guide you through available options.
          </p>
        </div>
      </div>
    </section>
  );
}
