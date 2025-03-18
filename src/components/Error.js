import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-orange-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-500 text-center">
        <div className="inline-flex h-24 w-24 rounded-full bg-red-100 items-center justify-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops!</h1>
        <h2 className="text-xl text-gray-600 mb-4">Something Went Wrong</h2>

        <div className="bg-red-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-medium text-red-800">
            {err.status || "Error"}:{" "}
            {err.statusText || err.message || "An unexpected error occurred"}
          </h3>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-md transition-all duration-200"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default Error;
