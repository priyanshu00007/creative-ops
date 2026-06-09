import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCursor } from '~/contexts/CursorContext';
import { useRouter } from '~/contexts/RouterContext';
import { MagneticElement } from '~/components/MagneticElement';
import { ease } from '~/components/AnimatedText';

const navLinks = [
  { name: 'Home', id: 'home', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Work', id: 'work', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Agency', id: 'agency', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Services', id: 'services', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Pricing', id: 'pricing', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Contact', id: 'contact', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { setCursorVariant } = useCursor();
  const { navigate, currentPage } = useRouter();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow || '';
    }
    return () => { document.body.style.overflow = originalOverflow || ''; };
  }, [isOpen]);

  const handleNav = (id: string) => {
    navigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <MagneticElement>
          <div
            className="font-sans text-sm font-bold tracking-widest uppercase cursor-pointer relative z-50"
            onClick={() => navigate('home')}
            onMouseEnter={() => setCursorVariant('hidden')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            STUDIO Design®
          </div>
        </MagneticElement>

        <MagneticElement>
          <button
            className="font-sans text-xs tracking-widest uppercase flex items-center gap-2 relative z-50"
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setCursorVariant('hidden')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <Menu size={16} />
          </button>
        </MagneticElement>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease }}
            className="fixed inset-0 z-[100] bg-[#000000] text-[#F8F8F6] flex flex-col justify-between p-6 md:p-12 overflow-y-auto touch-pan-y"
          >
            <AnimatePresence>
              {hoveredLink && (
                <motion.img
                  key={hoveredLink}
                  src={navLinks.find(l => l.id === hoveredLink)?.img}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease }}
                  className="absolute inset-0 w-full h-full object-cover z-0 filter grayscale"
                  alt="menu background"
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 flex justify-between items-center">
              <div className="font-sans text-sm font-bold tracking-widest uppercase">STUDIO DESIGN®</div>
              <button onClick={() => setIsOpen(false)} className="flex items-center gap-2 uppercase text-xs tracking-widest group">
                Close <X size={16} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="relative z-10 flex flex-col gap-2 md:gap-4 mt-20 pb-20">
              {navLinks.map((item, i) => (
                <div key={item.id} className="overflow-hidden">
                  <motion.button
                    onClick={() => handleNav(item.id)}
                    onMouseEnter={() => setHoveredLink(item.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, ease }}
                    className={`font-editorial text-5xl md:text-[7vw] leading-[1] transition-colors inline-block text-left
                      ${currentPage === item.id ? 'text-[#5B1D1D] italic' : 'hover:text-[#5B1D1D] hover:italic'}
                    `}
                  >
                    {item.name}
                  </motion.button>
                </div>
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mt-auto pb-8 font-sans text-xs tracking-widest uppercase border-t border-white/20 pt-8 gap-8 md:gap-0">
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
              </div>
              <div className="md:text-right">
                <p>New York — London</p>
                <p className="mt-2 text-gray-500">©2026 All Rights Reserved</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
