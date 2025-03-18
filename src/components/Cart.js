import { useSelector, useDispatch } from "react-redux";
import { CDN_URL } from "../util/constants";
import { removeItem, clearCart } from "../util/cartSlice"; 
import { Link } from "react-router";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total +
          (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Cart ({cartItems.length} items)
            </h1>
            {cartItems.length > 0 && (
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors text-sm"
              >
                Clear Cart
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
              <Link to="/">
                <button className="mt-4 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors">
                  Browse Restaurants
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item?.card?.info?.id}
                    className="py-4 px-4 flex justify-between items-center hover:bg-pink-50 transition-colors rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item?.card?.info?.name}
                      </h3>
                      <p className="text-pink-600 font-medium">
                        ₹
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100}
                      </p>
                      {item?.card?.info?.description && (
                        <p className="text-sm text-gray-500 mt-1 pr-4">
                          {item?.card?.info?.description}
                        </p>
                      )}
                    </div>

                    {item?.card?.info?.imageId && (
                      <div className="ml-4 relative">
                        <div className="h-24 w-24 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={`${CDN_URL}${item?.card?.info?.imageId}`}
                            alt={item?.card?.info?.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <button
                          className="absolute bottom-2 right-2 bg-white text-red-600 p-1 rounded shadow-md text-xs font-medium border border-gray-200"
                          onClick={() => handleRemoveItem(item)}
                        >
                          REMOVE
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount:</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
