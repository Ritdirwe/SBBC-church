import { useState } from "react";
import { Code, Clock, Calendar, CheckCircle } from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShareFormLink from "@/components/ShareFormLink";

export default function TechHubPage() {
  const [formData, setFormData] = useState({
    school_name: "Tech Hub",
    full_name: "",
    email: "",
    phone: "",
    qualifications: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      setMessage(data.message);
      setFormData({
        ...formData,
        full_name: "",
        email: "",
        phone: "",
        qualifications: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop&q=80"
          alt="Tech Hub"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center">
            <Code className="w-20 h-20 text-[#4FD1C5] mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Tech Hub
            </h1>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="py-20 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
            Building Tomorrow's Tech Leaders
          </h2>
          <p className="text-lg text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed mb-8">
            Our Tech Hub prepares students for success in the digital economy.
            Learn web development, software engineering, data science, and more
            through hands-on projects and industry-standard tools. We combine
            technical excellence with ethical practices to develop innovators
            who use technology for good.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Program Duration
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                  6-month to 2-year programs available
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Academic Sessions
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Rolling admissions - start anytime
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              What You'll Learn
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development (HTML, CSS, JavaScript, React)",
                "Mobile App Development (React Native, Flutter)",
                "Backend Development (Node.js, Python, databases)",
                "Data Science and Machine Learning",
                "Cloud Computing and DevOps",
                "UI/UX Design and Product Development",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <CheckCircle className="w-5 h-5 text-[#4FD1C5] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="apply" className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-xl p-12 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-6">
              Apply for Admission
            </h2>
            <p className="text-lg text-[#6E6E6E] dark:text-[#A0A0A0] text-center mb-8">
              Launch your tech career and learn skills for the digital age.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Educational Background & Tech Experience (if any)"
                  value={formData.qualifications}
                  onChange={(e) =>
                    setFormData({ ...formData, qualifications: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] hover:from-[#5FD9CD] hover:to-[#48C2B4] text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-[0.98] disabled:opacity-50 shadow-md hover:shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
              {message && (
                <p className="text-center text-sm text-[#4FD1C5]">{message}</p>
              )}
            </form>

            <ShareFormLink
              label="Share this application form"
              anchor="#apply"
            />
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
