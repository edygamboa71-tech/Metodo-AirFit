import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ChickenPreferenceStepProps {
  onSelect: (preference: string) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
}

export default function ChickenPreferenceStep({ 
  onSelect, 
  onBack, 
  progress,
  currentStepText
}: ChickenPreferenceStepProps) {
  const chickenImage = "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
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
          initial={{ width: '89%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-[32px] font-bold text-center leading-tight mb-2 text-text-main">
            Love it or hate it
          </h1>
          
          <p className="text-gray-400 text-center text-sm mb-8">
            If you don't know, choose Neutral
          </p>

          <h2 className="text-[20px] font-bold text-center mb-6 text-text-main">
            Fried Chicken
          </h2>

          {/* Food Image */}
          <div className="w-full aspect-square max-w-[340px] rounded-[32px] overflow-hidden mb-12 shadow-xl ring-1 ring-black/5">
            <img 
              src={chickenImage} 
              alt="Fried Chicken" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 w-full max-w-[400px] mt-auto">
            <button
              onClick={() => onSelect('hate')}
              className="flex-1 h-[56px] bg-black text-white rounded-full font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Hate it
            </button>
            <button
              onClick={() => onSelect('neutral')}
              className="flex-1 h-[56px] bg-white text-primary border-2 border-primary rounded-full font-bold text-sm hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Neutral
            </button>
            <button
              onClick={() => onSelect('love')}
              className="flex-1 h-[56px] bg-primary text-white rounded-full font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
            >
              Love it
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
