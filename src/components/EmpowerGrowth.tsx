'use client';

import { motion } from 'framer-motion';
import { ChefHat, Store, UtensilsCrossed, ClipboardList, CheckCircle2, Star } from 'lucide-react';

const icons = [
  { icon: <ChefHat size={36} />, text: "現地スタッフが\nフルサポート", color: "text-[#38BDF8]" },
  { icon: <Store size={36} />, text: "実店舗で\n販売テスト", color: "text-[#38BDF8]" },
  { icon: <UtensilsCrossed size={36} />, text: "渡米なしでも\nOK", color: "text-[#38BDF8]" },
  { icon: <ClipboardList size={36} />, text: "データの\n収集と分析", color: "text-[#38BDF8]" },
];

const cards = [
  {
    number: "01",
    title: "飲食店向け\nテストサービス",
    engTitle: "RESTAURANT TEST SERVICE",
    description: "既存のレストランを活用し、イートイン・デリバリーの両面で貴社のメニューを販売テストします。",
    plans: ["渡米ありプラン", "渡米なしプラン", "SNSプラン"],
    price: "Popular",
    borderColor: "border-gray-900"
  },
  {
    number: "02",
    title: "店舗サブリース\nマッチング",
    engTitle: "STORE SUB-LEASE",
    description: "居抜き物件や既存店のアイドルタイムを活用し、低コストで迅速に独立した店舗運営を開始できます。",
    plans: ["短期ポップアップ", "長期サブリース", "ゴーストキッチン"],
    price: "Smart",
    borderColor: "border-gray-900"
  },
  {
    number: "03",
    title: "既製品\nテスト販売",
    engTitle: "PRODUCT SALES",
    description: "パートナー小売店やECサイトを通じて、加工食品や雑貨のテスト販売と市場調査を行います。",
    plans: ["小売店棚貸し", "サンプリング", "EC販売代行"],
    price: "Retail",
    borderColor: "border-gray-900"
  }
];

export default function EmpowerGrowth() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" 
    style={{
        backgroundColor: '#FFFFFF',
        backgroundImage: `url('/images/menu-paper.png')`, // User-provided paper texture
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.02)' // Subtle depth
    }}>
       {/* Decorative Classic Menu Frame */}
       <div className="absolute inset-4 border-4 border-double border-gray-900/10 pointer-events-none rounded-lg" />


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Icons Section - Plated Style (Now Black Ink) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {icons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              {/* Plate Effect - Black Border */}
              <div className="relative">
                 <div className="w-24 h-24 rounded-full bg-transparent shadow-none flex items-center justify-center border-2 border-[#38BDF8]/60 blur-[0.5px] group-hover:bg-[#38BDF8] group-hover:text-white transition-colors duration-300">
                    <div className={`${item.color} drop-shadow-sm group-hover:text-white transition-colors duration-300`}>
                        {item.icon}
                    </div>
                 </div>
              </div>
              <p className="font-bold text-gray-900 whitespace-pre-line leading-tight text-lg font-serif">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
          >
             <h2 className="text-4xl md:text-6xl font-black text-[#38BDF8] mb-2 font-serif tracking-tight drop-shadow-sm blur-[0.5px]">
              MENU
            </h2>
            <p className="text-xs font-bold tracking-[0.3em] text-gray-900 uppercase mb-4">Our Services</p>
            <div className="w-full h-1 bg-[#38BDF8] mx-auto rounded-full blur-[0.5px] opacity-80" />
            <div className="w-1/2 h-1 bg-[#38BDF8] mx-auto rounded-full mt-1 blur-[0.5px] opacity-80" />
          </motion.div>
        </div>

        {/* Cards Section - Menu Card Style */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Removed bg-white, shadow-menu. Added border and transparent bg.
              className="bg-transparent rounded-none border-2 border-[#38BDF8]/50 blur-[0.3px] relative flex flex-col h-full hover:bg-[#38BDF8]/5 transition-colors duration-300"
            >
               {/* Printed "tape" or header line */}
               <div className="h-1 w-full bg-[#38BDF8]/80 mb-4 blur-[0.5px]" />
               
               {/* Card Content */}
              <div className="px-6 pb-8 pt-2 flex-grow relative">
                {/* Number as a stamp */}
                <div className="absolute top-0 right-4 border border-gray-900 rounded-full w-12 h-12 flex items-center justify-center rotate-12">
                    <span className="font-serif text-xl font-bold text-gray-900">{card.number}</span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-1 whitespace-pre-line font-serif leading-tight border-b-2 border-dotted border-gray-400 pb-4 inline-block pr-12">
                    {card.title}
                </h3>
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-2 mb-6">{card.engTitle}</p>
                
                <p className="text-gray-800 mb-8 leading-relaxed text-sm font-medium">
                  {card.description}
                </p>

                <div className="space-y-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center mb-2 border-b border-gray-300 pb-1 mx-8">- Includes -</p>
                  {card.plans.map((plan, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <span className="text-sm font-bold text-gray-700 font-serif tracking-wide">{plan}</span>
                       {/* Dotted leader */}
                       <div className="flex-grow mx-2 border-b border-dotted border-gray-400 relative top-1" />
                       <CheckCircle2 size={14} className="text-gray-800" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
