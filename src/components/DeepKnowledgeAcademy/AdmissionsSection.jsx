import { ApplicationForm } from "./ApplicationForm";

export function AdmissionsSection() {
  return (
    <section
      id="admissions"
      className="py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]"
    >
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        data-animate
      >
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333]">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Admissions
          </h2>
          <ol className="mt-3 list-decimal list-inside text-[#2B2B2B] dark:text-[#E0E0E0] space-y-1">
            <li>Submit application form</li>
            <li>Meet-and-greet/assessment</li>
            <li>Offer & enrollment</li>
          </ol>
          <p className="mt-4 text-[#2B2B2B] dark:text-[#E0E0E0]">
            We welcome students from all backgrounds who value a Christ‑centered
            education.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </section>
  );
}
