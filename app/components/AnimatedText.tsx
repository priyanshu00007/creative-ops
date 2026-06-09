import { motion } from 'framer-motion';

export const ease = [0.76, 0, 0.24, 1] as const;

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ text, className = '', once = true }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap">
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: idx * 0.05 }}
            viewport={{ once, margin: '-50px' }}
            className="inline-block overflow-hidden mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
