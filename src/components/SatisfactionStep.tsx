import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface SatisfactionStepProps {
  onSelect: (id: string) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
  lang: Language;
}

export default function SatisfactionStep({ 
  onSelect, 
  onBack, 
  progress,
  currentStepText,
  lang
}: SatisfactionStepProps) {
  const t = translations[lang];

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
        
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
          <span className="text-gray-300 text-sm font-medium">|</span>
          <span className="text-gray-400 text-sm font-medium">{currentStepText}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-[600px] h-1.5 bg-gray-100 overflow-hidden">
        <motion.div 
          initial={{ width: '48%' }}
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
          <h1 className="text-[26px] font-bold text-center leading-tight mb-10 text-text-main">
            {t.steps.satisfaction.title}
          </h1>

          <div className="flex flex-col gap-3 w-full">
            {t.steps.satisfaction.options.map((option) => (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className="group w-full min-h-[72px] px-6 py-4 bg-[#F5F5F5] rounded-[16px] flex items-center justify-between transition-all text-left hover:bg-primary/5 hover:border-primary/20 border-2 border-transparent"
              >
                <span className="text-text-main font-bold text-base md:text-lg leading-tight pr-4">
                  {option.label}
                </span>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-primary transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
