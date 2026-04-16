import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Language, translations } from '../translations';

interface ComparisonStepProps {
  onNext: () => void;
  onBack: () => void;
  lang: Language;
}

export default function ComparisonStep({ onNext, onBack, lang }: ComparisonStepProps) {
  const t = translations[lang];

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
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
        </div>
      </header>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          {/* Main Title */}
          <h1 className="text-[28px] md:text-[32px] font-black text-center leading-[1.1] mb-8 text-text-main">
            {t.steps.comparison.title}
          </h1>

          {/* Comparison Card */}
          <div className="w-full bg-white rounded-[24px] p-8 shadow-xl shadow-black/5 mb-10 flex flex-col items-center border border-gray-100">
            <div className="flex flex-col items-center mb-6">
              <span className="text-[48px] font-black text-primary leading-none mb-1">3x 🎯</span>
              <h2 className="text-gray-400 font-bold text-sm uppercase tracking-widest">{t.steps.comparison.chartLabel}</h2>
            </div>

            {/* Chart Container */}
            <div className="w-full flex items-end justify-around h-[200px] mb-8 px-4">
              {/* Other Diets Bar */}
              <div className="flex flex-col items-center w-24">
                <div className="text-red-500 font-black text-lg mb-2">{t.steps.comparison.otherDietsValue}</div>
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '40px' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full bg-red-500 rounded-t-lg"
                />
                <span className="text-gray-400 text-xs font-bold mt-3 text-center leading-tight">{t.steps.comparison.otherDietsLabel}</span>
              </div>

              {/* AirFit Bar */}
              <div className="flex flex-col items-center w-24">
                <div className="text-green-500 font-black text-lg mb-2">{t.steps.comparison.airfitValue}</div>
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '140px' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full bg-green-500 rounded-t-lg shadow-lg shadow-green-500/20"
                />
                <span className="text-text-main text-xs font-black mt-3 text-center leading-tight">{t.steps.comparison.airfitLabel}</span>
              </div>
            </div>

            {/* Credibility Text */}
            <p className="text-gray-400 text-[11px] text-center italic leading-relaxed">
              {t.steps.comparison.disclaimer}
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onNext}
            className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {t.common.continue}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
