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

// function searchByCategory() {
//   return fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
//   );
// }

function searchByIngredients() {
  return fetch(
    "https://www.www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
  );
}

function searchByLetter() {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
}
export {
  getRandomCocktails,
  getOneCocktail,
  searchByCocktail,
  searchByIngredients,
  searchByLetter,
};
