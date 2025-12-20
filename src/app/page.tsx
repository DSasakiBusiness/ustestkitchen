import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EmpowerGrowth from '@/components/EmpowerGrowth';
import Strengths from '@/components/Strengths';
import Technology from '@/components/Technology';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <EmpowerGrowth />
      <Strengths />
      <Technology />
      <AboutUs />
      <Footer />
    </main>
  );
}
