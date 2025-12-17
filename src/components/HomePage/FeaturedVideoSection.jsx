export function FeaturedVideoSection() {
  // Define sizes so we avoid complex expressions inline
  const videoHeight = "78vh"; // 100 - (12 + 10) = 78
  const videoWidth = "138.67vh"; // 177.78 * 0.78 to maintain 16:9 cover
  const iframeTop = "calc(50% + 1vh)"; // slight offset to account for 12% top vs 10% bottom

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ height: videoHeight }}
    >
      <iframe
        src="https://www.youtube.com/embed/dyiZYGb_4iU?autoplay=1&mute=1&loop=1&playlist=dyiZYGb_4iU&controls=0&modestbranding=1&rel=0&playsinline=1"
        title="Church Featured Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: videoWidth, height: videoHeight, top: iframeTop }}
      ></iframe>
    </section>
  );
}
