import { motion } from 'framer-motion';

const services = [
  { title: 'Brand Strategy', desc: 'Positioning, Naming, Brand Architecture, Cultural Intelligence.' },
  { title: 'Visual Identity', desc: 'Logo Design, Typography Systems, Color Theory, Art Direction.' },
  { title: 'Digital Experience', desc: 'Web Platforms, E-Commerce, Application Design, Motion Systems.' },
  { title: 'Content & Campaigns', desc: 'Campaign Concepting, Copywriting, 3D Rendering, Production.' },
];

export function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 bg-[#F8F8F6] min-h-screen text-black px-6 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto">
        <h1 className="font-editorial text-[10vw] uppercase leading-none mb-24">Services</h1>
        <div className="grid grid-cols-1 divide-y divide-black/20 border-y border-black/20">
          {services.map((service, idx) => (
            <div key={idx} className="group py-16 md:py-24 relative flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-start gap-8 md:gap-16">
                <span className="font-sans text-sm md:text-base text-gray-500 mt-2">0{idx + 1}</span>
                <h3 className="font-editorial text-5xl md:text-8xl uppercase group-hover:text-[#5B1D1D] group-hover:italic transition-all duration-500">
                  {service.title}
                </h3>
              </div>
              <p className="font-sans text-lg max-w-sm mt-8 md:mt-0 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
