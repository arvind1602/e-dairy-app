import { useNavigate } from "react-router-dom";
import { useCart } from "../app/CartContext";

function Header() {
  const navigate = useNavigate();

  const { cart, totalPrice } = useCart();

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-20 ">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <a
            onClick={() => navigate("/")}
            className="btn btn-ghost text-xl md:text-2xl font-bold text-emerald-600"
          >
            🐄 E-Dairy
          </a>
        </div>

        {/* Search Button */}
        <div className="">
          <button
            onClick={() => navigate("/item-search")}
            className="btn rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-4 py-2 text-sm font-medium"
          >
            🔍 Search
          </button>
        </div>

        {/* Cart & Avatar */}
        <div className="flex items-center gap-4">

          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cart.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-60 bg-white shadow-lg z-10 rounded-md"
            >
              <div className="card-body">
                <span className="text-lg font-semibold">{cart.length} Items</span>
                <span className="text-sm text-gray-600">Subtotal: ₹{totalPrice}</span>
                <div className="card-actions mt-2">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => navigate("/e-dairy-cart")}
                  >
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full bg-gray-100">
                <svg
                  className="w-full h-full text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zM3 18a7 7 0 0114 0H3z"
                  />
                </svg>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a>
                  Profile
                  <span className="badge badge-info">Order Details</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
