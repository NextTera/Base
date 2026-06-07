import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

/**
 * Teramot Home Page
 * Design Philosophy: Clean, professional, data-focused
 * Color Scheme: Primary Blue (#0052CC), Accent Green (#00D084)
 * Typography: Bold headings, readable body text
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
