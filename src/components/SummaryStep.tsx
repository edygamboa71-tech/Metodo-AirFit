import { motion } from 'motion/react';
import { ArrowLeft, Target, Zap, ChevronRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface SummaryStepProps {
  onNext: () => void;
  onBack: () => void;
  lang: Language;
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

export default function SummaryStep({ 
  onNext, 
  onBack, 
  lang,
  userData 
}: SummaryStepProps) {
  const t = translations[lang];
  
  // Calculate IMC
  const heightInMeters = userData.height / 100;
  const imcValue = Number((userData.weight / (heightInMeters * heightInMeters)).toFixed(1));
  
  // Calculate position on scale (approximate)
  const minImc = 15;
  const maxImc = 40;
  const position = Math.min(Math.max(((imcValue - minImc) / (maxImc - minImc)) * 100, 0), 100);

  // Estimate Body Fat %
  const genderValue = userData.gender === 'male' ? 1 : 0;
  const bodyFat = Number(((1.20 * imcValue) + (0.23 * userData.age) - (10.8 * genderValue) - 5.4).toFixed(1));

  // Metabolism based on exercise frequency
  const metabolism = t.steps.summary.metabolismValues[userData.exerciseFrequency as keyof typeof t.steps.summary.metabolismValues] || t.steps.summary.metabolismValues['1-2'];

  // Weight goal calculation
  const weightDiff = userData.targetWeight - userData.weight;
  const isWeightLoss = weightDiff < 0;
  const isWeightGain = weightDiff > 0;
  const absWeightDiff = Math.abs(weightDiff);
  
  const goalLabel = isWeightLoss 
    ? t.steps.summary.goalsLabels.lose 
    : isWeightGain 
      ? t.steps.summary.goalsLabels.gain 
      : t.steps.summary.goalsLabels.maintain;

  // Specific Calculations
  const waterIntake = (userData.weight * 0.035).toFixed(1);
  const bmr = (10 * userData.weight) + (6.25 * userData.height) - (5 * userData.age) + (userData.gender === 'male' ? 5 : -161);
  const activityFactors: Record<string, number> = {
    'none': 1.2,
    '1-2': 1.375,
    '3-5': 1.55,
    '6+': 1.725
  };
  const factor = activityFactors[userData.exerciseFrequency || 'none'] || 1.375;
  const maintenanceCalories = Math.round(bmr * factor);
  const targetCalories = isWeightLoss ? maintenanceCalories - 500 : isWeightGain ? maintenanceCalories + 300 : maintenanceCalories;
  const daysToGoal = 21;

  // 21-Day Prediction
  const weightChange21Days = isWeightLoss ? -2.5 : isWeightGain ? 1.2 : 0;
  const predictedWeight21Days = Number((userData.weight + weightChange21Days).toFixed(1));

  // Determine IMC category and message based on goal
  let imcCategory = t.steps.summary.bmiCategories.normal;
  let imcColor = "text-green-500";
  let imcMessage = "";

  if (imcValue < 18.5) {
    imcCategory = t.steps.summary.bmiCategories.underweight;
    imcColor = "text-blue-400";
    imcMessage = isWeightGain 
      ? t.steps.summary.bmiMessages.underweightGain.replace('{diff}', absWeightDiff.toString()).replace('{days}', daysToGoal.toString())
      : t.steps.summary.bmiMessages.underweightOther;
  } else if (imcValue >= 18.5 && imcValue < 25) {
    imcCategory = t.steps.summary.bmiCategories.normal;
    imcColor = "text-green-500";
    imcMessage = isWeightLoss
      ? t.steps.summary.bmiMessages.normalLoss.replace('{diff}', absWeightDiff.toString()).replace('{days}', daysToGoal.toString())
      : isWeightGain
        ? t.steps.summary.bmiMessages.normalGain.replace('{diff}', absWeightDiff.toString()).replace('{days}', daysToGoal.toString())
        : t.steps.summary.bmiMessages.normalOther;
  } else if (imcValue >= 25 && imcValue < 30) {
    imcCategory = t.steps.summary.bmiCategories.overweight;
    imcColor = "text-orange-500";
    imcMessage = isWeightLoss
      ? t.steps.summary.bmiMessages.overweightLoss.replace('{diff}', absWeightDiff.toString()).replace('{days}', daysToGoal.toString())
      : t.steps.summary.bmiMessages.overweightOther;
  } else if (imcValue >= 30) {
    imcCategory = t.steps.summary.bmiCategories.obesity;
    imcColor = "text-red-500";
    imcMessage = t.steps.summary.bmiMessages.obesity.replace('{days}', daysToGoal.toString());
  }

  // Personalized Prediction Message
  const predictionMessage = isWeightLoss 
    ? t.steps.summary.predictionMessages.loss
        .replace('{energy}', userData.energyLevel || t.steps.summary.notDefined)
        .replace('{areas}', userData.bodyAreas.length > 0 ? userData.bodyAreas.join(', ') : t.steps.summary.wholeBody)
        .replace('{weight}', predictedWeight21Days.toString())
    : isWeightGain
      ? t.steps.summary.predictionMessages.gain
          .replace('{goal}', userData.goals.length > 0 ? userData.goals[0] : t.steps.summary.notSelected)
          .replace('{weight}', predictedWeight21Days.toString())
      : t.steps.summary.predictionMessages.maintain;


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
          <span className="text-gray-400 text-sm font-medium">{t.common.step} {t.steps.summary.summaryLabel}</span>
        </div>
      </header>

      <main className="w-full max-w-[600px] px-6 py-10 flex flex-col items-center flex-grow overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <h1 className="text-[28px] font-bold text-center leading-tight mb-2 text-text-main">
            {t.steps.summary.title}
          </h1>
          <p className="text-gray-500 text-center mb-8">
            {t.steps.summary.subtitle}
          </p>

          {/* Profile Card */}
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center gap-6 mb-8">
              <div>
                <h2 className="text-xl font-bold text-text-main mb-1">{t.steps.summary.personalAnalysis}</h2>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {userData.age} {t.steps.summary.ageLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">{t.steps.summary.bmiLabel}</span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl font-black ${imcColor}`}>{imcValue}</span>
                  <span className={`text-[10px] font-bold ${imcColor} uppercase`}>{imcCategory}</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">{t.steps.summary.fatLabel}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-text-main">{bodyFat}%</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">{t.steps.summary.metabolismLabel}</span>
                <span className="text-sm font-bold text-text-main block truncate">{metabolism}</span>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 block tracking-wider">{t.steps.summary.goalLabel}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-primary truncate block w-full">
                    {goalLabel}
                  </span>
                  {absWeightDiff > 0 && (
                    <span className="text-[10px] font-bold text-primary/70 uppercase">
                      {absWeightDiff} kg
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-sm text-text-main leading-relaxed italic">
                "{imcMessage}"
              </p>
            </div>
          </div>

          {/* Prediction Card */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[24px] p-6 shadow-lg mb-6 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap size={80} />
            </div>
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Zap size={20} />
              {t.steps.summary.predictionTitle}
            </h3>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              {predictionMessage}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-grow h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4 rounded-full" />
              </div>
              <span className="text-xs font-bold">75% {t.steps.summary.probability}</span>
            </div>
          </div>

          {/* New Specific Data Section */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">{t.steps.summary.waterLabel}</span>
              <span className="text-lg font-black text-blue-500">{waterIntake}L</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">{t.steps.summary.caloriesLabel}</span>
              <span className="text-lg font-black text-orange-500">{targetCalories}</span>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">{t.steps.summary.timeLabel}</span>
              <span className="text-lg font-black text-primary">{daysToGoal} {t.steps.summary.days}</span>
            </div>
          </div>

          {/* Goals & Situation */}
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-text-main mb-4 flex items-center gap-2">
                <Target size={20} className="text-primary" />
                {t.steps.summary.yourGoals}
              </h3>
              <div className="flex flex-wrap gap-2">
                {userData.goals.length > 0 ? (
                  userData.goals.map((goal, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-600 border border-gray-100">
                      {goal}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400 italic">{t.steps.summary.notSelected}</span>
                )}
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-text-main mb-4 flex items-center gap-2">
                <Zap size={20} className="text-primary" />
                {t.steps.summary.currentSituation}
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">{t.steps.summary.energyLevel}:</span>
                  <span className="font-bold text-text-main capitalize">
                    {t.quiz.energyOptions.find(o => o.id === userData.energyLevel)?.label || userData.energyLevel || t.steps.summary.notDefined}
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">{t.steps.summary.physicalActivity}:</span>
                  <span className="font-bold text-text-main">{metabolism}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">{t.steps.summary.areasToWork}:</span>
                  <span className="font-bold text-text-main text-right ml-4">
                    {userData.bodyAreas.length > 0 
                      ? userData.bodyAreas.map(id => t.steps.bodyAreas.areas.find(a => a.id === id)?.label || id).join(', ') 
                      : t.steps.summary.wholeBody}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-primary text-white h-16 rounded-full font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
          >
            {t.steps.summary.cta}
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </main>
    </div>
  );
}
