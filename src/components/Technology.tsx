'use client';

import { motion } from 'framer-motion';
import { Bot, TabletSmartphone } from 'lucide-react';

export default function Technology() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0F19] via-[#101827] to-[#0B0F19] text-white relative overflow-hidden">
       {/* Background Stars Effect */}
       <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '120px 120px', backgroundPosition: '20px 20px' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 text-center">
            <span className="inline-block py-1 px-3 border border-[#38BDF8]/30 rounded-full text-xs font-bold tracking-widest text-[#38BDF8] mb-4 uppercase">Tech Solutions</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 font-serif text-[#38BDF8]"
          >
            09STATESテクノロジーの活用
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border-2 border-dashed border-white/20 hover:border-[#38BDF8]/50 transition-colors relative group"
            >
                {/* Chalk effect */}
                <div className="absolute top-4 right-4 text-[#38BDF8] opacity-80 group-hover:opacity-100 transition-opacity">
                    <TabletSmartphone size={48} />
                </div>

                <h3 className="text-2xl font-bold mb-4 font-serif text-white">飲食店支援システム</h3>
                <p className="text-gray-300 leading-relaxed font-light tracking-wide">
                    自社開発のオーダーシステムやPOS連携により、オペレーションを効率化。
                    顧客データの収集・分析を自動化し、勘や経験に頼らない<strong className="text-white font-bold border-b border-white/30">データドリブンの経営</strong>を支援します。
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border-2 border-dashed border-white/20 hover:border-[#38BDF8]/50 transition-colors relative group"
            >
                <div className="absolute top-4 right-4 text-[#38BDF8] opacity-80 group-hover:opacity-100 transition-opacity">
                     <Bot size={48} />
                </div>

                <h3 className="text-2xl font-bold mb-4 font-serif text-white">AIによるオペレーション、<br/>マネージメント支援システム</h3>
                <p className="text-gray-300 leading-relaxed font-light tracking-wide">
                    AIがデータを分析し、需要予測や人材育成・配置を最適化。複雑な数値を<strong className="text-white font-bold border-b border-white/30">「実行力」</strong>へと変換し、マネージメント業務を飛躍的に効率化します。
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
