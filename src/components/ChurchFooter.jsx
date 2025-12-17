import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Music,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function ChurchFooter() {
  // New: centralize the Google Maps links for the SBBC location
  const mapsShareUrl = "https://maps.app.goo.gl/wxjoAKJz5gaG6h5r5";
  const mapsEmbedSrc =
    "https://www.google.com/maps?q=8.898111%2C7.256139&output=embed"; // 8°53'53.2"N 7°15'22.1"E
  const mapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=8.898111%2C7.256139";

  return (
    <footer
      className="bg-black text-white py-16 px-6"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top grid: Brand, Links, Contact, Map */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Brand / Mission */}
          <div>
            {/* SBBC Logo */}
            <div className="w-12 h-12 rounded-full overflow-hidden mb-4 shadow-lg">
              <img
                src="https://raw.createusercontent.com/160d9076-4e45-4665-8dc3-a03b2c64cb23/"
                alt="SBBC Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className="text-xl font-semibold tracking-tight mb-3"
              style={{ letterSpacing: "-0.2px" }}
            >
              SBBC Worldwide
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Spreading the gospel of Jesus Christ across nations through
              worship, discipleship, and service. Join us as we bring hope and
              light to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/vision"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/education"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="/finance"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  href="/foundation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Foundation
                </a>
              </li>
              <li>
                <a
                  href="/pastorium"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pastorium
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin
                  className="w-4 h-4 text-[#F4D03F] mt-0.5"
                  strokeWidth={1.75}
                />
                <a
                  href={mapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-4"
                  aria-label="Open address in Google Maps"
                >
                  SBBC Headquarters 102A, Barrister Collins Aimuan Road, Kuje,
                  FCT-Abuja, Nigeria
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#F4D03F]" strokeWidth={1.75} />
                <a
                  href="https://wa.me/2347064200926"
                  className="hover:text-white"
                >
                  +234 706 420 0926
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-[#F4D03F]" strokeWidth={1.75} />
                <a
                  href="mailto:info@sbbcworldwide.org"
                  className="hover:text-white"
                >
                  info@sbbcworldwide.org
                </a>
              </div>
            </div>
          </div>

          {/* Mini Map */}
          <div id="map">
            <h4 className="text-sm font-semibold mb-4 text-gray-400">
              Visit Us
            </h4>
            <div className="bg-gray-800 h-40 rounded-xl overflow-hidden border border-white/10">
              {/* Updated Google Maps embed to the requested coordinates */}
              <iframe
                title="SBBC Kuje Location Map"
                src={mapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-3">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                aria-label="Get directions in Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#F4D03F]" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Social icons row ABOVE the slim white line */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-end">
            {/* Each link is a subtle frosted chip with gold hover */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Facebook
                className="w-5 h-5 text-white group-hover:text-[#F4D03F]"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Instagram
                className="w-5 h-5 text-white group-hover:text-[#F4D03F]"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Twitter
                className="w-5 h-5 text-white group-hover:text-[#F4D03F]"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Youtube
                className="w-5 h-5 text-white group-hover:text-[#F4D03F]"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
              className="group w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {/* Using Music icon as a tasteful stand-in for TikTok */}
              <Music
                className="w-5 h-5 text-white group-hover:text-[#F4D03F]"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>

        {/* Bottom bar: slim white line below the icons */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-sm text-gray-400 tracking-tight text-center md:text-left"
            style={{ letterSpacing: "-0.2px" }}
          >
            © {new Date().getFullYear()} SBBC Worldwide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
