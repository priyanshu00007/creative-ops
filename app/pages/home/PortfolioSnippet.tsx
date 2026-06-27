import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useCursor } from '~/contexts/CursorContext';
import { ProjectCard } from '~/components/ProjectCard';

const projects = [
  {
    title: 'AURA LUXURY',
    category: 'E-Commerce',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[3/4]',
    speed: 0.1,
    description: 'A high-end e-commerce platform blending editorial photography with seamless commerce for a luxury beauty maison.',
  },
  {
    title: 'NEXUS',
    category: 'Identity',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-square',
    speed: -0.1,
    description: 'A complete brand transformation for a global architecture firm, redefining their visual language across 12 markets.',
  },
];

export function PortfolioSnippet() {
  const navigate = useNavigate();
  const { setCursorVariant, setCursorText } = useCursor();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-[#F8F8F6] text-[#000000]">
      <div className="max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className="font-editorial text-5xl md:text-8xl uppercase tracking-tighter mb-24 md:mb-48 text-center"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="flex flex-col mt-0 md:mt-32">
            <ProjectCard
              project={projects[0]}
              scrollYProgress={scrollYProgress}
              setCursorVariant={setCursorVariant}
              setCursorText={setCursorText}
            />
          </div>
          <div className="flex flex-col gap-16 md:gap-48">
            <ProjectCard
              project={projects[1]}
              scrollYProgress={scrollYProgress}
              setCursorVariant={setCursorVariant}
              setCursorText={setCursorText}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-start p-12 bg-[#E0DDD8]"
            >
              <h3 className="font-editorial text-4xl leading-tight mb-8">
                We have successfully launched over 200+ brands globally.
              </h3>
              <button
                onClick={() => navigate('/work')}
                className="flex items-center gap-4 border-b border-black pb-2 group font-sans text-sm tracking-widest uppercase font-bold"
              >
                All Projects <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
