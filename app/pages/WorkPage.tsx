import { motion } from 'framer-motion';
import { useCursor } from '~/contexts/CursorContext';
import { ease } from '~/components/AnimatedText';

const works = [
  { title: 'AURA LUXURY', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80' },
  { title: 'NEXUS TOWER', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' },
  { title: 'OAK & IRON', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80' },
  { title: 'VELVET STUDIO', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80' },
];

export function WorkPage() {
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-48 pb-32 px-6 md:px-12 bg-[#F8F8F6] min-h-screen text-black"
    >
      <div className="max-w-[1600px] mx-auto">
        <h1 className="font-editorial text-[10vw] uppercase leading-none mb-24 border-b border-black/20 pb-12">Index of Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease }}
              className={`group w-full ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
              onMouseEnter={() => { setCursorVariant('project'); setCursorText('VIEW CASE'); }}
              onMouseLeave={() => { setCursorVariant('default'); setCursorText(''); }}
            >
              <div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-gray-200">
                <motion.img
                  src={work.img}
                  alt={work.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-end border-t border-black/20 pt-4">
                <h4 className="font-editorial text-4xl uppercase">{work.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
