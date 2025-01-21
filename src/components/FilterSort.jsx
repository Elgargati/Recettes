import { Filter, SortAsc } from "lucide-react";

export default function FilterSort({
  loading,
  filter,
  setFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex items-center space-x-2">
        <Filter className="h-5 w-5 text-indigo-600" />
        <label htmlFor="filter" className="text-indigo-900 font-medium">
          Filter:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          disabled={loading}
        >
          <option value="all">All</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <SortAsc className="h-5 w-5 text-indigo-600" />
        <label htmlFor="sort" className="text-indigo-900 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 rounded-md border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          disabled={loading}
        >
          <option value="default">Default</option>
          <option value="popular">Most Popular</option>
          <option value="easy">Quickest to Make</option>
        </select>
      </div>
    </div>
  );
}
