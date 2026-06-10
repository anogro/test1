import { motion } from 'framer-motion';
import { ResultData } from '../types';
import { RefreshCcw, Check, AlertCircle } from 'lucide-react';

interface ResultCardProps {
  result: ResultData;
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: ResultCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen py-12 px-5 flex flex-col items-center justify-center max-w-2xl mx-auto"
    >
      {/* Top Header */}
      <div className="text-center mb-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-full mb-5 shadow-sm"
        >
          {result.name}
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 break-keep leading-tight">
          {result.headline}
        </h1>
      </div>

      {/* Main Character Image (Transparent PNG without box) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full flex flex-col items-center justify-center mb-10"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center mb-6">
          {/* 캐릭터 이미지가 들어갈 자리입니다. (배경 없음) */}
          <img 
            src={result.bgImage} 
            alt={result.name} 
            className="max-w-full max-h-full object-contain drop-shadow-xl"
          />
        </div>
        <div className="text-center px-4">
          <h2 className="text-[#FF8A00] text-xl md:text-2xl font-black mb-3">
            "{result.cardQuote}"
          </h2>
          <p className="text-slate-600 font-medium text-lg break-keep">
            {result.desc}
          </p>
        </div>
      </motion.div>

      {/* Details Box - White Flat Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 mb-8"
      >
        <div className="mb-8">
          <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2 mb-5">
            <span className="bg-orange-100 text-orange-500 p-1.5 rounded-xl"><Check size={20} strokeWidth={3} /></span>
            우리 가족의 강점
          </h3>
          <ul className="flex flex-col gap-4">
            {result.strengths.map((s, i) => (
              <li key={i} className="text-slate-700 font-medium flex items-start leading-relaxed">
                <span className="text-orange-400 mr-3 mt-1.5 text-sm">●</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-slate-100 mb-8" />

        <div className="mb-8">
          <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2 mb-5">
            <span className="bg-teal-100 text-[#00A8B5] p-1.5 rounded-xl"><AlertCircle size={20} strokeWidth={3} /></span>
            주의할 점
          </h3>
          <ul className="flex flex-col gap-4">
            {result.watchouts.map((w, i) => (
              <li key={i} className="text-slate-700 font-medium flex items-start leading-relaxed">
                <span className="text-[#00A8B5] mr-3 mt-1.5 text-sm">●</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <div className="mb-5">
            <div className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">추천 스타일</div>
            <div className="text-slate-800 font-bold">{result.style}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">추천 도시</div>
            <div className="text-[#00A8B5] font-extrabold text-lg">{result.cities}</div>
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full flex flex-col gap-3 pb-8"
      >
        <button className="w-full bg-[#FF8A00] hover:bg-[#E67700] text-white font-extrabold text-lg py-5 px-6 rounded-2xl shadow-md transition-all active:scale-95">
          {result.ctaPrimary}
        </button>
        <button 
          onClick={onRestart}
          className="w-full flex justify-center items-center gap-2 text-slate-500 hover:text-slate-800 font-bold py-4 rounded-2xl transition-all hover:bg-slate-100"
        >
          <RefreshCcw size={18} strokeWidth={2.5} />
          다시 테스트하기
        </button>
      </motion.div>
    </motion.div>
  );
}
