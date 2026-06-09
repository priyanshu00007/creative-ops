import { motion } from 'framer-motion';

export function AgencyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 bg-[#000000] min-h-screen text-[#F8F8F6]"
    >
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
        <h1 className="font-editorial text-[12vw] leading-[0.8] uppercase mb-24 text-[#5B1D1D]">The Agency</h1>

        <div className="w-full aspect-video overflow-hidden mb-32">
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=2000&q=80"
            alt="Agency"
            className="w-full h-full object-cover grayscale opacity-70"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 max-w-[1200px] mx-auto">
          <div className="md:w-1/3">
            <p className="font-sans text-xs tracking-widest uppercase border-t border-white/20 pt-4">Our Manifesto</p>
          </div>
          <div className="md:w-2/3">
            <h2 className="font-editorial text-4xl md:text-6xl leading-tight mb-12">
              We believe that design is not just visual. It is behavioral.
            </h2>
            <p className="font-sans text-lg text-gray-400 mb-8 leading-relaxed">
              Founded in 2018, STUDIO&reg; was built on the premise that brands need more than just aesthetic updates
              to survive in modern culture. They need rigorous strategy, flawless execution, and a deep understanding of
              human psychology.
            </p>
            <p className="font-sans text-lg text-gray-400 leading-relaxed">
              Our team consists of 40+ strategic thinkers, visual artists, and technologists operating globally from
              New York and London.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
