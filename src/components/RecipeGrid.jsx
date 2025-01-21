import RecipeCard from "./RecipeCard";
export default function RecipeGrid({
  recipes,
  skeletonCount,
  isLoading,
  favorites,
  toggleFavorite,
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(skeletonCount)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 animate-pulse"
          >
            <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.uri}
          recipe={recipe}
          isFavorite={favorites.some((fav) => fav.uri === recipe.uri)}
          toggleFavorite={() => toggleFavorite(recipe)}
        />
      ))}
    </div>
  );
}
