import { useCart } from "../app/CartContext";

function CartModel() {
  const { cart, totalPrice, removeItem } = useCart();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-emerald-600">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 text-lg border p-6 rounded-lg shadow-md">
          Your cart is empty. Add some delicious sweets! 🍬
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-medium text-green-600">
              🧁 Total Items:{" "}
              <span className="font-semibold">{cart.length}</span>
            </p>
            <p className="text-xl font-medium text-green-600">
              ₹ <span className="font-bold">{totalPrice}</span>
            </p>
          </div>

          <div className="grid gap-6">
            {cart.map((item) => (
              <div className="flex flex-col md:flex-row items-center gap-4 border rounded-lg p-4 shadow-md bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-md object-cover border"
                />
                <div className="flex-1 w-full">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">{item.unit}</p>
                  <p className="text-lg font-medium text-gray-700">
                    ₹ {item.price}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition"
                >
                  ❌ Remove
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
