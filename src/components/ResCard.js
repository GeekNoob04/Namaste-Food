import { CDN_URL } from "../util/constants";

const ResCard = ({ resData, showDiscountBanner = false }) => {
  const discountInfo = resData?.info?.aggregatedDiscountInfoV3;
  return (
    <div className="w-full h-full overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="res-card">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={
              resData?.info?.cloudinaryImageId
                ? `${CDN_URL}${resData.info.cloudinaryImageId}`
                : "https://via.placeholder.com/150"
            }
            alt={resData?.info?.name || "Restaurant image"}
          />

          {showDiscountBanner && discountInfo && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
              <span className="font-semibold">{discountInfo.header}</span>
              {discountInfo.subHeader && <span> {discountInfo.subHeader}</span>}
            </div>
          )}

          <div className="absolute bottom-10 left-0 p-2">
            <span className="inline-flex items-center px-2 py-1 rounded-lg bg-white text-gray-800 text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {resData?.info?.avgRatingString || "N/A"}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-xl text-gray-800 truncate">
            {resData?.info?.name || "Restaurant Name"}
          </h3>

          <div className="mt-2 flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-sm truncate">
              {resData?.info?.areaName || "Area"}
            </p>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  {resData?.info?.sla?.deliveryTime || "N/A"} min
                </span>
              </div>

              <div className="text-sm font-medium text-gray-800">
                {resData?.info?.costForTwo || "₹200 for two"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withDiscountInfo = (ResCard) => {
  return (props) => {
    return <ResCard {...props} showDiscountBanner={true} />;
  };
};

export default ResCard;
