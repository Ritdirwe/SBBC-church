export function VisionStatement() {
  return (
    <section data-animate className="py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <div className="w-[76px] h-[76px] rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
            <img
              src="https://raw.createusercontent.com/160d9076-4e45-4665-8dc3-a03b2c64cb23/"
              alt="SBBC Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            To spread the gospel of Jesus Christ to every corner of the world,
            transforming lives through faith, compassion, and service. We are
            committed to building a global community of believers who live out
            God's love in practical ways, bringing hope to the hopeless and
            light to those in darkness.
          </p>
        </div>
      </div>
    </section>
  );
}
