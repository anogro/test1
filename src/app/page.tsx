"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from '@/components/Intro';
import Quiz from '@/components/Quiz';
import ResultCard from '@/components/ResultCard';
import { questions } from '@/data/questions';
import { results } from '@/data/results';

type Step = 'intro' | 'quiz' | 'result';

export default function Home() {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [resultKey, setResultKey] = useState<string>('');

  const handleStart = () => setStep('quiz');

  const handleQuizComplete = (finalAnswers: Record<string, string>) => {
    setAnswers(finalAnswers);
    calculateResult(finalAnswers);
  };

  const calculateResult = (finalAnswers: Record<string, string>) => {
    let a_exp = 0, a_growth = 0;
    let b_free = 0, b_struct = 0;
    let c_open = 0, c_prot = 0;

    Object.values(finalAnswers).forEach(key => {
      if (key === 'A_EXPERIENCE') a_exp++;
      if (key === 'A_GROWTH') a_growth++;
      if (key === 'B_FREE') b_free++;
      if (key === 'B_STRUCTURED') b_struct++;
      if (key === 'C_OPEN') c_open++;
      if (key === 'C_PROTECTIVE') c_prot++;
    });

    const axisA = a_exp >= a_growth ? 'EXPERIENCE' : 'GROWTH';
    const axisB = b_free >= b_struct ? 'FREE' : 'STRUCTURED';
    const axisC = c_open >= c_prot ? 'OPEN' : 'PROTECTIVE';

    const key = `${axisA}_${axisB}_${axisC}`;
    
    // Fallback if key doesn't match perfectly
    if (results[key]) {
      setResultKey(key);
    } else {
      setResultKey(Object.keys(results)[0]);
    }
    
    setStep('result');
  };

  const handleRestart = () => {
    setAnswers({});
    setResultKey('');
    setStep('intro');
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'intro' && <Intro key="intro" onStart={handleStart} />}
        {step === 'quiz' && <Quiz key="quiz" questions={questions} onComplete={handleQuizComplete} />}
        {step === 'result' && <ResultCard key="result" result={results[resultKey]} onRestart={handleRestart} />}
      </AnimatePresence>
    </main>
  );
}
