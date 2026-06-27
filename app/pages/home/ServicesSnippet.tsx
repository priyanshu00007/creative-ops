import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCursor } from '~/contexts/CursorContext';
import { ease } from '~/components/AnimatedText';

const services = [
  {
    label: 'Brand Strategy',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Visual Identity',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Digital Experience',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Content & Campaigns',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
];

export function ServicesSnippet() {
  const navigate = useNavigate();
  const { setCursorVariant, setCursorText } = useCursor();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#000000] text-[#F8F8F6] relative overflow-hidden">
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            key={hoveredIdx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img
              src={services[hoveredIdx].img}
              alt=""
              className="w-full h-full object-cover filter grayscale"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex justify-between items-end mb-24 border-b border-white/20 pb-8">
          <h2 className="font-editorial text-6xl md:text-8xl uppercase tracking-tighter">Capabilities</h2>
          <button
            onClick={() => navigate('/services')}
            className="font-sans text-xs tracking-widest uppercase hidden md:flex items-center gap-2 hover:text-[#5B1D1D] transition-colors"
          >
            View All Services <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/20">
          {services.slice(0, 3).map((service, idx) => (
            <motion.div
              key={idx}
              initial="initial"
              whileHover="hover"
              className="group py-12 relative cursor-pointer"
              onClick={() => navigate('/services')}
              onMouseEnter={() => {
                setHoveredIdx(idx);
                setCursorVariant('project');
                setCursorText('EXPLORE');
              }}
              onMouseLeave={() => {
                setHoveredIdx(null);
                setCursorVariant('default');
                setCursorText('');
              }}
            >
              <div className="flex items-center gap-8 md:gap-16 relative z-10">
                <span className="font-sans text-sm md:text-base text-gray-500">0{idx + 1}</span>
                <motion.h3
                  variants={{ initial: { x: 0 }, hover: { x: 20, color: '#5B1D1D' } }}
                  transition={{ duration: 0.5, ease }}
                  className="font-editorial text-4xl md:text-6xl uppercase"
                >
                  {service.label}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
