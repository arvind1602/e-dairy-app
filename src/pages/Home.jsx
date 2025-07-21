import React from "react";
import HomePrompt from "../components/HomePrompt";
import ItemCard from "../components/ItemCard";
import items from "../data/e-dairy-30-items-name-image-price.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="pt-32 px-4 sm:px-8 bg-gradient-to-br from-yellow-50 to-emerald-50 min-h-screen">
        {/* Animated Welcome Section */}
        <div className="text-center animate-fade-in-up mb-10">
          <h1 className="text-5xl font-extrabold text-emerald-700 mb-4">
            Welcome to <span className="text-orange-500">E-Dairy 🐄</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Order your favorite dairy products and sweets from the comfort of
            your home.
            <br /> Fresh, Fast, and Flavorful!
          </p>
          <p className="mt-4 text-gray-500 italic">
            👇 Scroll to explore delicious items
          </p>
        </div>

        {/* Animated Item Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fade-in-up">
          {items.slice(0, 8).map((item) => (
            <ItemCard key={item.id} itemData={item} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
