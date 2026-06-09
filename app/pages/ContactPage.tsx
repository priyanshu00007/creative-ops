import { motion } from 'framer-motion';
import { MagneticElement } from '~/components/MagneticElement';

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 bg-[#F8F8F6] min-h-screen text-black px-6 md:px-12 flex flex-col justify-center"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <h1 className="font-editorial text-[14vw] md:text-[10vw] leading-[0.8] uppercase mb-16">
          Say <span className="text-[#5B1D1D] italic">Hello.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <form className="flex flex-col gap-8">
            <div className="border-b border-black pb-4">
              <input type="text" placeholder="Your Name" className="w-full bg-transparent outline-none font-sans text-xl placeholder-black/50" />
            </div>
            <div className="border-b border-black pb-4">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none font-sans text-xl placeholder-black/50" />
            </div>
            <div className="border-b border-black pb-4">
              <textarea placeholder="Project Details" rows={4} className="w-full bg-transparent outline-none font-sans text-xl placeholder-black/50 resize-none" />
            </div>
            <MagneticElement className="w-max">
              <button type="button" className="bg-black text-white px-12 py-6 rounded-full font-sans text-sm uppercase tracking-widest font-bold hover:bg-[#5B1D1D] transition-colors mt-8">
                Submit Inquiry
              </button>
            </MagneticElement>
          </form>

          <div className="flex flex-col gap-12 font-sans text-lg">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Direct Email</p>
              <a href="mailto:hello@studio-agency.com" className="hover:text-[#5B1D1D] transition-colors font-editorial text-3xl">
                hello@studio-agency.com
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Headquarters</p>
              <p>
                124 Premium Ave,<br />
                New York, NY 10012
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
