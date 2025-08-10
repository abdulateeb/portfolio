

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
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
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
      `}</style>
      
      <div className="w-full h-52 md:h-60 lg:h-64 xl:h-68 relative overflow-hidden flex items-center justify-center">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center py-6">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-6 w-max px-4">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 h-40 md:h-44 lg:h-48 xl:h-52 rounded-xl overflow-hidden shadow-2xl border border-white/10"
                  style={{ aspectRatio: 'auto' }}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover brightness-[0.8]"
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
