import { motion } from 'motion/react';

interface PlanCreatedStepProps {
  onNext: () => void;
}

export default function PlanCreatedStep({ onNext }: PlanCreatedStepProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center">
      {/* Header */}
      <header className="fixed top-0 w-full max-w-[600px] h-16 flex items-center justify-center bg-transparent">
        <span className="text-primary font-bold text-2xl tracking-tight">AirFit™</span>
      </header>

      <main className="w-full max-w-[600px] px-6 flex flex-col items-center justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Central Card */}
          <div className="w-full bg-[#E8E8E8] rounded-[20px] p-10 flex flex-col items-center text-center shadow-sm mb-8">
            <h1 className="text-xl font-bold text-black leading-tight mb-6">
              Basándonos en tus preferencias,<br />hemos creado
            </h1>
            
            <span className="text-[60px] font-black text-primary leading-none mb-2">
              1000+
            </span>
            
            <h2 className="text-lg font-bold text-black mb-6">
              Combinaciones de comidas
            </h2>
            
            <p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
              que se adaptan perfectamente a tu freidora de aire y te ayudará a alcanzar tu peso ideal en solo 21 días
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onNext}
            className="w-full h-[64px] bg-primary text-white rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Continuar
          </button>
        </motion.div>
      </main>
    </div>
  );
}
