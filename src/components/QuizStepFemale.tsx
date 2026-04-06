import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface QuizStepFemaleProps {
  question: string;
  options: string[];
  currentStep: number;
  totalSteps: number;
  progress: number;
  onSelect: (option: string) => void;
  onBack: () => void;
}

export default function QuizStepFemale({ 
  question, 
  options, 
  currentStep, 
  totalSteps, 
  progress, 
  onSelect, 
  onBack 
}: QuizStepFemaleProps) {
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

        <div className="ml-auto z-10">
          <span className="text-text-secondary font-medium text-sm">
            {currentStep}/{totalSteps}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-[600px] h-1.5 bg-gray-100 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <h1 className="text-[26px] font-bold text-center leading-tight mb-12 text-text-main">
            {question}
          </h1>

          <div className="flex flex-col gap-4 w-full">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => onSelect(option)}
                className="group w-full min-h-[72px] p-5 rounded-[12px] bg-[#F5F5F5] hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all flex items-center justify-center text-center"
              >
                <span className="text-text-main font-medium">{option}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
