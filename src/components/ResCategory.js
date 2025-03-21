import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlice";
import { CDN_URL } from "../util/constants";

const ResCategory = ({ category, isOpen, onToggle }) => {
  if (!category) return null;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
        onClick={onToggle}
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {category.title}
          </h3>
          <p className="text-sm text-gray-500">
            {category.itemCards?.length || 0} items
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="divide-y divide-gray-200">
          {category.itemCards && category.itemCards.length > 0 ? (
            category.itemCards.map((item) => (
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
                      className="absolute bottom-2 right-2 bg-white text-green-600 p-1 rounded shadow-md text-xs font-medium border border-gray-200"
                      onClick={() => handleAddItem(item)}
                    >
                      ADD
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">
              No items available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ResCategory;
