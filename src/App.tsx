/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Landing from './components/Landing';
import SocialProof from './components/SocialProof';
import QuizStep from './components/QuizStep';
import EducationalStep from './components/EducationalStep';
import MultiSelectStep from './components/MultiSelectStep';
import VisualSelectionStep from './components/VisualSelectionStep';
import VerticalSelectionStep from './components/VerticalSelectionStep';
import BodyAreaSelectionStep from './components/BodyAreaSelectionStep';
import TestimonialStep from './components/TestimonialStep';
import SocialProofFemale from './components/SocialProofFemale';
import QuizStepFemale from './components/QuizStepFemale';
import EducationalStepFemale from './components/EducationalStepFemale';
import MultiSelectStepFemale from './components/MultiSelectStepFemale';
import VisualSelectionStepFemale from './components/VisualSelectionStepFemale';
import VerticalSelectionStepFemale from './components/VerticalSelectionStepFemale';
import BodyAreaSelectionStepFemale from './components/BodyAreaSelectionStepFemale';
import TestimonialStepFemale from './components/TestimonialStepFemale';
import RadioSelectionStep from './components/RadioSelectionStep';
import ExerciseFrequencyStep from './components/ExerciseFrequencyStep';
import WeightBehaviorStep from './components/WeightBehaviorStep';
import SatisfactionStep from './components/SatisfactionStep';
import MethodsStep from './components/MethodsStep';
import ComparisonStep from './components/ComparisonStep';
import MotivationStep from './components/MotivationStep';
import HeightStep from './components/HeightStep';
import WeightStep from './components/WeightStep';
import TargetWeightStep from './components/TargetWeightStep';
import AgeStep from './components/AgeStep';
import SummaryStep from './components/SummaryStep';
import PredictionStep from './components/PredictionStep';
import MealsStep from './components/MealsStep';
import ChickenPreferenceStep from './components/ChickenPreferenceStep';
import SalmonPreferenceStep from './components/SalmonPreferenceStep';
import PorkChopsPreferenceStep from './components/PorkChopsPreferenceStep';
import ProteinsStep from './components/ProteinsStep';
import PlanCreatedStep from './components/PlanCreatedStep';
import OfferPage from './components/OfferPage';

