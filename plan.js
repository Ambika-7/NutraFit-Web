document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for the meal plan
    const meals = {
        'strong': [
            { name: 'Breakfast', food: 'Oatmeal with fruits and nuts' },
            { name: 'Lunch', food: 'Grilled chicken with quinoa and vegetables' },
            { name: 'Dinner', food: 'Salmon with sweet potato and broccoli' }
        ],
        'medium': [
            { name: 'Breakfast', food: 'Whole grain toast with avocado' },
            { name: 'Lunch', food: 'Turkey sandwich with salad' },
            { name: 'Dinner', food: 'Pasta with tomato sauce and lean protein' }
        ],
        'vegan': [
            { name: 'Breakfast', food: 'Smoothie with plant-based protein powder' },
            { name: 'Lunch', food: 'Chickpea and vegetable stir-fry' },
            { name: 'Dinner', food: 'Quinoa bowl with mixed vegetables' }
        ]
    };

    // Function to create meal plan items dynamically
    function createMealPlanItem(meal) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${meal.name}:</strong> ${meal.food}`;
        return listItem;
    }

    // Function to generate the meal plan based on weight
    function generateMealPlan(weight) {
        let mealList = [];

        if (weight < 60) {
            mealList = meals['strong'];
        } else if (weight >= 60 && weight <= 90) {
            mealList = meals['medium'];
        } else {
            mealList = meals['vegan'];
        }

        return mealList;
    }

    // Handle form submission
    const weightForm = document.getElementById('weight-form');
    const mealListContainer = document.getElementById('meal-list');

    weightForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const weightInput = document.getElementById('weight');
        const userWeight = parseFloat(weightInput.value);

        // Check if the input is a valid number
        if (!isNaN(userWeight)) {
            const userMealPlan = generateMealPlan(userWeight);

            // Clear existing meal plan
            mealListContainer.innerHTML = '';

            // Populate the meal plan list
            userMealPlan.forEach(meal => {
                mealListContainer.appendChild(createMealPlanItem(meal));
            });
        } else {
            alert('Please enter a valid weight.');
        }
    });
});
