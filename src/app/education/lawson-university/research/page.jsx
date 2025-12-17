import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlaskConical, Lightbulb, Microscope, ArrowRight } from "lucide-react";

export default function LawsonResearchPage() {
  const centers = [
    {
      name: "Center for AI & Data",
      desc: "Applied machine learning, ethics of AI, and data-driven policy.",
    },
    {
      name: "Health Innovation Lab",
      desc: "Public health analytics, biomedical devices, and telemedicine.",
    },
    {
      name: "Business & Policy Institute",
      desc: "Entrepreneurship, sustainable finance, and emerging markets.",
    },
    {
      name: "Faith & Society Forum",
      desc: "Theology, ethics, and leadership for the public square.",
    },
    {
      name: "Energy & Sustainability Hub",
      desc: "Renewables, storage, and climate resilience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-72">
        <img
          src="https://images.unsplash.com/photo-1559757175-08fda9fd3d1b?w=1800&h=480&fit=crop&q=80"
          alt="Research at Lawson University"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <Microscope className="w-16 h-16 text-[#F4D03F] mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Research
            </h1>
            <p className="mt-2 text-white/90 max-w-2xl mx-auto">
              Interdisciplinary teams tackling real-world problems.
            </p>
          </div>
        </div>
      </div>

      {/* Centers */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Research Centers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {centers.map((c) => (
              <div
                key={c.name}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
              >
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-[#C29C1A]" />
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {c.name}
                  </h3>
                </div>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mt-2">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[#F4D03F] mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Work With Us
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mt-2">
                  We collaborate with industry, government, and nonprofits on
                  research that matters. Students can join projects for credit,
                  funding, and publication opportunities.
                </p>
                <div className="mt-4">
                  <a
                    href="/education/lawson-university/doctorate"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
                  >
                    Explore Doctoral Research <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
