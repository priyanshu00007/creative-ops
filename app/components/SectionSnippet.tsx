import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SectionSnippetProps {
  number: string;
  title: string;
  heading: ReactNode;
  description: string;
  ctaText: string;
  ctaTarget: string;
  isDark?: boolean;
}

export function SectionSnippet({
  number,
  title,
  heading,
  description,
  ctaText,
  ctaTarget,
  isDark = false,
}: SectionSnippetProps) {
  const navigate = useNavigate();
  const bg = isDark ? 'bg-[#000000] text-[#F8F8F6]' : 'bg-[#F8F8F6] text-[#000000]';
  const borderColor = isDark ? 'border-white/20' : 'border-black/20';
  const textMuted = isDark ? 'text-gray-400' : 'text-[#6D6D6D]';

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      viewport={{ once: true, margin: '-100px' }}
      className={`py-32 md:py-48 px-6 md:px-12 ${bg} relative`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3">
          <p className={`font-sans text-xs tracking-widest uppercase border-t ${borderColor} pt-4`}>
            {number} — {title}
          </p>
        </div>
        <div className="md:w-2/3">
          <h2 className="font-editorial text-4xl md:text-7xl leading-tight mb-12">{heading}</h2>
          <p className={`font-sans text-lg md:text-xl ${textMuted} max-w-2xl leading-relaxed`}>{description}</p>
          <button
            onClick={() => navigate(ctaTarget)}
            className={`mt-12 flex items-center gap-4 border-b ${borderColor} pb-2 group font-sans text-sm tracking-widest uppercase font-bold`}
          >
            {ctaText}{' '}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
