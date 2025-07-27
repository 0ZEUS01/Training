const trainingPlan = [
  // Day 1: Sunday (Active Rest)
  {
    title: 'Active Rest (Walk + Stretch)',
    desc: '30–45 min brisk walk + 25 min full-body stretch. Start your journey gently and prepare your body for the next 30 days!',
    video: 'https://www.youtube.com/watch?v=tnZ96Y2C28Y',
  },
];

// Pattern for the rest of the week (Mon-Sat)
const weekPattern = [
  {
    title: 'Full Body HIIT',
    desc: '5 rounds: 40s work, 20s rest. Exercises: Jumping Jacks, Push-ups, Bodyweight Squats, Mountain Climbers, Plank.',
    video: 'https://www.youtube.com/watch?v=ml6cT4AZdqI',
  },
  {
    title: 'Upper Body Strength',
    desc: '4 sets: Push-ups (max reps), Tricep Dips (on chair), Plank Shoulder Taps, Rest 1 min between sets.',
    video: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
  },
  {
    title: 'Lower Body & Core',
    desc: '4 sets: Bodyweight Squats, Lunges, Glute Bridges, Leg Raises. 12 reps each, 1 min rest.',
    video: 'https://www.youtube.com/watch?v=2pLT-olgUJs',
  },
  {
    title: 'HIIT Cardio',
    desc: '5 rounds: 30s High Knees, 30s Burpees, 30s Rest.',
    video: 'https://www.youtube.com/watch?v=ml6cT4AZdqI',
  },
  {
    title: 'Core & Abs',
    desc: '3 rounds: Plank (1 min), Russian Twists (20 reps), Bicycle Crunches (20 reps), Leg Raises (15 reps).',
    video: 'https://www.youtube.com/watch?v=AnYl6Nk9GOA',
  },
  {
    title: 'Full Body Strength',
    desc: '4 sets: Push-ups, Squats, Lunges, Plank. 12 reps each, 1 min rest.',
    video: 'https://www.youtube.com/watch?v=UItWltVZZmE',
  },
];

// Fill the rest of the 30 days
for (let i = 1; i < 30; i++) {
  // Every 7th day (Sunday) is active rest
  if (i % 7 === 0) {
    trainingPlan.push({
      title: 'Active Rest (Walk + Stretch)',
      desc: '30–45 min brisk walk + 25 min full-body stretch. Let your body recover and get ready for the next week!',
      video: 'https://www.youtube.com/watch?v=tnZ96Y2C28Y',
    });
  } else {
    // Use weekPattern, cycling through Mon-Sat
    const patternIdx = (i - 1) % 6;
    trainingPlan.push(weekPattern[patternIdx]);
  }
}

function showWorkoutDetails(day) {
  const modal = document.getElementById('workout-details');
  const plan = trainingPlan[day - 1];
  modal.innerHTML = `<div class='modal-content'><button class='close-btn' onclick='closeModal()'>&times;</button><h2>Day ${day}: ${plan.title}</h2><p>${plan.desc}</p><a href='${plan.video}' target='_blank'>Watch Video</a></div>`;
  modal.classList.remove('hidden');
}