export default function App() {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<string | null>(null);
  const [userData, setUserData] = useState({
    gender: null as string | null,
    goals: [] as string[],
    bodyType: null as string | null,
    aspirationalBody: null as string | null,
    bodyAreas: [] as string[],
    energyLevel: null as string | null,
    exerciseFrequency: null as string | null,
    weightBehavior: null as string | null,
    satisfactionHistory: null as string | null,
    methods: [] as string[],
    motivation: null as string | null,
    height: 170,
    weight: 70,
    targetWeight: 65,
    age: 30,
    meals: null as string | null,
    chickenPreference: null as string | null,
    salmonPreference: null as string | null,
    porkPreference: null as string | null,
    proteins: [] as string[],
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(0, prev - 1));

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const handleOptionSelect = (option: string) => {
    console.log('Selected:', option);
    if (step === 1) {
      setGender(option);
      updateUserData({ gender: option });
    }
    nextStep();
  };

  const handleMultiSelect = (selected: string[]) => {
    console.log('Selected multiple:', selected);
    updateUserData({ goals: selected });
    nextStep();
  };

  const handleVisualSelect = (id: string) => {
    console.log('Selected body type:', id);
    updateUserData({ bodyType: id });
    nextStep();
  };

  const handleAspirationalSelect = (id: string) => {
    console.log('Selected ideal body:', id);
    updateUserData({ aspirationalBody: id });
    nextStep();
  };

  const handleBodyAreaSelect = (selected: string[]) => {
    console.log('Selected body areas:', selected);
    updateUserData({ bodyAreas: selected });
    nextStep();
  };

  const handleEnergySelect = (id: string) => {
    console.log('Selected energy level:', id);
    updateUserData({ energyLevel: id });
    nextStep();
  };

  const handleExerciseSelect = (id: string) => {
    console.log('Selected exercise frequency:', id);
    updateUserData({ exerciseFrequency: id });
    nextStep();
  };

  const handleWeightBehaviorSelect = (id: string) => {
    console.log('Selected weight behavior:', id);
    updateUserData({ weightBehavior: id });
    nextStep();
  };

  const handleSatisfactionSelect = (id: string) => {
    console.log('Selected satisfaction history:', id);
    updateUserData({ satisfactionHistory: id });
    nextStep();
  };

  const handleMethodsSelect = (selected: string[]) => {
    console.log('Selected methods:', selected);
    updateUserData({ methods: selected });
    nextStep();
  };

  const handleMotivationSelect = (id: string) => {
    console.log('Selected motivation:', id);
    updateUserData({ motivation: id });
    nextStep();
  };

  const handleHeightSelect = (height: number) => {
    console.log('Selected height:', height);
    updateUserData({ height });
    nextStep();
  };

  const handleWeightSelect = (weight: number) => {
    console.log('Selected weight:', weight);
    updateUserData({ weight });
    nextStep();
  };

  const handleTargetWeightSelect = (weight: number) => {
    console.log('Selected target weight:', weight);
    updateUserData({ targetWeight: weight });
    nextStep();
  };

  const handleAgeSelect = (age: number) => {
    console.log('Selected age:', age);
    updateUserData({ age });
    nextStep();
  };

  const handleSummaryNext = () => {
    console.log('Summary completed');
    nextStep();
  };

  const handlePredictionNext = () => {
    console.log('Prediction completed');
    nextStep();
  };

  const handleMealsSelect = (id: string) => {
    console.log('Selected meals:', id);
    updateUserData({ meals: id });
    nextStep();
  };

  const handleChickenSelect = (preference: string) => {
    console.log('Chicken preference:', preference);
    updateUserData({ chickenPreference: preference });
    nextStep();
  };

  const handleSalmonSelect = (preference: string) => {
    console.log('Salmon preference:', preference);
    updateUserData({ salmonPreference: preference });
    nextStep();
  };

  const handlePorkChopsSelect = (preference: string) => {
    console.log('Pork chops preference:', preference);
    updateUserData({ porkPreference: preference });
    nextStep();
  };

  const handleProteinsNext = (selected: string[]) => {
    console.log('Selected proteins:', selected);
    updateUserData({ proteins: selected });
    nextStep();
  };

  const handlePlanCreatedNext = () => {
    console.log('Plan created step completed');
    nextStep();
  };

  // Gender-based options for Aspirational Body
  const femaleAspirationalOptions = [
    { id: 'toned', label: 'Cuerpo tonificado atlético', imageUrl: 'https://i.imgur.com/jkMFKNr.jpeg' },
    { id: 'fit', label: 'Cuerpo fit definido', imageUrl: 'https://i.imgur.com/jo8xO91.jpeg' },
    { id: 'slim', label: 'Cuerpo delgado saludable', imageUrl: 'https://i.imgur.com/dAOVDF0.jpeg' },
    { id: 'strong', label: 'Cuerpo fuerte musculoso', imageUrl: 'https://i.imgur.com/EI77SD8.jpeg' }
  ];

  const maleAspirationalOptions = [
    { id: 'toned', label: 'Cuerpo tonificado atlético', imageUrl: 'https://i.imgur.com/CJ0A2HB.jpeg' },
    { id: 'fit', label: 'Cuerpo fit definido', imageUrl: 'https://i.imgur.com/dwMaTzI.jpeg' },
    { id: 'slim', label: 'Cuerpo delgado saludable', imageUrl: 'https://i.imgur.com/NYEBqU7.jpeg' },
    { id: 'strong', label: 'Cuerpo fuerte musculoso', imageUrl: 'https://i.imgur.com/U0ZWjdb.jpeg' }
  ];

  return (
    <>
      {step === 0 && (
        <Landing 
          gender={gender} 
          setGender={setGender} 
          onNext={nextStep} 
        />
      )}
      {step === 1 && (
        gender === 'female' ? (
          <SocialProofFemale 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        ) : (
          <SocialProof 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )
      )}
      {step === 2 && (
        gender === 'female' ? (
          <QuizStepFemale 
            question="¿Has usado tu freidora de aire para intentar comer más saludable?"
            options={[
              "Sí, pero sin un plan específico",
              "Solo para recetas básicas ocasionalmente",
              "Nunca, solo para comida \"chatarra\" crujiente",
              "No tengo freidora de aire"
            ]}
            currentStep={1}
            totalSteps={27}
            progress={11}
            onSelect={handleOptionSelect}
            onBack={prevStep}
          />
        ) : (
          <QuizStep 
            question="¿Has usado tu freidora de aire para intentar comer más saludable?"
            options={[
              "Sí, pero sin un plan específico",
              "Solo para recetas básicas ocasionalmente",
              "Nunca, solo para comida \"chatarra\" crujiente",
              "No tengo freidora de aire"
            ]}
            currentStep={1}
            totalSteps={27}
            progress={11}
            onSelect={handleOptionSelect}
            onBack={prevStep}
          />
        )
      )}
      {step === 3 && (
        gender === 'female' ? (
          <EducationalStepFemale 
            onNext={nextStep} 
            onBack={prevStep} 
            progress={15}
          />
        ) : (
          <EducationalStep 
            onNext={nextStep} 
            onBack={prevStep} 
            progress={15}
          />
        )
      )}
      {step === 4 && (
        gender === 'female' ? (
          <MultiSelectStepFemale 
            question="¿Cuáles son tus principales objetivos?"
            subtitle="Selecciona todos los que aplican"
            options={[
              "🔥 Perder peso rápidamente",
              "💪 Tonificar mi cuerpo",
              "⏰ Ahorrar tiempo en la cocina",
              "😋 Comer rico sin culpa",
              "🏠 Cocinar más en casa",
              "🩺 Mejorar mi salud general",
              "👗 Que mi ropa me quede mejor"
            ]}
            onNext={handleMultiSelect}
            onBack={prevStep}
            progress={19}
          />
        ) : (
          <MultiSelectStep 
            question="¿Cuáles son tus principales objetivos?"
            subtitle="Selecciona todos los que aplican"
            options={[
              "🔥 Perder peso rápidamente",
              "💪 Tonificar mi cuerpo",
              "⏰ Ahorrar tiempo en la cocina",
              "😋 Comer rico sin culpa",
              "🏠 Cocinar más en casa",
              "🩺 Mejorar mi salud general",
              "👗 Que mi ropa me quede mejor"
            ]}
            onNext={handleMultiSelect}
            onBack={prevStep}
            progress={19}
          />
        )
      )}
      {step === 5 && (
        gender === 'female' ? (
          <VisualSelectionStepFemale 
            title="Elige tu tipo de cuerpo actual"
            options={[
              { id: 'slim', label: 'Cuerpo delgado', imageUrl: 'https://i.imgur.com/dAOVDF0.jpeg' },
              { id: 'normal', label: 'Cuerpo normal', imageUrl: 'https://i.imgur.com/oIADq28.png' },
              { id: 'overweight-light', label: 'Cuerpo con ligero sobrepeso', imageUrl: 'https://i.imgur.com/wWHjZjN.jpeg' },
              { id: 'overweight', label: 'Cuerpo con sobrepeso', imageUrl: 'https://i.imgur.com/8S9bWwu.jpeg' }
            ]}
            onSelect={handleVisualSelect}
            onBack={prevStep}
            progress={22}
          />
        ) : (
          <VisualSelectionStep 
            title="Elige tu tipo de cuerpo actual"
            options={[
              { id: 'slim', label: 'Cuerpo delgado', imageUrl: 'https://i.imgur.com/NYEBqU7.jpeg' },
              { id: 'normal', label: 'Cuerpo normal', imageUrl: 'https://i.imgur.com/DzJVS3t.jpeg' },
              { id: 'overweight-light', label: 'Cuerpo con ligero sobrepeso', imageUrl: 'https://i.imgur.com/HGo8Dxd.jpeg' },
              { id: 'overweight', label: 'Cuerpo con sobrepeso', imageUrl: 'https://i.imgur.com/9ogcdIW.jpeg' }
            ]}
            onSelect={handleVisualSelect}
            onBack={prevStep}
            progress={22}
          />
        )
      )}
      {step === 6 && (
        gender === 'female' ? (
          <VerticalSelectionStepFemale 
            title="Elige el cuerpo que deseas"
            options={femaleAspirationalOptions}
            onSelect={handleAspirationalSelect}
            onBack={prevStep}
            progress={26}
          />
        ) : (
          <VerticalSelectionStep 
            title="Elige el cuerpo que deseas"
            options={maleAspirationalOptions}
            onSelect={handleAspirationalSelect}
            onBack={prevStep}
            progress={26}
          />
        )
      )}
      {step === 7 && (
        gender === 'female' ? (
          <BodyAreaSelectionStepFemale 
            onNext={handleBodyAreaSelect}
            onBack={prevStep}
            progress={30}
            gender={gender}
          />
        ) : (
          <BodyAreaSelectionStep 
            onNext={handleBodyAreaSelect}
            onBack={prevStep}
            progress={30}
            gender={gender as any}
          />
        )
      )}
      {step === 8 && (
        gender === 'female' ? (
          <TestimonialStepFemale 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        ) : (
          <TestimonialStep 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )
      )}
      {step === 9 && (
        <RadioSelectionStep 
          title="¿Cuáles son tus niveles de energía durante el día?"
          currentStepText="10/27"
          options={[
            { id: 'tired', label: 'Siempre cansado/a, necesito cafeína', emoji: '😴' },
            { id: 'low', label: 'Energía baja, especialmente por las tardes', emoji: '🚶‍♀️' },
            { id: 'moderate', label: 'Energía moderada, algunos altibajos', emoji: '💪' },
            { id: 'high', label: 'Energía alta y constante', emoji: '🏠' }
          ]}
          onNext={handleEnergySelect}
          onBack={prevStep}
          progress={37}
        />
      )}
      {step === 10 && (
        <ExerciseFrequencyStep 
          currentStepText="11/27"
          onNext={handleExerciseSelect}
          onBack={prevStep}
          progress={44}
        />
      )}
      {step === 11 && (
        <WeightBehaviorStep 
          currentStepText="12/27"
          onSelect={handleWeightBehaviorSelect}
          onBack={prevStep}
          progress={48}
        />
      )}
      {step === 12 && (
        <SatisfactionStep 
          currentStepText="13/27"
          onSelect={handleSatisfactionSelect}
          onBack={prevStep}
          progress={52}
        />
      )}
      {step === 13 && (
        <MethodsStep 
          currentStepText="14/27"
          onNext={handleMethodsSelect}
          onBack={prevStep}
          progress={55}
        />
      )}
      {step === 14 && (
        <ComparisonStep 
          onNext={nextStep} 
          onBack={prevStep} 
        />
      )}
      {step === 15 && (
        <MotivationStep 
          currentStepText="16/27"
          onSelect={handleMotivationSelect}
          onBack={prevStep}
          progress={63}
        />
      )}
      {step === 16 && (
        <HeightStep 
          currentStepText="17/27"
          onNext={handleHeightSelect}
          onBack={prevStep}
          progress={67}
        />
      )}
      {step === 17 && (
        <WeightStep 
          currentStepText="18/27"
          onNext={handleWeightSelect}
          onBack={prevStep}
          progress={70}
        />
      )}
      {step === 18 && (
        <TargetWeightStep 
          currentStepText="19/27"
          onNext={handleTargetWeightSelect}
          onBack={prevStep}
          progress={74}
        />
      )}
      {step === 19 && (
        <AgeStep 
          currentStepText="20/27"
          onNext={handleAgeSelect}
          onBack={prevStep}
          progress={78}
        />
      )}
      {step === 20 && (
        <SummaryStep 
          onNext={handleSummaryNext}
          onBack={prevStep}
          userData={userData}
        />
      )}
      {step === 21 && (
        <PredictionStep 
          currentStepText="22/27"
          onNext={handlePredictionNext}
          onBack={prevStep}
          progress={81}
          userData={userData}
        />
      )}
      {step === 22 && (
        <MealsStep 
          currentStepText="23/27"
          onSelect={handleMealsSelect}
          onBack={prevStep}
          progress={89}
        />
      )}
      {step === 23 && (
        <ChickenPreferenceStep 
          currentStepText="24/27"
          onSelect={handleChickenSelect}
          onBack={prevStep}
          progress={93}
        />
      )}
      {step === 24 && (
        <SalmonPreferenceStep 
          currentStepText="25/27"
          onSelect={handleSalmonSelect}
          onBack={prevStep}
          progress={93}
        />
      )}
      {step === 25 && (
        <PorkChopsPreferenceStep 
          currentStepText="26/27"
          onSelect={handlePorkChopsSelect}
          onBack={prevStep}
          progress={93}
        />
      )}
      {step === 26 && (
        <ProteinsStep 
          currentStepText="27/27"
          onNext={handleProteinsNext}
          onBack={prevStep}
          progress={100}
        />
      )}
      {step === 27 && (
        <PlanCreatedStep 
          onNext={handlePlanCreatedNext}
        />
      )}
      {step === 28 && (
        <OfferPage userData={userData} />
      )}
      {step > 28 && (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Próximos pasos...</h2>
            <button 
              onClick={prevStep}
              className="text-primary font-bold hover:underline"
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </>
  );
}













