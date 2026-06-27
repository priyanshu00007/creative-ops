import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BarChart3, Users, Globe, Award } from 'lucide-react';
import { useCursor } from '~/contexts/CursorContext';
import { MagneticElement } from '~/components/MagneticElement';
import { ease } from '~/components/AnimatedText';

const works = [
  {
    title: 'AURA LUXURY',
    category: 'E-Commerce',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    description: 'A high-end e-commerce platform blending editorial photography with seamless commerce for a luxury beauty maison. The result was a 340% increase in online conversions.',
  },
  {
    title: 'NEXUS TOWER',
    category: 'Architecture',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'A complete brand transformation for a global architecture firm, redefining their visual language across 12 markets and five continents.',
  },
  {
    title: 'OAK & IRON',
    category: 'Hospitality',
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80',
    description: 'An immersive digital identity for a luxury hotel group spanning boutique properties across Europe, unifying their online presence with editorial elegance.',
  },
  {
    title: 'VELVET STUDIO',
    category: 'Fashion',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    description: 'Brand strategy and visual identity for an emerging fashion house whose debut collection was featured in Vogue, Harper\'s Bazaar, and Elle.',
  },
  {
    title: 'CITADEL',
    category: 'Technology',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    description: 'A cybersecurity platform\'s complete rebrand — transforming complex enterprise technology into an approachable, trustworthy market leader.',
  },
  {
    title: 'NOIR FRAGRANCE',
    category: 'Luxury',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Art direction and campaign design for a luxury fragrance launch, including packaging, digital presence, and a flagship pop-up experience in SoHo.',
  },
];

const stats = [
  { icon: BarChart3, value: '200+', label: 'Brands Launched' },
  { icon: Users, value: '40+', label: 'Creative Minds' },
  { icon: Globe, value: '12', label: 'Global Markets' },
  { icon: Award, value: '28', label: 'Industry Awards' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep immersion into your brand, market, and audience to uncover strategic opportunities.' },
  { step: '02', title: 'Strategy', desc: 'Crafting a rigorous roadmap that aligns brand vision with measurable business outcomes.' },
  { step: '03', title: 'Creation', desc: 'World-class design execution across identity, digital, and campaign touchpoints.' },
  { step: '04', title: 'Launch', desc: 'Orchestrated rollout with precision, ensuring every detail lands with impact.' },
];

export function WorkPage() {
  const { setCursorVariant, setCursorText } = useCursor();
  const navigate = useNavigate();
  const statsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: statsProgress } = useScroll({ target: statsRef, offset: ['start end', 'end start'] });
  const statsY = useTransform(statsProgress, [0, 1], [80, -80]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 bg-[#F8F8F6] min-h-screen text-black">
        <div className="max-w-[1600px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-editorial text-[10vw] uppercase leading-none mb-6"
          >
            Index of Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease }}
            className="font-sans text-lg text-gray-500 max-w-xl mb-24 border-b border-black/20 pb-12"
          >
            A curated selection of brand transformations, digital platforms, and creative campaigns we have delivered for category-defining leaders.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {works.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease }}
                className={`group w-full ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
                onMouseEnter={() => { setCursorVariant('project'); setCursorText('VIEW CASE'); setHoveredIdx(idx); }}
                onMouseLeave={() => { setCursorVariant('default'); setCursorText(''); setHoveredIdx(null); }}
              >
                <div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-gray-200 relative">
                  <motion.img
                    src={work.img}
                    alt={work.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease }}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  <AnimatePresence>
                    {hoveredIdx === idx && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                      >
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.5, ease, delay: 0.1 }}
                          className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
                        >
                          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3 block">
                            {work.category}
                          </span>
                          <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed max-w-md mb-6">
                            {work.description}
                          </p>
                          <span className="inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase font-bold border-b border-white/30 pb-1 group/link">
                            View Project
                            <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                          </span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex justify-between items-end border-t border-black/20 pt-4">
                  <div className="overflow-hidden">
                    <motion.h4
                      animate={{ x: hoveredIdx === idx ? 8 : 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="font-editorial text-4xl uppercase"
                    >
                      {work.title}
                    </motion.h4>
                    <motion.p
                      animate={{ opacity: hoveredIdx === idx ? 0 : 1, y: hoveredIdx === idx ? -8 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-sans text-sm text-gray-500 mt-1"
                    >
                      {work.category}
                    </motion.p>
                  </div>
                  <motion.span
                    animate={{ x: hoveredIdx === idx ? -4 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-sans text-xs tracking-widest uppercase text-gray-400"
                  >
                    {hoveredIdx === idx ? 'Explore →' : '2026'}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-32 md:py-48 px-6 md:px-12 bg-[#000000] text-[#F8F8F6] overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-16"
          >
            By the Numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-editorial text-5xl md:text-7xl leading-tight mb-24 max-w-3xl"
          >
            We measure our success by <span className="text-[#5B1D1D]">the impact</span> we create for our partners.
          </motion.h2>
          <motion.div style={{ y: statsY }} className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <stat.icon size={24} className="text-[#5B1D1D] mb-6" />
                <span className="block font-editorial text-6xl md:text-7xl text-white mb-2">{stat.value}</span>
                <span className="font-sans text-sm text-gray-500 tracking-widest uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#F8F8F6] text-black">
        <div className="max-w-[1600px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-16"
          >
            Our Process
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease }}
                viewport={{ once: true }}
                className="border-t border-black/20 pt-8"
              >
                <span className="font-sans text-sm text-[#5B1D1D] tracking-widest">{step.step}</span>
                <h3 className="font-editorial text-3xl md:text-4xl uppercase mt-4 mb-6">{step.title}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Strip */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#000000] text-[#F8F8F6] overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-16 text-center"
          >
            Trusted by Industry Leaders
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40"
          >
            {['STRIPE', 'SONY', 'NIKE', 'AIRBNB', 'SPOTIFY', 'FIGMA'].map((name) => (
              <span
                key={name}
                className="font-sans text-lg md:text-2xl font-bold tracking-widest text-white/60"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#F8F8F6] text-black">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className="font-editorial text-6xl md:text-9xl uppercase leading-[0.85] mb-12"
          >
            Let&apos;s Create <br />
            <span className="text-[#5B1D1D]">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-lg text-gray-500 max-w-lg mx-auto mb-12"
          >
            Ready to transform your brand? Let&apos;s discuss how we can build something iconic together.
          </motion.p>
          <MagneticElement className="inline-block">
            <button
              onClick={() => navigate('/contact')}
              className="bg-black text-white px-12 py-6 rounded-full font-sans text-sm uppercase tracking-widest font-bold hover:bg-[#5B1D1D] transition-colors"
            >
              Start a Project
            </button>
          </MagneticElement>
        </div>
      </section>
    </>
  );
}
