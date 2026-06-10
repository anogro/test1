import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = questions[currentIdx];

  const handleOptionSelect = (scoreKey: string) => {
    const newAnswers = { ...answers, [question.id]: scoreKey };
    setAnswers(newAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentIdx + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-2xl mx-auto w-full relative">
      <div className="w-full max-w-md bg-white/40 rounded-full h-3 mb-10 overflow-hidden shadow-inner">
        <motion.div
          className="bg-gradient-to-r from-[#FF8A00] to-[#FFB703] h-full rounded-full shadow-md"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="w-full relative min-h-[450px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-2xl border border-white/60 w-full absolute"
          >
            <div className="text-[#00A8B5] font-black text-xl mb-4 tracking-tight drop-shadow-sm">
              Q{currentIdx + 1}.
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 leading-snug">
              {question.text}
            </h2>

            <div className="flex flex-col gap-4">
              {question.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(opt.scoreKey)}
                  className="w-full text-left p-5 md:p-6 rounded-2xl bg-white hover:bg-slate-50 border-2 border-transparent hover:border-[#FF8A00] transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-slate-800 font-bold text-lg"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
