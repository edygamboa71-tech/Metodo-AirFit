import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Language, translations } from '../translations';

interface BodyAreaSelectionStepFemaleProps {
  onNext: (selected: string[]) => void;
  onBack: () => void;
  progress: number;
  gender: string | null;
  lang: Language;
}

export default function BodyAreaSelectionStepFemale({ 
  onNext, 
  onBack, 
  progress,
  gender,
  lang
}: BodyAreaSelectionStepFemaleProps) {
  const t = translations[lang];
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const AREAS = t.steps.bodyAreas.areas.map((area, i) => ({
    ...area,
    top: ['15%', '15%', '40%', '40%', '65%', '65%'][i],
    left: i % 2 === 0 ? '0%' : undefined,
    right: i % 2 !== 0 ? '0%' : undefined,
  }));

  const toggleArea = (id: string) => {
    setSelectedAreas(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const imageUrl = "https://i.imgur.com/iQvzFAC.jpeg";

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
          initial={{ width: '26%' }}
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
          <h1 className="text-[26px] font-bold text-center leading-tight mb-2 text-text-main">
            {t.steps.bodyAreas.title}
          </h1>
          <p className="text-text-secondary text-center mb-10 italic">
            {t.steps.bodyAreas.subtitle}
          </p>

          {/* Interactive Body Map */}
          <div className="relative w-full max-w-[340px] aspect-[3/4] mb-12">
            <img 
              src={imageUrl} 
              alt="Body map" 
              className="w-full h-full object-cover rounded-[32px] shadow-sm"
              referrerPolicy="no-referrer"
            />
            
            {/* Area Labels */}
            {AREAS.map((area) => {
              const isSelected = selectedAreas.includes(area.id);
              return (
                <button
                  key={area.id}
                  onClick={() => toggleArea(area.id)}
                  style={{ 
                    top: area.top, 
                    left: area.left, 
                    right: area.right,
                    transform: area.left === '0%' ? 'translateX(-20%)' : 'translateX(20%)'
                  }}
                  className={`absolute flex items-center gap-2 px-3 py-2 rounded-full shadow-md transition-all z-20 ${
                    isSelected ? 'bg-white border-primary border' : 'bg-gray-50 border-transparent border'
                  }`}
                >
                  {area.left === '0%' && (
                    <span className="text-text-main font-bold text-sm">{area.label}</span>
                  )}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected ? 'bg-primary border-primary' : 'bg-white border-gray-300'
                  }`}>
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  {area.right === '0%' && (
                    <span className="text-text-main font-bold text-sm">{area.label}</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="w-full mt-auto">
            <p className="text-center text-text-secondary text-sm mb-4">
              {t.steps.bodyAreas.continueMsg}
            </p>
            <button 
              onClick={() => onNext(selectedAreas)}
              className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t.common.continue}
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
