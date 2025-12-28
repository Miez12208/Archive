import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RomList from '@/components/RomList';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <RomList />
      <Reviews />
      <Footer />
    </main>
  );
}
