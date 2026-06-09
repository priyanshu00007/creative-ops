import { ArrowUpRight } from 'lucide-react';
import { useRouter } from '~/contexts/RouterContext';

export function PhilosophySnippet() {
  const { navigate } = useRouter();

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#F8F8F6] text-[#000000] relative rounded-t-[2rem] -mt-8 z-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3">
          <p className="font-sans text-xs tracking-widest uppercase border-t border-black/20 pt-4">01 — The Approach</p>
        </div>
        <div className="md:w-2/3">
          <h2 className="font-editorial text-4xl md:text-7xl leading-tight mb-12">
            We don&apos;t make designs. <br className="hidden md:block" />
            <span className="text-[#6D6D6D]">We build iconic cultural movements.</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-[#6D6D6D] max-w-2xl leading-relaxed">
            Every pixel is curated. Every interaction is intentional. We blend strategic thinking with world-class craftsmanship to create premium digital experiences that elevate category leaders.
          </p>
          <button
            onClick={() => navigate('agency')}
            className="mt-12 flex items-center gap-4 border-b border-black pb-2 group font-sans text-sm tracking-widest uppercase font-bold"
          >
            Discover our methodology <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
