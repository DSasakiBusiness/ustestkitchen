'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Realistic Sky Background */}
      <div className="absolute inset-0 z-0 bg-gray-900">
         <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-sky.jpg')" }}
         />
         {/* Overlay to ensure text readability against the bright sky */}
         <div className="absolute inset-0 bg-black/10" />
      </div>



      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center h-full pointer-events-none">
        <div className="max-w-3xl bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-2xl rounded-sm pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-2 tracking-tight"
          >
            Unlock Your<br/>
            Business Potential
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            まず試す
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium"
          >
            ビザ不要、現地法人設立不要<br/>
            低コスト/低リスクで米国市場を体感できる<br/>
            新しいプラットフォーム
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#contact" className="inline-block px-10 py-4 bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-all uppercase tracking-wider shadow-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
