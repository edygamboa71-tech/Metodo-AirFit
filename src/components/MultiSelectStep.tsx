import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { Language, translations } from '../translations';

interface MultiSelectStepProps {
  question: string;
  subtitle: string;
  options: string[];
  onNext: (selected: string[]) => void;
  onBack: () => void;
  progress: number;
  lang: Language;
}

export default function MultiSelectStep({ 
  question, 
  subtitle, 
  options, 
  onNext, 
  onBack, 
  progress,
  lang
}: MultiSelectStepProps) {
  const t = translations[lang];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option) 
        : [...prev, option]
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 relative">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <ArrowLeft size={24} className="text-text-main" />
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-[600px] h-1.5 bg-gray-100 overflow-hidden">
        <motion.div 
          initial={{ width: '15%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <h1 className="text-[26px] font-bold text-center leading-tight mb-2 text-text-main">
            {question}
          </h1>
          <p className="text-text-secondary text-center mb-10 font-medium">
            {subtitle}
          </p>

          <div className="flex flex-col gap-[12px] w-full mb-10">
            {options.map((option, index) => {
              const isSelected = selectedOptions.includes(option);
              return (
                <button
                  key={index}
                  onClick={() => toggleOption(option)}
                  className={`group w-full min-h-[64px] px-5 rounded-[12px] transition-all flex items-center gap-4 border ${
                    isSelected 
                      ? 'bg-primary/5 border-primary shadow-sm' 
                      : 'bg-[#F5F5F5] border-transparent hover:bg-primary/5 hover:border-primary/20'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-[6px] border-2 flex items-center justify-center transition-all shrink-0 ${
                    isSelected 
                      ? 'bg-primary border-primary' 
                      : 'bg-white border-gray-300 group-hover:border-primary/40'
                  }`}>
                    {isSelected && <Check size={16} className="text-white stroke-[3px]" />}
                  </div>
                  <span className="text-text-main font-medium text-left">{option}</span>
                </button>
              );
            })}
          </div>

          <button 
            onClick={() => onNext(selectedOptions)}
            disabled={selectedOptions.length === 0}
            className={`w-full h-[64px] rounded-[16px] font-bold text-lg transition-all ${
              selectedOptions.length > 0 
                ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]' 
                : 'bg-primary-light text-white cursor-not-allowed opacity-70'
            }`}
          >
            {t.common.continue}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
