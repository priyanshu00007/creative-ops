import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCursor } from '~/contexts/CursorContext';
import { useRouter } from '~/contexts/RouterContext';
import { ease } from '~/components/AnimatedText';

const services = ['Brand Strategy', 'Visual Identity', 'Digital Experience', 'Content & Campaigns'];

export function ServicesSnippet() {
  const { navigate } = useRouter();
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <section className="py-32 px-6 md:px-12 bg-[#000000] text-[#F8F8F6]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-white/20 pb-8">
          <h2 className="font-editorial text-6xl md:text-8xl uppercase tracking-tighter">Capabilities</h2>
          <button
            onClick={() => navigate('services')}
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
              onClick={() => navigate('services')}
              onMouseEnter={() => { setCursorVariant('project'); setCursorText('EXPLORE'); }}
              onMouseLeave={() => { setCursorVariant('default'); setCursorText(''); }}
            >
              <div className="flex items-center gap-8 md:gap-16 relative z-10">
                <span className="font-sans text-sm md:text-base text-gray-500">0{idx + 1}</span>
                <motion.h3
                  variants={{ initial: { x: 0 }, hover: { x: 20, color: '#5B1D1D' } }}
                  transition={{ duration: 0.5, ease }}
                  className="font-editorial text-4xl md:text-6xl uppercase"
                >
                  {service}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
