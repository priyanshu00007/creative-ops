import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useCursor } from '~/contexts/CursorContext';
import { ease } from '~/components/AnimatedText';

export function VideoFeature() {
  const { setCursorVariant } = useCursor();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {expanded ? (
        <motion.div
          key="expanded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="fixed inset-0 z-[90] bg-black flex items-center justify-center cursor-none "
          onMouseEnter={() => setCursorVariant('hidden')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease }}
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=2000&q=80"
            alt="Abstract"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-white/60 mb-4"
            >
              Featured Film
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease }}
              className="font-editorial text-6xl md:text-9xl uppercase text-white"
            >
              NEXUS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease }}
              className="font-sans text-sm tracking-widest uppercase text-white/50 mt-6"
            >
              A Cinematic Brand Experience
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease }}
              onClick={handleToggle}
              className="mt-12 mx-auto bg-white/10 backdrop-blur-md rounded-full p-6 border border-white/20 text-white hover:bg-white/20 transition-colors group cursor-pointer"
              onMouseEnter={() => setCursorVariant('video')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Play size={32} className="ml-1 group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>

          <button
            onClick={handleToggle}
            className="absolute top-8 right-8 z-20 text-white/60 hover:text-white transition-colors cursor-pointer"
            onMouseEnter={() => setCursorVariant('hidden')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <X size={24} />
          </button>
        </motion.div>
      ) : (
        <motion.section
          key="collapsed"
          className="relative h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center cursor-none group"
          onMouseEnter={() => setCursorVariant('video')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1.5, ease }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=2000&q=80"
              alt="Abstract"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-[1]" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-white/50"
            >
              Watch Showreel
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md rounded-full p-8 border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer"
              onClick={handleToggle}
            >
              <Play size={40} className="ml-2" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/40"
            >
              Click to expand
            </motion.p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
