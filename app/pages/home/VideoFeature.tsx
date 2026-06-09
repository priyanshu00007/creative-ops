import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useCursor } from '~/contexts/CursorContext';
import { ease } from '~/components/AnimatedText';

export function VideoFeature() {
  const { setCursorVariant } = useCursor();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center cursor-none">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=2000&q=80"
          alt="Abstract"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>
      <div
        className="relative z-10 w-full h-full flex items-center justify-center"
        onMouseEnter={() => setCursorVariant('video')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-md rounded-full p-8 border border-white/20 text-white group hover:bg-white/20 transition-colors cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <div className="w-10 h-10" />
          ) : (
            <Play size={40} className="ml-2 group-hover:scale-110 transition-transform" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
