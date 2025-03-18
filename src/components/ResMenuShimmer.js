import React from "react";

const ResMenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Restaurant Header Shimmer */}
        <div className="relative">
          <div className="h-48 w-full bg-gray-200"></div>
          <div className="p-6 absolute bottom-0">
            <div className="h-8 w-64 bg-gray-200 rounded-md"></div>
            <div className="h-5 w-48 bg-gray-200 rounded-md mt-2"></div>
          </div>
        </div>

        {/* Menu Section Shimmer */}
        <div className="p-6">
          {/* Menu Title */}
          <div className="flex items-center mb-6">
            <div className="h-7 w-7 rounded-full bg-gray-200 mr-2"></div>
            <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
          </div>

          {/* Menu Categories */}
          <div className="space-y-4">
            {/* Category 1 */}
            <CategoryShimmer />

            {/* Category 2 */}
            <CategoryShimmer />

            {/* Category 3 */}
            <CategoryShimmer />
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Shimmer Component
const CategoryShimmer = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Category Header */}
      <div className="p-4 bg-gray-50 flex justify-between items-center">
        <div>
          <div className="h-6 w-36 bg-gray-200 rounded-md"></div>
          <div className="h-4 w-20 bg-gray-200 rounded-md mt-2"></div>
        </div>
        <div className="h-5 w-5 rounded-full bg-gray-200"></div>
      </div>

      {/* Category Items */}
      <div className="divide-y divide-gray-200">
        <MenuItemShimmer />
        <MenuItemShimmer />
        <MenuItemShimmer />
      </div>
    </div>
  );
};

// Menu Item Shimmer Component
const MenuItemShimmer = () => {
  return (
    <div className="py-4 px-4 flex justify-between items-center">
      <div className="flex-1">
        <div className="h-6 w-40 bg-gray-200 rounded-md"></div>
        <div className="h-5 w-16 bg-gray-200 rounded-md mt-2"></div>
        <div className="h-4 w-full max-w-md bg-gray-200 rounded-md mt-3"></div>
        <div className="h-4 w-3/4 max-w-sm bg-gray-200 rounded-md mt-2"></div>
      </div>
      <div className="ml-4">
        <div className="h-24 w-24 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ResMenuShimmer;
