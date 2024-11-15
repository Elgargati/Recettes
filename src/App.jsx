import React, { useState } from "react";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("calories"); // Critère par défaut
  const APP_ID = "73b47488";
  const APP_KEY = "cb99a2710fc5f1b98e146db967903b12";

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits.map((hit) => hit.recipe));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  const sortRecipes = (criteria) => {
    setSortBy(criteria);
    const sortedRecipes = [...recipes].sort((a, b) => {
      if (criteria === "calories") {
        return a.calories - b.calories;
      } else if (criteria === "time") {
        return (a.totalTime || Infinity) - (b.totalTime || Infinity);
      }
      return 0;
    });
    setRecipes(sortedRecipes);
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Find Delicious Recipes
        </h1>
        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes..."
            className="border-2 border-gray-400 rounded-lg p-3 w-2/3 lg:w-1/3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white ml-3 px-4 py-3 rounded-lg shadow hover:bg-indigo-500 transition duration-300"
          >
            Search
          </button>
        </form>

        {recipes.length > 0 && (
          <div className="flex justify-end mb-4">
            <label htmlFor="sort" className="mr-2 text-gray-700 font-medium">
              Trier par :
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => sortRecipes(e.target.value)}
              className="border border-gray-400 p-2 rounded-lg"
            >
              <option value="calories">Calories</option>
              <option value="time">Temps de Préparation</option>
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
