import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface RadioOption {
  id: string;
  label: string;
  emoji: string;
}

interface RadioSelectionStepProps {
  title: string;
  options: RadioOption[];
  onNext: (selectedId: string) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
}

export default function RadioSelectionStep({ 
  title, 
  options, 
  onNext, 
  onBack, 
  progress,
  currentStepText
}: RadioSelectionStepProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
          initial={{ width: '30%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <p className="text-center text-text-secondary text-sm font-bold mb-2 uppercase tracking-wider">
            Step {currentStepText}
          </p>
          <h1 className="text-[26px] font-bold text-center leading-tight mb-10 text-text-main">
            {title}
          </h1>

          <div className="flex flex-col gap-4 w-full mb-10">
            {options.map((option) => {
              const isSelected = selectedId === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedId(option.id)}
                  className={`group w-full min-h-[80px] px-6 py-4 bg-[#F5F5F5] rounded-[20px] flex items-center gap-4 border-2 transition-all text-left shadow-sm hover:shadow-md ${
                    isSelected ? 'border-primary bg-white' : 'border-transparent hover:border-primary/30'
                  }`}
                >
                  {/* Radio Button */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                    isSelected ? 'border-primary bg-primary' : 'border-gray-300 bg-white'
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                  </div>

                  {/* Text */}
                  <span className="flex-grow text-text-main font-bold text-base md:text-lg leading-tight">
                    {option.label}
                  </span>

                  {/* Emoji */}
                  <span className="text-2xl shrink-0">
                    {option.emoji}
                  </span>
                </button>
              );
            })}
          </div>

          <button 
            disabled={!selectedId}
            onClick={() => selectedId && onNext(selectedId)}
            className={`w-full h-[64px] rounded-[16px] font-bold text-lg transition-all ${
              selectedId 
                ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </motion.div>
      </main>
    </div>
  );
}
