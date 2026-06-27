import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText, ease } from '~/components/AnimatedText';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Digital Flagship Experience',
    lines: ['WE CREATE', 'ICONIC', 'BRANDS'],
  },
  {
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Brand Strategy & Identity',
    lines: ['WE DESIGN', 'CULTURAL', 'MOVEMENTS'],
  },
  {
    img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Premium Digital Experiences',
    lines: ['WE ENGINEER', 'MOMENTS', 'THAT MATTER'],
  },
  {
    img: 'https://images.unsplash.com/photo-1616048056617-93b94a530208?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Global Creative Agency',
    lines: ['WE BUILD', 'LEGACIES', 'FOR TOMORROW'],
  },
];

export function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen min-h-[800px] w-full flex flex-col justify-center px-6 md:px-12 bg-[#000000] text-[#F8F8F6] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.5, ease }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col w-full max-w-[1600px] mx-auto mt-20">
        <div className="overflow-hidden mb-8 md:mb-16 h-6 md:h-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.tagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease }}
              className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400"
            >
              {slide.tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        <h1 className="font-editorial text-[14vw] md:text-[11vw] leading-[0.85] tracking-tight uppercase flex flex-col gap-2">
          <AnimatedText text={slide.lines[0]} key={`l0-${current}`} />
          <AnimatedText text={slide.lines[1]} key={`l1-${current}`} />
          <div className="flex items-center gap-4 md:gap-12">
            <span className="text-[#5B1D1D]">
              <AnimatedText text={slide.lines[2]} key={`l2-${current}`} />
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 1.5, ease }}
              className="h-[2px] bg-[#F8F8F6] flex-1 origin-left hidden md:block"
            />
          </div>
        </h1>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group flex items-center gap-2"
          >
            <span className="font-sans text-[10px] tracking-widest text-gray-500 group-hover:text-white transition-colors">
              0{i + 1}
            </span>
            <div className="w-12 md:w-16 h-[1px] bg-white/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                initial={{ width: i === current ? '0%' : '0%' }}
                animate={{
                  width: i === current ? '100%' : '0%',
                }}
                transition={
                  i === current
                    ? { duration: 4, ease: 'linear' }
                    : { duration: 0.3 }
                }
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
