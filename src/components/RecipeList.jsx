import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterSort from "./FilterSort";
import RecipeGrid from "./RecipeGrid";

export default function RecipeList({
  recipes,
  loading,
  error,
  favorites,
  toggleFavorite,
}) {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    const applyFilterAndSort = () => {
      setIsFiltering(true);
      setTimeout(() => {
        const filtered = recipes.filter((recipe) => {
          if (filter === "vegetarian")
            return recipe.healthLabels.includes("Vegetarian");
          if (filter === "gluten-free")
            return recipe.healthLabels.includes("Gluten-Free");
          return true;
        });

        const sorted = [...filtered].sort((a, b) => {
          if (sortBy === "popular") return b.yield - a.yield;
          if (sortBy === "easy") return a.totalTime - b.totalTime;
          return 0;
        });

        setFilteredRecipes(sorted);
        setIsFiltering(false);
      }, 500);
    };

    applyFilterAndSort();
  }, [recipes, filter, sortBy]);

  if (error) {
    return (
      <div className="text-red-500 text-center font-semibold">{error}</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FilterSort
        loading={loading}
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <AnimatePresence mode="wait">
        {loading || isFiltering ? (
          <RecipeGrid skeletonCount={6} isLoading={true} />
        ) : (
          <RecipeGrid
            recipes={filteredRecipes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
