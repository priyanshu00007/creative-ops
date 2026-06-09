import { motion } from 'framer-motion';

const plans = [
  {
    tier: 'The Audit',
    price: '$15K',
    desc: 'For brands needing strategic clarity and visual realignment.',
    list: ['Brand Positioning Audit', 'Visual Identity Review', 'Competitor Analysis', 'Strategic Roadmap'],
  },
  {
    tier: 'The Rebrand',
    price: '$45K+',
    desc: 'Full-scale brand transformation for market leaders.',
    list: ['Complete Identity System', 'Custom Typography', 'Brand Guidelines', 'Website Redesign (UI/UX)'],
  },
  {
    tier: 'The Retainer',
    price: '$10K/mo',
    desc: 'Ongoing creative partnership and production.',
    list: ['Priority Execution', 'Campaign Design', 'Motion & 3D Assets', 'Consulting & Direction'],
  },
];

export function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 bg-[#000000] min-h-screen text-[#F8F8F6] px-6 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 md:mb-32">
          <h1 className="font-editorial text-[10vw] uppercase leading-none mb-6 text-[#5B1D1D]">Partnerships</h1>
          <p className="font-sans text-lg text-gray-400 max-w-xl">
            We partner with ambitious leaders who understand that world-class design is a strategic advantage. Our
            engagements are tailored for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-white/20 p-10 md:p-14 hover:bg-[#F8F8F6] hover:text-black transition-colors duration-500 group flex flex-col"
            >
              <h3 className="font-editorial text-4xl mb-4">{plan.tier}</h3>
              <div className="font-sans text-sm tracking-widest text-gray-400 group-hover:text-gray-600 mb-8 border-b border-white/20 group-hover:border-black/10 pb-8">
                Starting at{' '}
                <span className="block text-3xl font-bold text-white group-hover:text-black mt-2">{plan.price}</span>
              </div>
              <p className="font-sans text-sm mb-8 leading-relaxed opacity-80">{plan.desc}</p>
              <ul className="flex flex-col gap-4 mb-16 flex-1">
                {plan.list.map((item, j) => (
                  <li key={j} className="font-sans text-sm flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5B1D1D]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/20 group-hover:border-black font-sans text-xs uppercase tracking-widest hover:bg-[#5B1D1D] hover:text-white hover:border-[#5B1D1D] transition-all mt-auto">
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
