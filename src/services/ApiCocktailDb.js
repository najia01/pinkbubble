function getRandomCocktails() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
}

function getOneCocktail(idDrink) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink
  );
}

function searchByCocktail(searchText) {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  return fetch(apiUrl);
}

function getCategory() {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
}

function CocktailByCategory(category) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
    category
  )}`;
  return fetch(url);
}

function searchByIngredients() {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
}

function getIngredientByName(ingredientName) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`;
  return fetch(url);
}

function searchByLetter(letter) {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  return fetch(apiUrl);
}

export {
  getRandomCocktails,
  getOneCocktail,
  searchByCocktail,
  searchByIngredients,
  searchByLetter,
  getIngredientByName,
  getCategory,
  CocktailByCategory,
};
