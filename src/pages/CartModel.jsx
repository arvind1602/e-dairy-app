import React from "react";
import { useState } from "react";

function CartModel() {
  const [cart, setCart] = useState([
    { id: 1, name: "Milk", price: 3.5, quantity: 2 },
    { id: 2, name: "Cheese", price: 5.0, quantity: 1 },
    { id: 3, name: "Butter", price: 4.25, quantity: 3 },
  ]);

  // Calculate total items and total price
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <p className="text-lg mb-4 font-semibold">
            Total Items: {totalItems} | Total Price: ${totalPrice.toFixed(2)}
          </p>

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-md shadow"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Price: ${item.price.toFixed(2)} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CartModel;
