"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from '@/components/Intro';
import Quiz from '@/components/Quiz';
import ResultCard from '@/components/ResultCard';
import SignUpForm, { UserInfo } from '@/components/SignUpForm';
import { questions } from '@/data/questions';
import { results } from '@/data/results';

type Step = 'intro' | 'quiz' | 'signup' | 'result';

export default function Home() {
  const [step, setStep] = useState<Step>('intro');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [resultKey, setResultKey] = useState<string>('');
  const [sessionId, setSessionId] = useState<string>('');

  const handleStart = () => {
    // 퀴즈 시작 시 고유 ID 생성
    setSessionId('ID-' + Date.now().toString() + '-' + Math.floor(Math.random() * 1000));
    setStep('quiz');
  };

  const handleQuizComplete = (finalAnswers: Record<string, string>) => {
    setAnswers(finalAnswers);
    const key = calculateResult(finalAnswers);
    setResultKey(key);
    
    // 퀴즈 완료 시 결과만 구글 시트로 먼저 전송 (회원가입 X 상태)
    const currentResult = results[key];
    const payload = {
      type: 'quiz',
      id: sessionId,
      resultKey: key,
      resultName: currentResult ? currentResult.name : "",
      answers: finalAnswers
    };

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbyH4c5rzU2Cq1uCHtBrq5U_d_JD35zqxNfJDCbp50jTSGyNKTnGGFaUKCD_Njmtf4uJsQ/exec";
    
    fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    }).catch(e => console.error("Failed to send quiz data", e));

    setStep('result');
  };

  const handleRequestProgram = () => {
    setStep('signup');
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
    
    if (results[key]) {
      return key;
    } else {
      return Object.keys(results)[0];
    }
  };

  const handleSignUpSubmit = async (userInfo: UserInfo) => {
    const childrenStr = userInfo.childrenDetails.map((c, i) => `${i+1}째: ${c.gender}/${c.age}세`).join(', ');

    const payload = {
      type: 'signup',
      id: sessionId,
      userInfo: {
        name: userInfo.name,
        age: userInfo.age,
        gender: userInfo.gender,
        childrenCount: userInfo.childrenCount,
        childrenDetails: childrenStr,
        email: userInfo.email
      }
    };

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbyH4c5rzU2Cq1uCHtBrq5U_d_JD35zqxNfJDCbp50jTSGyNKTnGGFaUKCD_Njmtf4uJsQ/exec";

    try {
      await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "text/plain;charset=utf-8" }
      });
      alert("신청이 완료되었습니다! 확인 후 연락드리겠습니다.");
    } catch (e) {
      console.error("Failed to send signup data", e);
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    }

    setStep('result');
  };

  const handleRestart = () => {
    setAnswers({});
    setResultKey('');
    setSessionId('');
    setStep('intro');
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'intro' && <Intro key="intro" onStart={handleStart} />}
        {step === 'quiz' && <Quiz key="quiz" questions={questions} onComplete={handleQuizComplete} />}
        {step === 'signup' && <SignUpForm key="signup" onSubmit={handleSignUpSubmit} />}
        {step === 'result' && <ResultCard key="result" result={results[resultKey]} onRestart={handleRestart} onRequestProgram={handleRequestProgram} />}
      </AnimatePresence>
    </main>
  );
}
