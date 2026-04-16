import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { Language, translations } from '../translations';

interface MethodsStepProps {
  onNext: (selected: string[]) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
  lang: Language;
}

export default function MethodsStep({ 
  onNext, 
  onBack, 
  progress,
  currentStepText,
  lang
}: MethodsStepProps) {
  const t = translations[lang];
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    if (id === 'none') {
      setSelectedIds(['none']);
      return;
    }

    setSelectedIds(prev => {
      const newSelection = prev.filter(item => item !== 'none');
      if (newSelection.includes(id)) {
        return newSelection.filter(item => item !== id);
      } else {
        return [...newSelection, id];
      }
    });
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
        
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
          <span className="text-gray-300 text-sm font-medium">|</span>
          <span className="text-gray-400 text-sm font-medium">{currentStepText}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-[600px] h-1.5 bg-gray-100 overflow-hidden">
        <motion.div 
          initial={{ width: '52%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <h1 className="text-[26px] font-bold text-center leading-tight mb-2 text-text-main">
            {t.steps.methods.title}
          </h1>
          <p className="text-center text-gray-500 text-sm mb-8">
            {t.steps.methods.subtitle}
          </p>

          <div className="flex flex-col gap-2 w-full mb-10">
            {t.steps.methods.options.map((option) => {
              const isSelected = selectedIds.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`group w-full min-h-[60px] px-5 py-3 bg-[#F5F5F5] rounded-[12px] flex items-center gap-4 border-2 transition-all text-left hover:bg-primary/5 ${
                    isSelected ? 'border-primary bg-white' : 'border-transparent hover:border-primary/20'
                  }`}
                >
                  {/* Checkbox */}
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                    isSelected ? 'border-primary bg-primary' : 'border-gray-300 bg-white'
                  }`}>
                    {isSelected && <Check size={16} className="text-white stroke-[3px]" />}
                  </div>

                  {/* Text */}
                  <span className="flex-grow text-text-main font-bold text-base leading-tight">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>

          <button 
            disabled={selectedIds.length === 0}
            onClick={() => onNext(selectedIds)}
            className={`w-full h-[64px] rounded-[16px] font-bold text-lg transition-all ${
              selectedIds.length > 0 
                ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {t.common.continue}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
