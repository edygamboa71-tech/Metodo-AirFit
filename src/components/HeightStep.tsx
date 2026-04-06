import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface HeightStepProps {
  onNext: (height: number) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
}

export default function HeightStep({ 
  onNext, 
  onBack, 
  progress,
  currentStepText
}: HeightStepProps) {
  const [height, setHeight] = useState<string>('');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  const handleContinue = () => {
    const heightNum = parseFloat(height);
    if (heightNum > 0) {
      onNext(heightNum);
    }
  };

  const isValid = parseFloat(height) > 50 && parseFloat(height) < 250;

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
          initial={{ width: '63%' }}
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
          <h1 className="text-[28px] font-bold text-center leading-tight mb-8 text-text-main">
            ¿Cuál es tu estatura?
          </h1>

          {/* Unit Toggle */}
          <div className="flex bg-gray-200 p-1 rounded-full mb-12 w-32">
            <button
              onClick={() => setUnit('in')}
              className={`flex-1 py-1.5 text-sm font-bold rounded-full transition-all ${
                unit === 'in' ? 'bg-white text-text-main shadow-sm' : 'text-gray-500'
              }`}
            >
              in
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`flex-1 py-1.5 text-sm font-bold rounded-full transition-all ${
                unit === 'cm' ? 'bg-primary text-white shadow-sm' : 'text-gray-500'
              }`}
            >
              cm
            </button>
          </div>

          {/* Height Input */}
          <div className="flex flex-col items-center mb-12 w-full">
            <div className="flex items-baseline gap-2 border-b-2 border-gray-300 pb-2 w-48 justify-center">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="0"
                className="bg-transparent text-[40px] font-bold text-center w-full focus:outline-none text-text-main placeholder:text-gray-300"
                autoFocus
              />
              <span className="text-2xl font-bold text-gray-400">{unit}</span>
            </div>
          </div>

          {/* Info Card */}
          <div className="w-full bg-white rounded-[20px] p-6 flex gap-4 items-start mb-10 border border-gray-100 shadow-sm">
            <span className="text-2xl">📊</span>
            <div className="flex flex-col">
              <h3 className="font-bold text-text-main text-base mb-1">Calculando tu índice de masa corporal ideal</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Utilizamos tu estatura para determinar tu rango de peso saludable y personalizar tu plan.
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
            Continuar
          </button>
        </motion.div>
      </main>
    </div>
  );
}
