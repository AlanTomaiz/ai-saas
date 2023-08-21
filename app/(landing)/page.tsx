import { LandingContent } from '@/components/landing-content';
import { LandingHero } from '@/components/landing-hero';
import { LandingNavibar } from '@/components/landing-navbar';

function Home() {
  return (
    <div className="h-full">
      <LandingNavibar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}

export default Home;
