import { useState, useEffect } from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import WelcomeSection from "./components/WelcomeSection";
import NoRecipesMessage from "./components/NoRecipesMessage";

const APP_ID = "73b47488";
const APP_KEY = "cb99a2710fc5f1b98e146db967903b12";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [noRecipesFound, setNoRecipesFound] = useState(false);
  const [searchMade, setSearchMade] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const searchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    setNoRecipesFound(false);
    setSearchMade(true);

    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();
      const foundRecipes = data.hits.map((hit) => hit.recipe);
      setRecipes(foundRecipes);

      if (foundRecipes.length === 0) {
        setNoRecipesFound(true);
      }
    } catch (err) {
      setError("An error occurred while fetching recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (recipe) => {
    const newFavorites = favorites.some((fav) => fav.uri === recipe.uri)
      ? favorites.filter((fav) => fav.uri !== recipe.uri)
      : [...favorites, recipe];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
        <Header onSearch={searchRecipes} loading={loading} />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {!searchMade ? (
            <WelcomeSection />
          ) : noRecipesFound ? (
            <NoRecipesMessage />
          ) : (
            <RecipeList
              recipes={recipes}
              loading={loading}
              error={error}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
