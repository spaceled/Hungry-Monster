document.getElementById('search-button').addEventListener('click', function() {
    processRecipeInformation(data)
});

// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     for (let i = 0; i < data.meals.length; i++) {
//         const name = data.meals[i];
//         // console.log(name.strMeal)
        
//         // processRecipeInformation(name)
//     }
// });

// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     for (let i = 0; i < data.categories.length; i++) {
//         const category = data.categories[i];
//         console.log(category.strCategory);
//     }
// })

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayMeal(data))

const displayMeal = allMeal => {
    const mealDiv = document.getElementById('show-dishes');
    allMeal.forEach(meal => {
        const createDiv = document.createElement('div');
        createDiv.className = 'allDishes';
        const mealInfo = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strCategoryThumb}">
            <button onclick="displayCountryDetail('${meal.strMeal}')">Details</button>
        `
        createDiv.innerHTML = mealInfo;
        mealDiv.appendChild(createDiv);
    });
}

const displayDetailMeal = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => processRecipeInformation(data))
}

const processRecipeInformation = recipe => {
    const recipeDiv = document.getElementById('show-dishes');
    recipeDiv.innerHTML = `
        <h3>${recipe.strMeal}</h3>
        <img src='${recipe.strCategoryThumb}'>
    `
}