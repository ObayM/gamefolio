import HeroSection from '@/components/Hero/hero-section';
import AboutSection from '@/components/About/about';
export default function Home() {
  return (
    <main className='bg-neutral-900 text-white'>
      <HeroSection />
      <AboutSection />
    </main>
  );
}