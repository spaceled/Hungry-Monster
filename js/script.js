fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
.then(response => response.json())
.then(data => displayRecipe(data))


const displayRecipe = recipe => {
    const dishesDiv = document.getElementById('show-dishes');
    console.log(recipe)
    for (const key in recipe) {
        if (Object.hasOwnProperty.call(recipe, key)) {
            const recipeName = recipe[key];
            recipeName.forEach(name => {
                const recipeDiv = document.createElement('div');
                recipeDiv.className = 'cardDisplay';
        
                const recipeInfo = `
                    <h3>${name.strMeal}</h3>
                `
                recipeDiv.innerHTML = recipeInfo;
                dishesDiv.appendChild(recipeDiv)
            });
        }
    } 
}