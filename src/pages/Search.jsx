import React, { useState } from "react";
import item from "../data/e-dairy-30-items-name-image-price.json";
import ItemCard from "../components/ItemCard";

function Search() {
  const [search, setSearch] = useState("");

  const filteredItems = item.filter((itm) =>
    itm.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-emerald-600">Search Your Favorites 🧁</h1>
        <p className="text-gray-600 mt-2">
          Explore dairy products and sweets from our collection.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-xl mx-auto"
      >
        <div className="relative">
          <input
            type="search"
            placeholder="Search sweets, dairy items..."
            className="w-full p-4 pl-12 text-emerald-600 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute left-4 top-4 text-gray-400 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
          </svg>
        </div>
      </form>

      {/* Search Message */}
      {search && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Showing results for "<span className="text-emerald-600">{search}</span>"
          </h2>
        </div>
      )}

      {/* Items Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.length === 0 && search ? (
          <p className="text-center col-span-full text-red-500 text-xl font-semibold">
            No items found 😔
          </p>
        ) : (
          filteredItems.map((data) => (
            <ItemCard key={data.id} itemData={data} />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
