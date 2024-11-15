import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src={recipe.image}
        alt={recipe.label}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {recipe.label}
        </h3>
        <ul className="text-sm text-gray-600 space-y-1">
          {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-2">
          <strong>Calories:</strong> {Math.round(recipe.calories)}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Temps de préparation:</strong>{" "}
          {recipe.totalTime ? `${recipe.totalTime} min` : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
