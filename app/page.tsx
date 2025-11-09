import Navigation from './components/Navigation';
import HomeHero from './components/home/HomeHero';
import HomeFeatureSection from './components/home/HomeFeatureSection';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HomeHero />
      <HomeFeatureSection />
    </main>
  );
}

