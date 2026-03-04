import { useState, useEffect, useRef } from 'react';

export default function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const containerRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  function prev() {
    setIndex((i) => (i - 1 + length) % length);
  }

  function next() {
    setIndex((i) => (i + 1) % length);
  }

  if (length === 0) return null;

  return (
    <div className="relative" ref={containerRef}>
      <div className="w-full h-56 bg-surface-dark rounded overflow-hidden flex items-center justify-center">
        <img
          src={images[index]}
          alt={`screenshot ${index + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-theme-overlay text-white p-2 rounded-full"
          >
            ‹
          </button>

          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-theme-overlay text-white p-2 rounded-full"
          >
            ›
          </button>

          <div className="flex gap-2 justify-center mt-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
