const facilities = [
  {
    title: "Modern Classrooms",
    img: "https://images.unsplash.com/photo-1558021211-6d1403321394?w=800&q=80",
  },
  {
    title: "Science Labs",
    img: "https://images.unsplash.com/photo-1581093588401-16ec8a57ea3a?w=800&q=80",
  },
  {
    title: "ICT Suite",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "Playfields & Courts",
    img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=80",
  },
];

export function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="py-16 px-6 bg-[#FAFAFA] dark:bg-[#161616]"
    >
      <div className="max-w-6xl mx-auto" data-animate>
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-10">
          Facilities
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl overflow-hidden border border-[#E9E9E9] dark:border-[#333] bg-white dark:bg-[#1E1E1E]"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 text-center text-[#2B2B2B] dark:text-[#E0E0E0] font-medium">
                {f.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
