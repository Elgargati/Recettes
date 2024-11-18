import React, { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("calories"); // Critère par défaut
  const [error, setError] = useState(""); // Gestion des erreurs
  const APP_ID = "73b47488";
  const APP_KEY = "cb99a2710fc5f1b98e146db967903b12";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=cake&app_id=73b47488&app_key=cb99a2710fc5f1b98e146db967903b12`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRecipes(data.hits.map((hit) => hit.recipe));
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();

      if (data.hits.length === 0) {
        setError("Aucune recette trouvée pour cette recherche.");
        setRecipes([]);
      } else {
        setError("");
        setRecipes(data.hits.map((hit) => hit.recipe));
      }
    } catch (err) {
      setError(
        "Erreur lors de la récupération des recettes. Veuillez réessayer."
      );
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setError("Veuillez entrer un terme de recherche.");
      return;
    }
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
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen flex flex-col">
      <main className="flex-grow py-8 px-4">
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

          {error && (
            <p className="text-red-600 text-center font-medium mb-4">{error}</p>
          )}

          {recipes.length > 0 && (
            <div className="flex flex-col w-1/4 mb-4">
              <label htmlFor="sort" className="text-gray-700 font-medium mb-2">
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
      </main>
      <Footer /> {/* Intégration du Footer */}
    </div>
  );
};

export default App;
