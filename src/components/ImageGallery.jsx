import { useState, useEffect } from "react";

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
    "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80",
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
    "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=80",
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
    "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&q=80",
    "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80",
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-96">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
