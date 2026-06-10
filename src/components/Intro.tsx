import { motion } from 'framer-motion';

interface IntroProps {
  onStart: () => void;
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
    >
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full border border-white/60 relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-[#FF8A00] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-[#00A8B5] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>

        <h2 className="text-sm font-black text-[#00A8B5] tracking-widest mb-4 uppercase drop-shadow-sm">
          ANOGRO 심리테스트
        </h2>
        <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          해외 한 달 살기,<br />
          <span className="text-[#FF8A00]">우리 가족</span>은<br />어떤 타입일까?
        </h1>
        <p className="text-slate-700 mb-10 font-bold text-lg">
          단 9개의 질문으로 우리 가족에게 딱 맞는<br />
          한 달 살기 스타일을 알아보세요!
        </p>
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-[#FF8A00] to-[#FF9D2E] hover:from-[#E67700] hover:to-[#FF8A00] text-white font-black text-lg py-5 px-8 rounded-2xl shadow-[0_10px_25px_-5px_rgba(255,138,0,0.5)] transition-all transform hover:scale-105 active:scale-95"
        >
          테스트 시작하기 🚀
        </button>
      </div>
    </motion.div>
  );
}
