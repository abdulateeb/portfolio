

export const Component = () => {
  // Images from public folder - reduced to 6 images
  const images = [
    "/image1.jpg",
    "/image2.jpg", 
    "/image4.jpg",
    "/image5.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image6.jpg",
    "/image7.jpg"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .infinite-scroll {
          animation: scroll-right 28s linear infinite;
          will-change: transform;
          animation-play-state: running;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        /* Slow down on smaller screens for steadier motion */
        @media (hover: none) {
          .image-item:hover {
            transform: none;
            filter: none;
          }
        }

        /* Slow down on smaller screens for steadier motion */
        @media (max-width: 640px) {
          .infinite-scroll { animation-duration: 45s; }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .infinite-scroll { animation-duration: 38s; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .infinite-scroll { animation-duration: 32s; }
        }
        @media (min-width: 1025px) {
          .infinite-scroll { animation-duration: 28s; }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .infinite-scroll { animation-duration: 60s; }
        }
      `}</style>

      <div className="w-full h-64 md:h-72 lg:h-80 xl:h-96 relative overflow-hidden flex items-center justify-center -mt-2 md:-mt-4">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center py-4 md:py-6">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-6 w-max px-4">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 h-48 md:h-56 lg:h-64 xl:h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  style={{ aspectRatio: 'auto' }}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover brightness-[0.9]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
