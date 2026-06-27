import { useState } from 'react';
import { motion, useTransform, AnimatePresence, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ease } from '~/components/AnimatedText';

interface Project {
  title: string;
  category: string;
  img: string;
  aspect: string;
  speed: number;
  description?: string;
}

interface ProjectCardProps {
  project: Project;
  scrollYProgress: MotionValue<number>;
  setCursorVariant: (variant: string) => void;
  setCursorText: (text: string) => void;
}

export function ProjectCard({ project, scrollYProgress, setCursorVariant, setCursorText }: ProjectCardProps) {
  const y = useTransform(scrollYProgress, [0, 1], [-50 * project.speed, 50 * project.speed]);
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <motion.div
      style={{ y }}
      className="group w-full"
      onMouseEnter={() => { setCursorVariant('project'); setCursorText('VIEW CASE'); }}
      onMouseLeave={() => { setCursorVariant('default'); setCursorText(''); setImgHovered(false); }}
    >
      <div
        className={`w-full overflow-hidden mb-6 ${project.aspect} bg-gray-200 relative`}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <motion.img
          src={project.img}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />

        <AnimatePresence>
          {imgHovered && project.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8"
            >
              <div className="flex items-end justify-between w-full">
                <p className="font-sans text-sm text-white/80 max-w-xs leading-relaxed">
                  {project.description}
                </p>
                <span className="text-white flex items-center gap-2 text-xs tracking-widest uppercase font-bold">
                  View <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-start border-t border-black/20 pt-4">
        <div>
          <h4 className="font-editorial text-3xl uppercase">{project.title}</h4>
          <p className="font-sans text-sm text-gray-500 mt-2">{project.category}</p>
        </div>
        <span className="font-sans text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          2026
        </span>
      </div>
    </motion.div>
  );
}
