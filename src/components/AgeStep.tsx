import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Language, translations } from '../translations';

interface AgeStepProps {
  onNext: (age: number) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
  lang: Language;
}

export default function AgeStep({ 
  onNext, 
  onBack, 
  progress,
  currentStepText,
  lang
}: AgeStepProps) {
  const t = translations[lang];
  const [age, setAge] = useState<string>('');

  const handleContinue = () => {
    const ageNum = parseInt(age);
    if (ageNum >= 18 && ageNum <= 99) {
      onNext(ageNum);
    }
  };

  const isValid = parseInt(age) >= 18 && parseInt(age) <= 99;

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 relative bg-white">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <ArrowLeft size={24} className="text-text-main" />
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
          <span className="text-gray-300 text-sm font-medium">|</span>
          <span className="text-gray-400 text-sm font-medium">{currentStepText}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-[600px] h-1.5 bg-gray-100 overflow-hidden">
        <motion.div 
          initial={{ width: '74%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-[28px] font-bold text-center leading-tight mb-12 text-text-main">
            {t.steps.age.title}
          </h1>

          {/* Age Input */}
          <div className="flex flex-col items-center mb-12 w-full">
            <div className="flex items-baseline gap-2 border-b-2 border-gray-300 pb-2 w-48 justify-center">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="0"
                className="bg-transparent text-[40px] font-bold text-center w-full focus:outline-none text-text-main placeholder:text-gray-300"
                autoFocus
              />
              <span className="text-2xl font-bold text-gray-400">{t.steps.age.yearsLabel}</span>
            </div>
          </div>

          {/* Info Card */}
          <div className="w-full bg-white rounded-[20px] p-6 flex gap-4 items-start mb-10 border border-gray-100 shadow-sm">
            <span className="text-2xl">👤</span>
            <div className="flex flex-col">
              <h3 className="font-bold text-text-main text-base mb-1">{t.steps.age.infoTitle}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.steps.age.infoMsg}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            disabled={!isValid}
            onClick={handleContinue}
            className={`w-full h-[64px] rounded-[16px] font-bold text-lg transition-all mt-auto ${
              isValid 
                ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]' 
                : 'bg-primary/40 text-white/70 cursor-not-allowed'
            }`}
          >
            {t.common.continue}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
