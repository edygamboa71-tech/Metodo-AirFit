import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface EducationalStepProps {
  onNext: () => void;
  onBack: () => void;
  progress: number;
}

export default function EducationalStep({ onNext, onBack, progress }: EducationalStepProps) {
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
          initial={{ width: '11%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h1 className="text-[26px] font-bold text-center leading-tight mb-8 text-text-main">
            ¿Sabías que puedes perder hasta <span className="text-primary">7kg en 21 días</span> usando solo tu freidora de aire?
          </h1>

          {/* Comparison Image */}
          <div className="relative w-full aspect-video rounded-[20px] overflow-hidden mb-10 shadow-md border border-gray-100">
            <div className="flex h-full w-full">
              <div className="relative w-1/2 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2070&auto=format&fit=crop" 
                  alt="Traditional frying" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="bg-black/60 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Tradicional</span>
                </div>
              </div>
              <div className="relative w-1/2 h-full border-l-2 border-white">
                <img 
                  src="https://i.imgur.com/fE4CItE.png" 
                  alt="Air frying" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">AirFit™</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[24px] p-8 mb-10">
            <h2 className="text-xl font-bold mb-6 text-text-main">Beneficios del método AirFit™:</h2>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="text-2xl shrink-0">❤️</span>
                <p className="text-text-main font-medium leading-snug">Reduce hasta <span className="font-bold">80% las calorías</span> vs fritura tradicional</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl shrink-0">⏰</span>
                <p className="text-text-main font-medium leading-snug">Ahorra <span className="font-bold">5+ horas semanales</span> de cocina</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl shrink-0">😋</span>
                <p className="text-text-main font-medium leading-snug">Mantiene el <span className="font-bold">sabor y textura</span> crujiente</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl shrink-0">🏃‍♂️</span>
                <p className="text-text-main font-medium leading-snug">Acelera tu metabolismo con <span className="font-bold">déficit placentero</span></p>
              </li>
            </ul>
          </div>

          <button 
            onClick={onNext}
            className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Quiero mi plan personalizado
          </button>
        </motion.div>
      </main>
    </div>
  );
}
