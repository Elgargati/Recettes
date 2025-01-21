import { ChefHat } from "lucide-react";

export default function NoRecipesMessage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-md w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
      <ChefHat className="w-16 h-16 text-red-500 mb-4" />
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-900 mb-2">
        No Recipes Found
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-red-600 mb-4">
        We couldn't find any recipes matching your criteria.
      </p>
    </div>
  );
}
