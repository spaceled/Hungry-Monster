
document.getElementById('search-button').addEventListener('click', function() {
    const searchValue = document.getElementById('search-value').value;
    displayIngredientDetails()
});


fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
.then(response => response.json())
.then(data => displayRecipe(data))


const displayRecipe = recipe => {
    const dishesDiv = document.getElementById('show-dishes');
    for (const key in recipe) {
        if (Object.hasOwnProperty.call(recipe, key)) {
            const recipeName = recipe[key];
            recipeName.forEach(name => {
                const recipeDiv = document.createElement('div');
                recipeDiv.className = 'cardDisplay';
        
                const recipeInfo = `
                    <img src="${name.strMealThumb}">
                    <h3 class="mt-2">${name.strMeal}</h3>
                `
                recipeDiv.innerHTML = recipeInfo;
                dishesDiv.appendChild(recipeDiv)
            });
        }
    } 
}

const displayIngredientDetails = ingredientName => {;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showIngredientList(data))          
}

const showIngredientList = ingredient => {
    const showRecipe = document.getElementById('show-recipe');
    ingredient.forEach(list => {
        console.log('List: ', list)
        const recipeUL = document.createElement('ul');
        const ingredientInfo = `
            <li>${list.strIngredient1}</li>
        `;
        recipeUL.innerHTML = ingredientInfo;
        showRecipe.appendChild(recipeUL)
    });
}