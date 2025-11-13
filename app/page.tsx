import Navigation from './components/Navigation';
import UnifiedBackground from './components/UnifiedBackground';
import HomeHero from './components/home/HomeHero';
import HomeFeatureSection from './components/home/HomeFeatureSection';
import OurTeasHero from './components/OurTeasHero';
import ProductSection from './components/ProductSection';
import MasterworkSection from './components/MasterworkSection';

export default function Home() {
  return (
    <main>
      <UnifiedBackground />
      <Navigation />
      <HomeHero />
      <HomeFeatureSection />
      <OurTeasHero />
      <ProductSection />
      <MasterworkSection />
    </main>
  );
}

