import { motion } from 'motion/react';
import { ChevronRight, Globe } from 'lucide-react';
import { Language, translations } from '../translations';

interface LandingProps {
  gender: string | null;
  setGender: (gender: string) => void;
  onNext: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Landing({ gender, setGender, onNext, lang, setLang }: LandingProps) {
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${lang === 'en' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
        >
          <Globe size={14} />
          EN
        </button>
        <button 
          onClick={() => setLang('es')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${lang === 'es' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
        >
          <Globe size={14} />
          ES
        </button>
      </div>

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
              {t.landing.title}
            </h1>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              {t.landing.subtitle}
            </p>

            <div className="mb-8">
              <p className="font-bold mb-4 text-black">{t.landing.selectGender}</p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <button 
                    onClick={() => setGender('male')}
                    className={`w-full h-[56px] rounded-[12px] font-bold transition-all flex flex-col items-center justify-center ${gender === 'male' ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                  >
                    {t.landing.male}
                  </button>
                  <p className="text-[10px] text-center mt-1 text-gray-400">{t.landing.adaptedPlan}</p>
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => setGender('female')}
                    className={`w-full h-[56px] rounded-[12px] font-bold transition-all flex flex-col items-center justify-center ${gender === 'female' ? 'bg-primary text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                  >
                    {t.landing.female}
                  </button>
                  <p className="text-[10px] text-center mt-1 text-gray-400">{t.landing.adaptedPlan}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onNext}
              className={`w-full h-[64px] rounded-[16px] font-bold text-white transition-all flex items-center justify-center gap-2 ${gender ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary/40 cursor-not-allowed'}`}
              disabled={!gender}
            >
              {t.landing.startButton}
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
            <a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p>© 2024 AirFit™. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
