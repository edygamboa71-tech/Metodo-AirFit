import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface TargetWeightStepProps {
  onNext: (weight: number) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
}

export default function TargetWeightStep({ 
  onNext, 
  onBack, 
  progress,
  currentStepText
}: TargetWeightStepProps) {
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');

  const handleContinue = () => {
    const weightNum = parseFloat(weight);
    if (weightNum > 0) {
      onNext(weightNum);
    }
  };

  const isValid = parseFloat(weight) > 0 && parseFloat(weight) < 500;

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
          initial={{ width: '70%' }}
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
          <h1 className="text-[28px] font-bold text-center leading-tight mb-2 text-text-main">
            What is your target weight for the next 21 days?
          </h1>
          
          <p className="text-[#1B5E20] font-bold text-center text-sm mb-8">
            Realistic goal: 4-8kg initial loss
          </p>

          {/* Unit Toggle */}
          <div className="flex bg-gray-200 p-1 rounded-full mb-12 w-32">
            <button
              onClick={() => setUnit('lbs')}
              className={`flex-1 py-1.5 text-sm font-bold rounded-full transition-all ${
                unit === 'lbs' ? 'bg-white text-text-main shadow-sm' : 'text-gray-500'
              }`}
            >
              lbs
            </button>
            <button
              onClick={() => setUnit('kg')}
              className={`flex-1 py-1.5 text-sm font-bold rounded-full transition-all ${
                unit === 'kg' ? 'bg-primary text-white shadow-sm' : 'text-gray-500'
              }`}
            >
              kg
            </button>
          </div>

          {/* Weight Input */}
          <div className="flex flex-col items-center mb-12 w-full">
            <div className="flex items-baseline gap-2 border-b-2 border-gray-300 pb-2 w-48 justify-center">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className="bg-transparent text-[40px] font-bold text-center w-full focus:outline-none text-text-main placeholder:text-gray-300"
                autoFocus
              />
              <span className="text-2xl font-bold text-gray-400">{unit}</span>
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
            Continue
          </button>
        </motion.div>
      </main>
    </div>
  );
}
