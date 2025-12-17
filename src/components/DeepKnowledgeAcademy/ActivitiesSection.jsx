const activities = [
  {
    title: "Clubs & Societies",
    desc: "STEM, Arts, Music, Debate, Entrepreneurship",
  },
  {
    title: "Sports",
    desc: "Football, Athletics, Basketball, Table Tennis",
  },
  {
    title: "Service & Chapel",
    desc: "Chapel, Outreach, Mentoring & House System",
  },
];

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6" data-animate>
        {activities.map((a) => (
          <div
            key={a.title}
            className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-7 border border-[#E9E9E9] dark:border-[#333]"
          >
            <h3 className="text-xl font-bold text-black dark:text-white">
              {a.title}
            </h3>
            <p className="mt-2 text-[#2B2B2B] dark:text-[#E0E0E0]">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