const mealPlan = [
  // Week 1 (repeat for simplicity, with some variety)
  {
    meals: [
      {
        name: 'Breakfast: Greek Yogurt + Berries + 10 Almonds',
        calories: 300,
      },
      {
        name: 'Lunch: Grilled Chicken Breast + Mixed Salad (olive oil & lemon)',
        calories: 450,
      },
      {
        name: 'Dinner: Veggie Omelette (2 eggs, spinach, tomato, onion)',
        calories: 300,
      },
    ],
    note: 'Drink plenty of water. Optional: black coffee or tea. Walk + stretch today!'
  },
  {
    meals: [
      {
        name: 'Breakfast: Oatmeal (water, cinnamon, apple slices)',
        calories: 280,
      },
      {
        name: 'Lunch: Tuna Salad (canned tuna in water, greens, cucumber, tomato)',
        calories: 400,
      },
      {
        name: 'Dinner: Cottage Cheese + Sliced Veggies',
        calories: 250,
      },
    ],
    note: 'Add a fruit if hungry.'
  },
  {
    meals: [
      {
        name: 'Breakfast: 2 Boiled Eggs + 1 Banana',
        calories: 250,
      },
      {
        name: 'Lunch: Turkey Wrap (whole wheat, turkey breast, lettuce, tomato, mustard)',
        calories: 400,
      },
      {
        name: 'Dinner: Lentil Soup + Side Salad',
        calories: 300,
      },
    ],
    note: 'No sugary drinks.'
  },
  {
    meals: [
      {
        name: 'Breakfast: Protein Shake (whey or milk, banana, ice)',
        calories: 250,
      },
      {
        name: 'Lunch: Baked Fish + Steamed Veggies',
        calories: 400,
      },
      {
        name: 'Dinner: Chicken Stir Fry (chicken, mixed veggies, soy sauce)',
        calories: 350,
      },
    ],
    note: 'Add a handful of nuts if needed.'
  },
  {
    meals: [
      {
        name: 'Breakfast: Greek Yogurt + 1 Apple',
        calories: 250,
      },
      {
        name: 'Lunch: Egg Salad (2 eggs, greens, tomato, cucumber)',
        calories: 350,
      },
      {
        name: 'Dinner: Grilled Chicken + Steamed Broccoli',
        calories: 350,
      },
    ],
    note: 'Stay hydrated.'
  },
  {
    meals: [
      {
        name: 'Breakfast: Oatmeal + Berries',
        calories: 280,
      },
      {
        name: 'Lunch: Chickpea Salad (chickpeas, tomato, cucumber, parsley, lemon)',
        calories: 350,
      },
      {
        name: 'Dinner: Tuna + Sliced Veggies',
        calories: 250,
      },
    ],
    note: 'Add a boiled egg if hungry.'
  },
  {
    meals: [
      {
        name: 'Breakfast: 2 Boiled Eggs + Tomato',
        calories: 200,
      },
      {
        name: 'Lunch: Grilled Chicken + Quinoa + Veggies',
        calories: 450,
      },
      {
        name: 'Dinner: Greek Yogurt + Berries',
        calories: 200,
      },
    ],
    note: 'Sunday: Walk + stretch, light eating.'
  },
];

// Fill 30 days by repeating the week
while (mealPlan.length < 30) {
  const day = mealPlan.length % 7;
  mealPlan.push(JSON.parse(JSON.stringify(mealPlan[day])));
}

function showMealDetails(day) {
  const modal = document.getElementById('meal-details');
  const plan = mealPlan[day - 1];
  let html = `<div class='modal-content'><button class='close-btn' onclick='closeModal()'>&times;</button><h2>Day ${day} Meals</h2><ul>`;
  plan.meals.forEach(m => {
    html += `<li>${m.name} <span style='color:#888;font-size:0.95em;'>(${m.calories} kcal)</span></li>`;
  });
  html += `</ul><p style='margin-top:10px;'>${plan.note}</p></div>`;
  modal.innerHTML = html;
  modal.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  // Calendar for Training Plan
  const trainingCal = document.getElementById('training-calendar');
  if (trainingCal) {
    trainingCal.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
      const day = document.createElement('div');
      day.className = 'calendar-day';
      day.textContent = `Day ${i}`;
      day.addEventListener('click', () => showWorkoutDetails(i));
      trainingCal.appendChild(day);
    }
  }

  // Calendar for Meal Plan
  const mealCal = document.getElementById('meal-calendar');
  if (mealCal) {
    mealCal.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
      const day = document.createElement('div');
      day.className = 'calendar-day';
      day.textContent = `Day ${i}`;
      day.addEventListener('click', () => showMealDetails(i));
      mealCal.appendChild(day);
    }
  }

  window.closeModal = function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => m.classList.add('hidden'));
  };
}); 