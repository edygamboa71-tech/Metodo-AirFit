import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';

interface PredictionStepProps {
  onNext: () => void;
  onBack: () => void;
  progress: number;
  currentStepText: string;
  userData: {
    gender: string | null;
    goals: string[];
    bodyType: string | null;
    aspirationalBody: string | null;
    bodyAreas: string[];
    energyLevel: string | null;
    exerciseFrequency: string | null;
    weightBehavior: string | null;
    satisfactionHistory: string | null;
    methods: string[];
    motivation: string | null;
    height: number;
    weight: number;
    targetWeight: number;
    age: number;
    meals: string | null;
    proteins: string[];
  };
}

export default function PredictionStep({ 
  onNext, 
  onBack, 
  progress,
  currentStepText,
  userData
}: PredictionStepProps) {
  // Generate data based on user's current and target weight
  const startWeight = userData.weight;
  const targetWeight = userData.targetWeight;
  const diff = targetWeight - startWeight;
  const isWeightLoss = diff < 0;
  const isWeightGain = diff > 0;
  const absDiff = Math.abs(diff);
  
  // We'll show a 21-day prediction (3 weeks)
  // Safe rate: 0.5-1kg/week loss, 0.25-0.5kg/week gain
  const weeklyChange = isWeightLoss 
    ? -Math.min(1.5, Math.max(0.5, absDiff / 4)) 
    : isWeightGain 
      ? Math.min(0.75, Math.max(0.25, absDiff / 4))
      : 0;

  const predictedWeight21Days = Number((startWeight + (weeklyChange * 3)).toFixed(1));

  const data = [
    { day: 'Today', weight: startWeight },
    { day: 'Day 7', weight: Number((startWeight + weeklyChange).toFixed(1)) },
    { day: 'Day 14', weight: Number((startWeight + weeklyChange * 2).toFixed(1)) },
    { day: 'Day 21', weight: predictedWeight21Days },
  ];

  // Calculate Y axis domain
  const minY = Math.floor(Math.min(startWeight, predictedWeight21Days) - 2);
  const maxY = Math.ceil(Math.max(startWeight, predictedWeight21Days) + 2);

  // Weight to change
  const weightToChange = Math.abs(userData.weight - userData.targetWeight);
  const weightToChangeLabel = isWeightLoss ? 'reduce' : isWeightGain ? 'gain' : 'maintain';

  // Primary goal
  const primaryGoal = userData.goals[0] || 'Improve your health';

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[600px] h-16 flex items-center px-4 relative bg-white border-b border-gray-100">
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
          initial={{ width: '78%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-[24px] font-bold text-center leading-tight mb-8 text-text-main">
            We predict you will weigh <span className="text-primary">{predictedWeight21Days} kg</span> in just <span className="text-primary">21 days</span>!
          </h1>

          {/* Graph Container */}
          <div className="w-full bg-white rounded-[24px] p-6 mb-8 shadow-sm border border-gray-100 relative h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="33%" stopColor="#F97316" />
                    <stop offset="66%" stopColor="#EAB308" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94A3B8', fontWeight: 600 }}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  domain={[minY, maxY]} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94A3B8', fontWeight: 600 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="url(#lineGradient)" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorWeight)" 
                  animationDuration={2000}
                />
                <ReferenceDot 
                  x="Day 21" 
                  y={predictedWeight21Days} 
                  r={6} 
                  fill="#22C55E" 
                  stroke="#FFFFFF" 
                  strokeWidth={3} 
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Tooltip Meta */}
            <div className="absolute right-4 bottom-[75px] bg-[#22C55E] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg flex items-center gap-1 animate-bounce">
              Goal {predictedWeight21Days} kg
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#22C55E] rotate-45"></div>
            </div>
          </div>

          {/* Personalized Transformation Summary */}
          <div className="w-full bg-white rounded-[24px] p-6 mb-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="text-xl">🚀</span>
              Your 21-Day Plan
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-500">Primary Goal:</span>
                <span className="text-sm font-bold text-text-main">{primaryGoal}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-500">Weight to {weightToChangeLabel}:</span>
                <span className="text-sm font-bold text-primary">
                  {isWeightLoss ? '-' : isWeightGain ? '+' : ''}{weightToChange} kg
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-sm text-gray-500">Focus:</span>
                <span className="text-sm font-bold text-text-main">
                  {userData.bodyAreas.length > 0 ? userData.bodyAreas[0] : 'Full body'}
                </span>
              </div>
            </div>
          </div>

          {/* Credibility Card */}
          <div className="w-full bg-[#E8F5E9] rounded-[20px] p-5 mb-10 flex gap-4 items-start border border-[#C8E6C9]">
            <span className="text-2xl">🎯</span>
            <div className="flex flex-col">
              <h3 className="font-bold text-[#1B5E20] text-base mb-1">Good news!</h3>
              <p className="text-[#2E7D32] text-sm leading-relaxed">
                Based on your motivation level <span className="font-bold">"{userData.motivation || 'high'}"</span> and your metabolic profile, this goal of <span className="font-bold">{predictedWeight21Days} kg</span> is fully achievable in 21 days with AirFit™.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onNext}
            className="w-full h-[64px] bg-primary text-white rounded-[16px] font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Continue
          </button>
        </motion.div>
      </main>
    </div>
  );
}
