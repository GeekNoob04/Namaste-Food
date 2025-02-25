// import React, { useEffect, useState } from "react";
import { CDN_URL } from "../util/constants";
const ResCard = ({ resData }) => {
  return (
    <div className="res-container">
      {resData.length > 0 ? (
        resData.map((restaurant, index) => (
          <div className="res-card" key={index}>
            <img
              className="res-logo"
              src={
                restaurant?.info?.cloudinaryImageId
                  ? `${CDN_URL}${restaurant.info.cloudinaryImageId}`
                  : "https://via.placeholder.com/150"
              }
              alt="res-image"
            />
            <h3>{restaurant?.info?.name}</h3>
            <h4>{restaurant?.info?.areaName}</h4>
            <h4>{restaurant?.info?.avgRatingString} stars</h4>
            <h4>{restaurant?.info?.costForTwo}</h4>
            <h4>{restaurant?.info?.sla?.deliveryTime} minutes</h4>
          </div>
        ))
      ) : (
        <p>Loading restaurants...</p>
      )}
    </div>
  );
};

export default ResCard;
