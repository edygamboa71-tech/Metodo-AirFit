import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface VisualOption {
  id: string;
  label: string;
  imageUrl: string;
}

interface VisualSelectionStepProps {
  title: string;
  options: VisualOption[];
  onSelect: (id: string) => void;
  onBack: () => void;
  progress: number;
}

export default function VisualSelectionStep({ 
  title, 
  options, 
  onSelect, 
  onBack, 
  progress 
}: VisualSelectionStepProps) {
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
          initial={{ width: '19%' }}
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
            {title}
          </h1>

          <div className="grid grid-cols-2 gap-4 w-full">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className="group flex flex-col bg-[#F5F5F5] rounded-[24px] overflow-hidden border-2 border-transparent hover:border-primary/30 active:border-primary transition-all shadow-sm hover:shadow-md"
              >
                {/* Photo Slot (Casilla) */}
                <div className="aspect-[4/5] w-full bg-gray-200 relative overflow-hidden">
                  {option.imageUrl ? (
                    <img 
                      src={option.imageUrl} 
                      alt={option.label} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-xs font-medium">Add Photo</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Label */}
                <div className="p-4 text-center">
                  <span className="text-text-main font-bold text-sm md:text-base leading-tight block">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
