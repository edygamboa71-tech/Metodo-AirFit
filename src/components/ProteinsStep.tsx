import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';

interface ProteinsStepProps {
  onNext: (selected: string[]) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
}

const foodOptions = [
  { id: 'pollo', label: 'Pollo', emoji: '🍗' },
  { id: 'pavo', label: 'Pavo', emoji: '🦃' },
  { id: 'res', label: 'Res', emoji: '🥩' },
  { id: 'pescado', label: 'Pescado', emoji: '🐟' },
  { id: 'carne-roja', label: 'Carne roja', emoji: '🍖' },
  { id: 'vegetales', label: 'Vegetales', emoji: '🥦' },
  { id: 'salmon', label: 'Salmón', emoji: '🍣' },
  { id: 'queso', label: 'Queso', emoji: '🧀' },
  { id: 'atun', label: 'Atún', emoji: '🥫' },
  { id: 'huevos', label: 'Huevos', emoji: '🥚' },
  { id: 'leche', label: 'Leche', emoji: '🥛' },
  { id: 'yogur', label: 'Yogur', emoji: '🍦' },
];

export default function ProteinsStep({ 
  onNext, 
  onBack, 
  progress,
  currentStepText
}: ProteinsStepProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(['all']);

  const toggleOption = (id: string) => {
    if (id === 'all') {
      setSelectedIds(['all']);
    } else {
      setSelectedIds(prev => {
        const withoutAll = prev.filter(i => i !== 'all');
        if (withoutAll.includes(id)) {
          const next = withoutAll.filter(i => i !== id);
          return next.length === 0 ? ['all'] : next;
        } else {
          return [...withoutAll, id];
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 relative bg-white shrink-0">
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
      <div className="w-full max-w-[600px] h-1.5 bg-gray-100 overflow-hidden shrink-0">
        <motion.div 
          initial={{ width: '93%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-8 flex flex-col flex-grow overflow-y-auto">
        <h1 className="text-[24px] font-bold text-center leading-tight mb-8 text-text-main px-4">
          ¿Te gustaría incluir alguno de estos productos de tu plan?
        </h1>

        <div className="w-full space-y-1">
          {/* Exclusive Option */}
          <button
            onClick={() => toggleOption('all')}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
              selectedIds.includes('all') 
                ? 'bg-[#F5F5F5] ring-2 ring-primary/20' 
                : 'bg-[#F5F5F5] hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                selectedIds.includes('all') ? 'bg-primary border-primary' : 'border-gray-300 bg-white'
              }`}>
                {selectedIds.includes('all') && <Check size={16} className="text-white stroke-[3]" />}
              </div>
              <span className="font-bold text-text-main">Los como todos</span>
            </div>
          </button>

          <p className="text-gray-400 font-bold text-sm pt-4 pb-2">Otros:</p>

          {/* Grid of options */}
          <div className="grid grid-cols-1 gap-1">
            {foodOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleOption(option.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                  selectedIds.includes(option.id) 
                    ? 'bg-[#F5F5F5] ring-2 ring-primary/20' 
                    : 'bg-[#F5F5F5] hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedIds.includes(option.id) ? 'bg-primary border-primary' : 'border-gray-300 bg-white'
                  }`}>
                    {selectedIds.includes(option.id) && <Check size={16} className="text-white stroke-[3]" />}
                  </div>
                  <span className="font-bold text-text-main">{option.label}</span>
                </div>
                <span className="text-2xl">{option.emoji}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 pb-8">
          <button 
            onClick={() => onNext(selectedIds)}
            className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Siguiente
          </button>
        </div>
      </main>
    </div>
  );
}
