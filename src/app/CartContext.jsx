import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("e-dairyCart")) || []
  );

  // ✅ Add item
  const addCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // ✅ Remove item by id (FIXED: was using `cart` instead of `prevCart`)
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Total price calculation
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  localStorage.setItem("e-dairyCart", JSON.stringify(cart));

  return (
    <CartContext.Provider value={{ cart, addCart, removeItem, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

// ✅ Custom hook for using cart
export function useCart() {
  return useContext(CartContext);
}
