import { useState } from 'react';
import { motion } from 'framer-motion';

export interface UserInfo {
  name: string;
  age: string;
  gender: string;
  childrenCount: number;
  childrenDetails: Array<{ gender: string; age: string }>;
  email: string;
}

interface SignUpFormProps {
  onSubmit: (userInfo: UserInfo) => Promise<void>;
}

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('여성');
  const [childrenCount, setChildrenCount] = useState<number>(1);
  const [childrenDetails, setChildrenDetails] = useState<Array<{ gender: string; age: string }>>([
    { gender: '여성', age: '' }
  ]);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChildrenCountChange = (count: number) => {
    setChildrenCount(count);
    const newDetails = [...childrenDetails];
    if (count > newDetails.length) {
      for (let i = newDetails.length; i < count; i++) {
        newDetails.push({ gender: '여성', age: '' });
      }
    } else if (count < newDetails.length) {
      newDetails.splice(count);
    }
    setChildrenDetails(newDetails);
  };

  const updateChild = (index: number, field: 'gender' | 'age', value: string) => {
    const newDetails = [...childrenDetails];
    newDetails[index][field] = value;
    setChildrenDetails(newDetails);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !email || childrenDetails.some(c => !c.age)) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({
        name,
        age,
        gender,
        childrenCount,
        childrenDetails,
        email
      });
    } catch (error) {
      console.error(error);
      alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-2xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-2xl border border-white/60 w-full"
      >
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 text-center">
          프로그램 추천 및 소식 받기 📬
        </h2>
        <p className="text-slate-600 text-center mb-8 font-medium">
          우리 가족에게 딱 맞는 맞춤 프로그램과 유용한 소식을 보내드릴게요.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">이름</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all font-medium text-slate-900"
                placeholder="홍길동"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">나이</label>
              <input 
                type="number" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all font-medium text-slate-900"
                placeholder="예: 35"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">본인 성별</label>
            <div className="flex gap-4">
              {['여성', '남성'].map(g => (
                <label key={g} className="flex-1 cursor-pointer">
                  <input type="radio" name="gender" className="peer sr-only" checked={gender === g} onChange={() => setGender(g)} />
                  <div className="w-full p-4 text-center rounded-xl border-2 border-slate-200 bg-slate-50 peer-checked:border-[#FF8A00] peer-checked:bg-[#FFF5EB] peer-checked:text-[#FF8A00] peer-checked:font-bold transition-all text-slate-600 font-medium">
                    {g}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">자녀 수</label>
            <select 
              value={childrenCount}
              onChange={(e) => handleChildrenCountChange(Number(e.target.value))}
              className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all font-medium text-slate-900 appearance-none"
            >
              {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n}명</option>
              ))}
            </select>
          </div>

          <div className="space-y-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <label className="text-sm font-bold text-slate-700 block mb-2">자녀 정보 입력</label>
            {childrenDetails.map((child, idx) => (
              <div key={idx} className="flex gap-3 items-center">
                <span className="text-sm font-bold text-[#FF8A00] w-10">{idx + 1}째</span>
                <select 
                  value={child.gender}
                  onChange={(e) => updateChild(idx, 'gender', e.target.value)}
                  className="flex-1 p-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all text-sm font-medium"
                >
                  <option value="여성">여아</option>
                  <option value="남성">남아</option>
                </select>
                <input 
                  type="number" 
                  value={child.age}
                  onChange={(e) => updateChild(idx, 'age', e.target.value)}
                  placeholder="나이 (예: 7)"
                  required
                  className="flex-1 p-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all text-sm font-medium"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">이메일 주소</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all font-medium text-slate-900"
              placeholder="example@email.com"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF8A00] to-[#FFB703] text-white font-black text-xl shadow-[0_8px_20px_-6px_rgba(255,138,0,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(255,138,0,0.6)] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {isSubmitting ? '신청 처리 중...' : '추천 정보 신청하기'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
