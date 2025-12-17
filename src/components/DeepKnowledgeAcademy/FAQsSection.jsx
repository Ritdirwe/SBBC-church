const faqs = [
  {
    q: "Do you admit students from any faith?",
    a: "Yes. We welcome all families who value a Christ‑centered education and agree to our school values and policies.",
  },
  {
    q: "Is there school transport?",
    a: "Routes vary by term based on demand. Please mention transport in your notes if needed.",
  },
  {
    q: "Do you offer scholarships?",
    a: "We provide limited need‑based support. Indicate interest in your application and our team will follow up.",
  },
  {
    q: "What exams do Secondary students prepare for?",
    a: "Students are prepared for WAEC/NECO and other relevant assessments.",
  },
];

export function FAQsSection() {
  return (
    <section id="faqs" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6" data-animate>
        {faqs.map((f) => (
          <details
            key={f.q}
            className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333]"
          >
            <summary className="cursor-pointer font-semibold text-black dark:text-white">
              {f.q}
            </summary>
            <p className="mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
