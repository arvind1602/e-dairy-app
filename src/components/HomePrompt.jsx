import React from "react";

const HomePrompt = () => {
  return (
    <div className="text-center mt-25 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-emerald-600 mb-4">
        Welcome to <span className="text-orange-500">E-Dairy 🐄</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        Order your favorite dairy products and sweets fresh from home.
        <br className="hidden sm:block" />
        Browse, book, and enjoy — all in just a few clicks!
      </p>
      <p className="text-base text-gray-500 italic">
        👇 Start exploring delicious items below!
      </p>
    </div>
  );
};

export default HomePrompt;
