import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Search from "./pages/Search";
import CartModel from "./pages/CartModel";
import CartContextProvider from "./app/CartContext";

import ItemCard from "./components/ItemCard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <CartContextProvider>
       <Outlet/>
      </CartContextProvider>
    </>
  );
}

export default App;
