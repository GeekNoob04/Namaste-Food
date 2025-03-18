import React from "react";

const ContactShimmer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-400">
        {/* Title and subtitle shimmer */}
        <div className="h-8 w-32 mx-auto bg-gray-200 animate-pulse rounded mb-2"></div>
        <div className="h-4 w-48 mx-auto bg-gray-200 animate-pulse rounded mb-6"></div>

        {/* Form fields shimmer */}
        <div className="space-y-5">
          {/* Name field */}
          <div>
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded mb-1"></div>
            <div className="h-12 w-full bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          {/* Email field */}
          <div>
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded mb-1"></div>
            <div className="h-12 w-full bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          {/* Phone field */}
          <div>
            <div className="h-4 w-32 bg-gray-200 animate-pulse rounded mb-1"></div>
            <div className="h-12 w-full bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          {/* Message field */}
          <div>
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded mb-1"></div>
            <div className="h-24 w-full bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          {/* Button */}
          <div className="h-12 w-full bg-orange-300 animate-pulse rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactShimmer;
