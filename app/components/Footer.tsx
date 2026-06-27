import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { MagneticElement } from '~/components/MagneticElement';
import { ease } from '~/components/AnimatedText';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#000000] text-[#F8F8F6] pt-32 md:pt-48 pb-12 px-6 md:px-12 relative z-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            viewport={{ once: true }}
            className="font-editorial text-[12vw] md:text-[9vw] leading-[0.8] uppercase mb-12 flex flex-col"
          >
            <span>Let&apos;s Build</span>
            <span className="text-[#6D6D6D]">Something</span>
            <span className="text-[#5B1D1D]">Iconic.</span>
          </motion.h2>

          <MagneticElement>
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#F8F8F6] text-black px-12 py-6 rounded-full font-sans text-sm uppercase tracking-widest font-bold hover:bg-[#5B1D1D] hover:text-white transition-colors"
            >
              Start a Project
            </button>
          </MagneticElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-sm border-t border-white/20 pt-12 text-[#6D6D6D]">
          <div>
            <h4 className="text-white uppercase tracking-widest mb-6 text-xs">Studio</h4>
            <p className="mb-2">124 Premium Ave,</p>
            <p>New York, NY 10012</p>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest mb-6 text-xs">Inquiries</h4>
            <p className="mb-2 hover:text-white transition-colors cursor-pointer">hello@studio-agency.com</p>
            <p className="hover:text-white transition-colors cursor-pointer">+1 (555) 019-2834</p>
          </div>
          <div>
            <h4 className="text-white uppercase tracking-widest mb-6 text-xs">Socials</h4>
            <div className="flex flex-col gap-2">
              {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map(social => (
                <a key={social} href="#" className="hover:text-white transition-colors cursor-pointer">{social}</a>
              ))}
            </div>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p>&copy; {new Date().getFullYear()} Studio Agency.</p>
            <p className="mt-2 text-xs uppercase tracking-widest">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
