import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface MealsStepProps {
  onSelect: (id: string) => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
}

export default function MealsStep({ 
  onSelect, 
  onBack, 
  progress,
  currentStepText
}: MealsStepProps) {
  const options = [
    { 
      id: '1-meal', 
      title: 'Only 1 meal a day', 
      description: 'Mainly dinner' 
    },
    { 
      id: '2-meals', 
      title: '2 meals a day', 
      description: 'Lunch + dinner' 
    },
    { 
      id: '3-meals', 
      title: '3 full meals', 
      description: 'Breakfast, lunch and dinner' 
    },
    { 
      id: 'all-meals', 
      title: 'All my meals + snacks', 
      description: 'Full nutrition plan' 
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 relative bg-white">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors z-10 flex items-center gap-1"
        >
          <ArrowLeft size={24} className="text-text-main" />
          <span className="text-primary font-bold text-xl tracking-tight">AirFit™</span>
        </button>
        
        <div className="absolute inset-0 flex items-center justify-end px-4 pointer-events-none">
          <span className="text-gray-400 text-sm font-medium">{currentStepText}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-[600px] h-1.5 bg-gray-100 overflow-hidden">
        <motion.div 
          initial={{ width: '81%' }}
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
          className="w-full"
        >
          <h1 className="text-[28px] font-bold text-center leading-tight mb-2 text-text-main">
            How many meals a day would you like to have?
          </h1>
          
          <p className="text-[#D97706] font-medium text-center text-sm mb-10">
            You can change this in settings later
          </p>

          <div className="flex flex-col gap-4">
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSelect(option.id)}
                className="w-full bg-white p-5 rounded-[20px] shadow-sm hover:shadow-md transition-all flex items-center justify-between group text-left border border-transparent hover:border-primary/10"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-text-main">
                    {option.title}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {option.description}
                  </span>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" size={24} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
