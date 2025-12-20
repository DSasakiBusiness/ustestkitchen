'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChefHat } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
           <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
             <ChefHat size={24} />
           </div>
           <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'} group-hover:opacity-80`}>
             US TEST KITCHEN
           </span>
        </Link>
      </div>
    </nav>
  );
}
