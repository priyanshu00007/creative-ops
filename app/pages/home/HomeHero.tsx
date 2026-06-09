import { motion } from 'framer-motion';
import { AnimatedText } from '~/components/AnimatedText';

export function HomeHero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex flex-col justify-center px-6 md:px-12 bg-[#000000] text-[#F8F8F6] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Architecture"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </motion.div>
      <div className="relative z-10 flex flex-col w-full max-w-[1600px] mx-auto mt-20">
        <div className="overflow-hidden mb-8 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400"
          >
            Digital Flagship Experience
          </motion.p>
        </div>
        <h1 className="font-editorial text-[14vw] md:text-[11vw] leading-[0.85] tracking-tight uppercase flex flex-col gap-2">
          <AnimatedText text="WE CREATE" />
          <AnimatedText text="ICONIC" />
          <div className="flex items-center gap-4 md:gap-12">
            <AnimatedText text="BRANDS" className="text-[#5B1D1D]" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 1.5, ease: [0.76, 0, 0.24, 1] as const }}
              className="h-[2px] bg-[#F8F8F6] flex-1 origin-left hidden md:block"
            />
          </div>
        </h1>
      </div>
    </section>
  );
}
