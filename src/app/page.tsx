import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RomList from '@/components/RomList';
import Readme from '@/components/Readme';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={200}>
        <RomList />
      </FadeIn>
      <FadeIn delay={300}>
        <Readme />
      </FadeIn>
      <FadeIn delay={400}>
        <Reviews />
      </FadeIn>
      <Footer />
    </main>
  );
}
