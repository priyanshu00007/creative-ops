import { useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { useCursor } from '~/contexts/CursorContext';

export function CustomCursor() {
  const { cursorVariant, cursorText } = useCursor();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', manageMouseMove);
    return () => window.removeEventListener('mousemove', manageMouseMove);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: '#FFFFFF',
      mixBlendMode: 'difference',
      x: '-50%',
      y: '-50%',
      opacity: 1,
    },
    project: {
      width: 100,
      height: 100,
      backgroundColor: '#F8F8F6',
      mixBlendMode: 'normal',
      x: '-50%',
      y: '-50%',
      opacity: 1,
    },
    video: {
      width: 80,
      height: 80,
      backgroundColor: '#5B1D1D',
      mixBlendMode: 'normal',
      x: '-50%',
      y: '-50%',
      opacity: 1,
    },
    hidden: { opacity: 0, width: 0, height: 0 },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center font-sans text-xs tracking-widest font-bold uppercase overflow-hidden"
      variants={variants}
      animate={cursorVariant}
      style={{ x: springX, y: springY }}
    >
      <AnimatePresence mode="wait">
        {cursorText && (
          <motion.span
            key={cursorText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute text-center whitespace-nowrap"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
