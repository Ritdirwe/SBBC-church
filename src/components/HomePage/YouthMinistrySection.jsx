import { Users, Music, Heart } from "lucide-react";
import { useState } from "react";
import DepartmentForm from "@/components/DepartmentForm";

export function YouthMinistrySection() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const joinButton = !showForm ? (
    <button
      type="button"
      onClick={handleOpenForm}
      aria-controls="department-join"
      aria-expanded={false}
      className="w-full sm:w-auto bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold px-5 py-3 rounded-lg transition-all duration-150 active:scale-[0.98]"
    >
      Join Department
    </button>
  ) : null;

  const formCard = showForm ? (
    <div className="bg-[#0b0f15] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-sm">
      <DepartmentForm />
    </div>
  ) : null;

  return (
    <section data-animate className="py-20 px-6 bg-[#0e1219]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f131a] shadow-xl">
          <div className="grid md:grid-cols-2 items-stretch">
            {/* Image (left on desktop) */}
            <div className="relative order-2 md:order-1">
              <div className="relative h-[320px] md:h-full">
                <img
                  src="https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/1080x1080/center/-/quality/smart/-/format/auto/"
                  srcSet={[
                    "https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/800x800/center/-/quality/smart/-/format/auto/ 800w",
                    "https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/1080x1080/center/-/quality/smart/-/format/auto/ 1080w",
                    "https://ucarecdn.com/52b45c89-66bf-462e-acc6-adacd639e7b0/-/scale_crop/1600x1600/center/-/quality/smart/-/format/auto/ 1600w",
                  ].join(", ")}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Youth worship gathering"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.25))",
                  }}
                />
              </div>
            </div>

            {/* Copy + Form (right on desktop) */}
            <div className="order-1 md:order-2 p-8 sm:p-12 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#F4D03F" }}
                />
                Youth Ministry
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
                Join Our Youth Ministry
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Be part of a vibrant community of young believers. Grow in
                faith, build lasting friendships, and make an impact together.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Users className="w-5 h-5 text-[#C29C1A]" />
                  Community
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Music className="w-5 h-5 text-[#C29C1A]" />
                  Worship
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Heart className="w-5 h-5 text-[#C29C1A]" />
                  Service
                </div>
              </div>

              <div className="mb-4">{joinButton}</div>
              {formCard}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
