'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>US TEST KITCHEN</strong> is a service operated by <strong>09STATES</strong>, 
                dedicated to supporting Japanese businesses in their US market entry.
              </p>
              <p>
                私たちはシアトルとロサンゼルスを拠点に、日本の飲食業・小売業の皆様が<br/>
                「低リスク」「低コスト」で米国市場に挑戦できる環境を提供しています。
              </p>
              <p>
                現地での法人設立やビザ取得といった高いハードルをスキップし、<br/>
                まずは「商品が売れるか」をテストする。<br/>
                その最初の一歩を、私たちが全力でサポートいたします。
              </p>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
             {/* Placeholder for Seattle Image */}
             <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                {/* In a real scenario, use next/image here */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=2619&auto=format&fit=crop')] bg-cover bg-center" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
