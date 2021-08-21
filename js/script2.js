fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
.then(response => response.json())
.then(data => console.log(data))