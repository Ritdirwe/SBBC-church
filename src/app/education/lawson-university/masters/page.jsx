import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, ArrowRight } from "lucide-react";

export default function MastersPage() {
  const schools = [
    {
      name: "School of Technology",
      programs: [
        "MSc Computer Science",
        "MSc Artificial Intelligence",
        "MSc Cybersecurity",
        "MSc Data Analytics",
      ],
    },
    {
      name: "School of Business",
      programs: [
        "MBA (General Management)",
        "MBA (Finance)",
        "MBA (Marketing)",
        "MSc Economics",
      ],
    },
    {
      name: "School of Health Sciences",
      programs: [
        "MPH Public Health",
        "MSc Nursing Leadership",
        "MSc Biomedical Sciences",
      ],
    },
    {
      name: "School of Theology & Leadership",
      programs: ["MA Theology", "MA Leadership", "M.Div Divinity"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      <div className="relative w-full h-64">
        <img
          src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?w=1600&h=400&fit=crop&q=80"
          alt="Graduate Studies"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <Award className="w-14 h-14 text-[#F4D03F] mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Master's Degrees
            </h1>
            <p className="mt-2 text-white/90 max-w-3xl mx-auto">
              Advance your expertise with industry-informed, research-driven
              programs.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {schools.map((s) => (
              <div
                key={s.name}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]"
              >
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {s.name}
                </h2>
                <ul className="space-y-2">
                  {s.programs.map((p) => (
                    <li key={p} className="text-[#2B2B2B] dark:text-[#E0E0E0]">
                      • {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/education/lawson-university#apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
