import ResCard, { withDiscountInfo } from "./ResCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";

const Body2 = () => {
  const [resData, setResData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const ResCardWithDiscount = withDiscountInfo(ResCard);

  // console.log("Body Rendered", filteredRes);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.673373592835524&lng=77.47453518211842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      // console.log("API Response:", json);

      let restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (!restaurants) {
        const cards = json?.data?.cards || [];
        for (const card of cards) {
          restaurants =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restaurants) break;

          restaurants = card?.card?.card?.restaurants;
          if (restaurants) break;

          restaurants = card?.card?.card?.restaurantsList;
          if (restaurants) break;
        }
      }

      // console.log("Restaurants found:", restaurants);

      if (restaurants && restaurants.length > 0) {
        setResData(restaurants);
        setFilteredRes(restaurants);
        setError(null);
      } else {
        setError("Could not find restaurant data in the API response");
        console.error("Restaurants data not found in expected structure", json);
      }
    } catch (error) {
      setError("Error fetching data: " + error.message);
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Offline</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            No Internet Connection
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
            Please check your network and try again.
          </p>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">Error</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
            Could not load restaurants
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500">{error}</p>
          <div className="mt-10">
            <button
              onClick={fetchData}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-white shadow-md p-2 rounded-lg w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => {
              const filtered = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
          onClick={() => {
            const filtered = resData.filter(
              (res) => parseFloat(res.info.avgRatingString) > 4.3
            );
            setFilteredRes(filtered);
          }}
        >
          Top Rated Restaurants ⭐
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRes.length > 0 ? (
          filteredRes.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              className="hover:scale-105 transition transform duration-200"
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <ResCardWithDiscount resData={restaurant} />
              ) : (
                <ResCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">
              No restaurants found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body2;
