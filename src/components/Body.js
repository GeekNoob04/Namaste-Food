import ResCard from "./ResCard";
import React, { useEffect, useState } from "react";
import { useState } from "react";
const Body = () => {
  const [resData, setResData] = useState([]);

  const callApi = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const apiData = await response.json();
      const fetchedData =
        apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      apiData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setResData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  const filterTopRated = () => {
    const filteredData = resData.filter(
      (restaurant) => parseFloat(restaurant.info.avgRatingString) > 4.5
    );
    setResData(filteredData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* cards */}
        <ResCard resData={resData} />
      </div>
    </div>
  );
};

export default Body;
