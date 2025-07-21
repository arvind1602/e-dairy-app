import React from "react";
import item from "../data/e-dairy-30-items-name-image-price.json";
import ItemCard from "../components/ItemCard";

function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center center p-4 text-2xl font-bold text-shadow-cyan-300 mt-20">
        <h1>Welcome to E-Dairy</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center ">
        {item.map((data) => (
          <ItemCard key = {data.id} itemData={data} />
        ))}
      </div>
    </>
  );
}

export default Home;
