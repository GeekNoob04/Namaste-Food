const Shimmer = () => {
  return (
    <div className="container mx-auto px-4 py-26">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 h-64 w-full rounded-lg shadow-md animate-pulse"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
