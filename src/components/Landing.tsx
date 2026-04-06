import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface LandingProps {
  gender: string | null;
  setGender: (gender: string) => void;
  onNext: () => void;
}

export default function Landing({ gender, setGender, onNext }: LandingProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content: 50/50 Split */}
      <main className="flex-grow flex flex-col md:flex-row">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center max-w-[800px] mx-auto md:mx-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <span className="text-primary font-bold text-2xl tracking-tight">AirFit™</span>
            </div>

            <h1 className="text-[32px] md:text-[40px] font-black leading-tight text-black mb-6">
              Descubre tu plan personalizado AirFit™ para conseguir tu cuerpo ideal en solo 21 días
            </h1>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Usa tu freidora de aire para perder peso sin renunciar al sabor crujiente que tanto amas
            </p>

            <div className="mb-8">
              <p className="font-bold mb-4 text-black">Selecciona tu género:</p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <button 
                    onClick={() => setGender('male')}
                    className={`w-full h-[56px] rounded-[12px] font-bold transition-all flex flex-col items-center justify-center ${gender === 'male' ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                  >
                    HOMBRE
                  </button>
                  <p className="text-[10px] text-center mt-1 text-gray-400">Plan nutricional adaptado</p>
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => setGender('female')}
                    className={`w-full h-[56px] rounded-[12px] font-bold transition-all flex flex-col items-center justify-center ${gender === 'female' ? 'bg-primary text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                  >
                    MUJER
                  </button>
                  <p className="text-[10px] text-center mt-1 text-gray-400">Plan nutricional adaptado</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onNext}
              className={`w-full h-[64px] rounded-[16px] font-bold text-white transition-all flex items-center justify-center gap-2 ${gender ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary/40 cursor-not-allowed'}`}
              disabled={!gender}
            >
              Comenzar Mi Quiz Personalizado
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden bg-gray-50">
          <img 
            src="https://i.imgur.com/MfvysxC.png" 
            alt="AirFit Funnel" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-400">
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <p>© 2024 AirFit™. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
