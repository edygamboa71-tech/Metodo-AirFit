
export type Language = 'en' | 'es';

export const translations = {
  en: {
    landing: {
      title: "Discover your personalized AirFit™ plan to achieve your ideal body in just 21 days",
      subtitle: "Use your air fryer to lose weight without giving up the crispy flavor you love so much",
      selectGender: "Select your gender:",
      male: "MALE",
      female: "FEMALE",
      adaptedPlan: "Adapted nutritional plan",
      startButton: "Start My Personalized Quiz"
    },
    testimonial: {
      title: "Visible results in just 21 days",
      before: "Before",
      after: "After",
      maleResult: "I already lost 26 lbs!",
      femaleResult: "I already lost 46 lbs!",
      maleQuote: "\"I couldn't believe how easy it was... I lost 26 lbs in 21 days cooking only with my air fryer. Even my wife noticed the difference! Losing weight feels this simple.\"",
      femaleQuote: "\"I couldn't believe how easy it was... I lost 13 lbs in 21 days cooking only with my air fryer. Even my husband noticed the difference! Losing weight feels this simple.\"",
      maleName: "Carlos R., 38 years old",
      femaleName: "Maria G., 34 years old",
      cta: "Continue my evaluation"
    },
    common: {
      next: "Next",
      continue: "Continue",
      back: "Back",
      step: "Step",
      addPhoto: "Add Photo",
      finish: "Finish"
    },
    quiz: {
      airFryerHealthy: "Have you used your air fryer to try to eat healthier?",
      airFryerOptions: [
        "Yes, but without a specific plan",
        "Only for basic recipes occasionally",
        "Never, only for crispy \"junk\" food",
        "I don't have an air fryer"
      ],
      goals: "What are your main goals?",
      goalsSubtitle: "Select all that apply",
      goalsOptions: [
        "🔥 Lose weight quickly",
        "💪 Tone my body",
        "⏰ Save time in the kitchen",
        "😋 Eat delicious without guilt",
        "🏠 Cook more at home",
        "🩺 Improve my general health",
        "👗 Make my clothes fit better"
      ],
      energy: "What are your energy levels during the day?",
      energyOptions: [
        { id: 'tired', label: 'Always tired, I need caffeine', emoji: '😴' },
        { id: 'low', label: 'Low energy, especially in the afternoons', emoji: '🚶‍♀️' },
        { id: 'moderate', label: 'Moderate energy, some ups and downs', emoji: '💪' },
        { id: 'high', label: 'High and constant energy', emoji: '🏠' }
      ]
    },
    offer: {
      checkoutUrl: "https://pay.hotmart.com/G105324718N?checkoutMode=10", // English Checkout
      pixelId: "1430488458847385" // English Pixel
    },
    analysis: {
      messages: [
        "Analyzing metabolic profile based on age and weight...",
        "Crossing data with our AirFit™ recipe database...",
        "Optimizing cooking times for your air fryer...",
        "Generating 21-day result simulation...",
        "Analysis completed successfully!"
      ],
      finalText: "Based on the analysis of your age, weight, and height data, we have created a real simulation and an optimized nutrition plan using exclusively your air fryer.",
      continue: "CONTINUE"
    }
  },
  es: {
    landing: {
      title: "Descubre tu plan AirFit™ personalizado para lograr tu cuerpo ideal en solo 21 días",
      subtitle: "Usa tu freidora de aire para perder peso sin renunciar al sabor crujiente que tanto amas",
      selectGender: "Selecciona tu género:",
      male: "HOMBRE",
      female: "MUJER",
      adaptedPlan: "Plan nutricional adaptado",
      startButton: "Comenzar Mi Quiz Personalizado"
    },
    testimonial: {
      title: "Resultados visibles en solo 21 días",
      before: "Antes",
      after: "Después",
      maleResult: "¡Ya bajé 12 kg!",
      femaleResult: "¡Ya bajé 21 kg!",
      maleQuote: "\"No podía creer lo fácil que era... perdí 12kg en 21 días cocinando solo con mi freidora de aire. ¡Incluso mi esposa notó la diferencia! Perder peso así se siente de simple.\"",
      femaleQuote: "\"No podía creer lo fácil que era... perdí 6kg en 21 días cocinando solo con mi freidora de aire. ¡Incluso mi esposo notó la diferencia! Perder peso se así siente de simple.\"",
      maleName: "Carlos R., 38 años",
      femaleName: "María G., 34 años",
      cta: "Continuar mi evaluación"
    },
    common: {
      next: "Siguiente",
      continue: "Continuar",
      back: "Atrás",
      step: "Paso",
      addPhoto: "Agregar Foto",
      finish: "Finalizar"
    },
    quiz: {
      airFryerHealthy: "¿Has usado tu freidora de aire para intentar comer más saludable?",
      airFryerOptions: [
        "Sí, pero sin un plan específico",
        "Solo para recetas básicas ocasionalmente",
        "Nunca, solo para comida \"chatarra\" crujiente",
        "No tengo freidora de aire"
      ],
      goals: "¿Cuáles son tus objetivos principales?",
      goalsSubtitle: "Selecciona todos los que apliquen",
      goalsOptions: [
        "🔥 Perder peso rápidamente",
        "💪 Tonificar mi cuerpo",
        "⏰ Ahorrar tiempo en la cocina",
        "😋 Comer delicioso sin culpa",
        "🏠 Cocinar más en casa",
        "🩺 Mejorar mi salud general",
        "👗 Que mi ropa me quede mejor"
      ],
      energy: "¿Cuáles son tus niveles de energía durante el día?",
      energyOptions: [
        { id: 'tired', label: 'Siempre cansado, necesito cafeína', emoji: '😴' },
        { id: 'low', label: 'Energía baja, especialmente por las tardes', emoji: '🚶‍♀️' },
        { id: 'moderate', label: 'Energía moderada, algunos altibajos', emoji: '💪' },
        { id: 'high', label: 'Energía alta y constante', emoji: '🏠' }
      ]
    },
    offer: {
      checkoutUrl: "https://pay.hotmart.com/I105199504V?checkoutMode=10", // Spanish Checkout (Update later)
      pixelId: "PIXEL_ID_ES" // Placeholder for Spanish Pixel
    },
    analysis: {
      messages: [
        "Analizando perfil metabólico según edad y peso...",
        "Cruzando datos con nuestra base de recetas AirFit™...",
        "Optimizando tiempos de cocción para tu freidora de aire...",
        "Generando simulación de resultados a 21 días...",
        "¡Análisis completado con éxito!"
      ],
      finalText: "Según el análisis de tus datos de edad, peso y talla, hemos creado una simulación real y un plan de nutrición optimizado usando exclusivamente tu freidora de aire.",
      continue: "CONTINUAR"
    }
  }
};
