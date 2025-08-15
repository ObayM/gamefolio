import HeroSection from '@/components/Hero/hero-section';
import AboutSection from '@/components/About/about';
import ProjectsSection from '@/components/Projects/projects';
import ContactSection from '@/components/Contact';


export default function Home() {
  return (
    <main className="text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}