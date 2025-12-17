"use client";

import { Calendar, Clock, MapPin, Phone, ArrowRight } from "lucide-react";

export function CounselingSection({ mapsDirectionsUrl }) {
  return (
    <section data-animate className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f131a] shadow-xl">
          <div className="grid md:grid-cols-2 items-stretch">
            {/* Left: Copy & actions */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
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
                Care & Support
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Visit Us for Counseling
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We're here for you. Sit with our pastoral team for private,
                compassionate guidance rooted in God's word.
              </p>

              {/* Info list */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#C29C1A] mt-0.5" />
                  <div>
                    <p className="text-sm text-white/60">Available Times</p>
                    <p className="text-base text-white font-medium">
                      Sundays: 9 AM – 5 PM · Wednesdays: 6 PM – 8 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C29C1A] mt-0.5" />
                  <div>
                    <p className="text-sm text-white/60">Session Length</p>
                    <p className="text-base text-white font-medium">
                      30–45 minutes per session
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C29C1A] mt-0.5" />
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <a
                      href={mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-white font-medium underline underline-offset-4 hover:opacity-80"
                      aria-label="Open directions to SBBC Auditorium in Google Maps"
                    >
                      SBBC Auditorium
                    </a>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Now navigates to dedicated contact page with the form */}
                <a
                  href="/contact#book"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, #F4D03F, #C29C1A)",
                  }}
                  aria-label="Book a counseling session"
                >
                  Book a Session
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                  aria-label="Get Google Maps directions to SBBC Auditorium"
                >
                  <MapPin className="w-5 h-5 text-white/80" />
                  Get Directions
                </a>
              </div>

              {/* Contact line */}
              <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-white/60" />
                <span>Prefer to talk first? </span>
                <a
                  href="https://wa.me/2347064200926"
                  className="font-medium underline underline-offset-4 hover:opacity-80"
                >
                  +234 706 420 0926
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative h-[360px] md:h-full">
                {/* Updated image to use Uploadcare responsive variants with smart quality and sharpening */}
                <img
                  src="https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/1200x/-/quality/smart/-/format/auto/-/sharp/2/"
                  srcSet="https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/768x/-/quality/smart/-/format/auto/-/sharp/2/ 768w, https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/1200x/-/quality/smart/-/format/auto/-/sharp/2/ 1200w, https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/1600x/-/quality/smart/-/format/auto/-/sharp/2/ 1600w, https://ucarecdn.com/f0252625-a972-4e17-8fb7-fcf878964dc8/-/resize/2000x/-/quality/smart/-/format/auto/-/sharp/2/ 2000w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Visit us for counseling"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: "center top" }}
                />
                {/* overlay for readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.2))",
                  }}
                />
                {/* Removed center overlay text "One on One" */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed full-screen booking form modal in favor of dedicated /contact page */}
    </section>
  );
}
