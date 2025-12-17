import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Users, GraduationCap, Mail } from "lucide-react";

export default function LawsonFacultyDirectoryPage() {
  const faculty = [
    {
      name: "Dr. Ada Lawson",
      title: "Professor of Computer Science",
      dept: "Science & Technology",
      email: "ada.lawson@lawson.edu",
      photo:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&q=60",
    },
    {
      name: "Prof. Daniel Okoye",
      title: "Professor of Public Health",
      dept: "Health Sciences",
      email: "daniel.okoye@lawson.edu",
      photo:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop&q=60",
    },
    {
      name: "Dr. Sophia Mensah",
      title: "Associate Professor of Finance",
      dept: "Business & Economics",
      email: "sophia.mensah@lawson.edu",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=60",
    },
    {
      name: "Rev. Dr. Ben Adebayo",
      title: "Professor of Theology",
      dept: "Theology & Leadership",
      email: "ben.adebayo@lawson.edu",
      photo:
        "https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=400&h=400&fit=crop&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-72">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&h=480&fit=crop&q=80"
          alt="Faculty at Lawson University"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <Users className="w-16 h-16 text-[#F4D03F] mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Faculty Directory
            </h1>
            <p className="mt-2 text-white/90 max-w-2xl mx-auto">
              Meet the scholars and mentors guiding our students.
            </p>
          </div>
        </div>
      </div>

      {/* Directory */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f) => (
              <div
                key={f.email}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
              >
                <img
                  src={f.photo}
                  alt={`${f.name} portrait`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {f.name}
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">{f.title}</p>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0] text-sm">
                  {f.dept}
                </p>
                <a
                  href={`mailto:${f.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-[#0B132B] dark:text-white font-medium"
                >
                  <Mail className="w-4 h-4" /> {f.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/education/lawson-university/masters"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              Explore Graduate Programs <GraduationCap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
