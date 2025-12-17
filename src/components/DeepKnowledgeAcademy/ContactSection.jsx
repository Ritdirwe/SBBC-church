import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6" data-animate>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
          <div className="flex items-center gap-2 text-black dark:text-white font-semibold">
            <Phone className="w-4 h-4" /> Phone
          </div>
          <p className="mt-1 text-[#2B2B2B] dark:text-[#E0E0E0]">
            +234 706 420 0926
          </p>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
          <div className="flex items-center gap-2 text-black dark:text-white font-semibold">
            <Mail className="w-4 h-4" /> Email
          </div>
          <p className="mt-1 text-[#2B2B2B] dark:text-[#E0E0E0]">
            admissions@deepknowledgeacademy.edu
          </p>
        </div>
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]">
          <div className="flex items-center gap-2 text-black dark:text-white font-semibold">
            <MapPin className="w-4 h-4" /> Address
          </div>
          <p className="mt-1 text-[#2B2B2B] dark:text-[#E0E0E0]">
            Our campus, City, Country
          </p>
        </div>
      </div>
    </section>
  );
}
