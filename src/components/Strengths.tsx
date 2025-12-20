'use client';

import { motion } from 'framer-motion';

export default function Strengths() {
  const points = [
    {
      title: "Positioning",
      subtitle: "独自性・優位性",
      desc: "米国市場における実店舗インフラを持つ唯一無二のサービスとして、競合他社にはない実践的な検証環境を提供します。"
    },
    {
      title: "Expert Team",
      subtitle: "専門チーム",
      desc: "飲食・小売のスペシャリスト、法務・税務の専門家、現地マーケターで構成されたチームが、貴社の挑戦をバックアップします。"
    },
    {
      title: "Adaptive Development",
      subtitle: "柔軟な展開",
      desc: "テスト結果に基づき、撤退、ピボット、本格展開など、次のステップへの移行をスムーズかつ低コストで実現します。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-2"
          >
            US TEST KITCHENの強み
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary font-bold"
          >
            従来の支援サービスとは一線を画すアプローチ
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l-4 border-primary/20"
             >
                <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shadow-md border-2 border-white">
                    {i + 1}
                </div>
                <h3 className="text-2xl font-black text-gray-800 tracking-tight mb-1 font-serif">{point.title}</h3>
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider border-b border-dashed border-primary/30 pb-2 inline-block">{point.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-justify font-medium">
                    {point.desc}
                </p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
