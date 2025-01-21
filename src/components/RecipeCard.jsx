import { motion } from "framer-motion";
import { Heart, ExternalLink, Clock, Users } from "lucide-react";

export default function RecipeCard({ recipe, isFavorite, toggleFavorite }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <img
        src={recipe.image || "/placeholder.svg"}
        alt={recipe.label}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-indigo-900">
            {recipe.label}
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleFavorite}
            className="text-red-500 hover:text-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`} />
          </motion.button>
        </div>
        <p className="text-indigo-600">{recipe.cuisineType.join(", ")}</p>
        <div className="flex items-center space-x-4 text-sm text-indigo-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.totalTime} min</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{recipe.yield} servings</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-indigo-900 mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            {recipe.ingredientLines.slice(0, 5).map((ingredient, index) => (
              <li key={index} className="truncate">
                {ingredient}
              </li>
            ))}
          </ul>
          {recipe.ingredientLines.length > 5 && (
            <p className="text-sm text-indigo-500 mt-1">
              +{recipe.ingredientLines.length - 5} more ingredients
            </p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm font-medium text-indigo-500">
              Health Labels:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {recipe.healthLabels.slice(0, 3).map((label, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded"
                >
                  {label}
                </span>
              ))}
              {recipe.healthLabels.length > 3 && (
                <span className="text-xs text-indigo-500">
                  +{recipe.healthLabels.length - 3} more
                </span>
              )}
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
          >
            Full Recipe
            <ExternalLink className="h-4 w-4 ml-1" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
