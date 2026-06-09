import { motion } from 'framer-motion';
import { HomeHero } from '~/pages/home/HomeHero';
import { PhilosophySnippet } from '~/pages/home/PhilosophySnippet';
import { ServicesSnippet } from '~/pages/home/ServicesSnippet';
import { VideoFeature } from '~/pages/home/VideoFeature';
import { PortfolioSnippet } from '~/pages/home/PortfolioSnippet';

export function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <HomeHero />
      <PhilosophySnippet />
      <ServicesSnippet />
      <VideoFeature />
      <PortfolioSnippet />
    </motion.div>
  );
}
