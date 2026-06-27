import { HomeHero } from '~/pages/home/HomeHero';
import { PhilosophySnippet } from '~/pages/home/PhilosophySnippet';
import { SectionSnippet } from '~/components/SectionSnippet';
import { ServicesSnippet } from '~/pages/home/ServicesSnippet';
import { VideoFeature } from '~/pages/home/VideoFeature';
import { PortfolioSnippet } from '~/pages/home/PortfolioSnippet';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <PhilosophySnippet />

      <SectionSnippet
        number="02"
        title="The Craft"
        heading={
          <>
            We obsess over every detail.{' '}
            <br className="hidden md:block" />
            <span className="text-[#6D6D6D]">Precision is our signature.</span>
          </>
        }
        description="From typography kerning to micro-interaction timing, we treat every element as a piece of art. Our design process is methodical, research-driven, and executed by specialists who have spent years mastering their discipline."
        ctaText="See our process"
        ctaTarget="/agency"
        isDark
      />

      <SectionSnippet
        number="03"
        title="The Culture"
        heading={
          <>
            We don&apos;t follow trends.{' '}
            <br className="hidden md:block" />
            <span className="text-[#6D6D6D]">We set them.</span>
          </>
        }
        description="Our team is a collective of cultural anthropologists, visual artists, and strategic thinkers operating at the intersection of art and commerce. We are permanently curious, uncomfortably ambitious, and relentlessly dedicated to the craft."
        ctaText="Meet the team"
        ctaTarget="/agency"
      />

      <ServicesSnippet />

      <SectionSnippet
        number="04"
        title="The Impact"
        heading={
          <>
            Results that speak{' '}
            <br className="hidden md:block" />
            <span className="text-[#6D6D6D]">louder than words.</span>
          </>
        }
        description="Our work has generated over $500M in incremental revenue for our partners. But the numbers only tell half the story — we measure success in cultural relevance, brand equity, and the lasting relationships we build along the way."
        ctaText="View our case studies"
        ctaTarget="/work"
        isDark
      />

      <VideoFeature />
      <PortfolioSnippet />
    </>
  );
}
