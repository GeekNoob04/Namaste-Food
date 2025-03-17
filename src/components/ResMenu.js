// import { useParams } from "react-router";
// import useResMenu from "../util/useResMenu";
// import { CDN_URL } from "../util/constants";
// import Shimmer from "./Shimmer";

// const ResMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useResMenu(resId);

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
//     resInfo?.cards[2]?.card?.card?.info;

//   const { itemCards } =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="relative">
//           {cloudinaryImageId && (
//             <div className="h-48 w-full overflow-hidden">
//               <img
//                 src={`${CDN_URL}${cloudinaryImageId}`}
//                 alt={name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//             </div>
//           )}
//           <div
//             className={`p-6 ${
//               cloudinaryImageId
//                 ? "absolute bottom-0 text-white"
//                 : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
//             }`}
//           >
//             <h1 className="text-3xl font-bold">{name}</h1>
//             <p
//               className={`mt-2 ${
//                 cloudinaryImageId ? "text-gray-200" : "text-pink-100"
//               } font-medium`}
//             >
//               {cuisines?.join(", ")} - {costForTwoMessage}
//             </p>
//           </div>
//         </div>

//         {/* Menu Section */}
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7 mr-2 text-pink-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//               />
//             </svg>
//             Menu
//           </h2>

//           <div className="divide-y divide-gray-200">
//             {itemCards.map((item) => (
//               <div
//                 key={item.card.info.id}
//                 className="py-4 flex justify-between items-center hover:bg-pink-50 transition-colors px-2 rounded-lg"
//               >
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.card.info.name}
//                   </h3>
//                   <p className="text-pink-600 font-medium">
//                     ₹
//                     {item.card.info.price / 100 ||
//                       item.card.info.defaultPrice / 100}
//                   </p>
//                   {item.card.info.description && (
//                     <p className="text-sm text-gray-500 mt-1 pr-4">
//                       {item.card.info.description}
//                     </p>
//                   )}
//                 </div>

//                 {item.card.info.imageId && (
//                   <div className="ml-4 relative">
//                     <div className="h-24 w-24 rounded-lg overflow-hidden shadow-md">
//                       <img
//                         src={`${CDN_URL}${item.card.info.imageId}`}
//                         alt={item.card.info.name}
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                     <button className="absolute bottom-2 right-2 bg-white text-green-600 p-1 rounded shadow-md text-xs font-medium border border-gray-200">
//                       ADD
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResMenu;

import { useParams } from "react-router";
import useResMenu from "../util/useResMenu";
import { CDN_URL } from "../util/constants";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Restaurant Header with Image */}
        <div className="relative">
          {cloudinaryImageId && (
            <div className="h-48 w-full overflow-hidden">
              <img
                src={`${CDN_URL}${cloudinaryImageId}`}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          )}
          <div
            className={`p-6 ${
              cloudinaryImageId
                ? "absolute bottom-0 text-white"
                : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            }`}
          >
            <h1 className="text-3xl font-bold">{name}</h1>
            <p
              className={`mt-2 ${
                cloudinaryImageId ? "text-gray-200" : "text-pink-100"
              } font-medium`}
            >
              {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Menu
          </h2>

          <div className="divide-y divide-gray-200">
            {itemCards && itemCards.length > 0 ? (
              itemCards.map((item) => (
                <div
                  key={item.card.info.id}
                  className="py-4 flex justify-between items-center hover:bg-pink-50 transition-colors px-2 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.card.info.name}
                    </h3>
                    <p className="text-pink-600 font-medium">
                      ₹
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </p>
                    {item.card.info.description && (
                      <p className="text-sm text-gray-500 mt-1 pr-4">
                        {item.card.info.description}
                      </p>
                    )}
                  </div>

                  {item.card.info.imageId && (
                    <div className="ml-4 relative">
                      <div className="h-24 w-24 rounded-lg overflow-hidden shadow-md">
                        <img
                          src={`${CDN_URL}${item.card.info.imageId}`}
                          alt={item.card.info.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <button className="absolute bottom-2 right-2 bg-white text-green-600 p-1 rounded shadow-md text-xs font-medium border border-gray-200">
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
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
