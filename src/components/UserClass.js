import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "default location",
        avatar_url:
          "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png",
      },
      isLoading: true,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/GeekNoob04");
      const json = await data.json();
      this.setState({
        userInfo: json,
        isLoading: false,
      });
      console.log(json);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }

  render() {
    const {
      name,
      id,
      avatar_url,
      location,
      bio,
      html_url,
      public_repos,
      followers,
      following,
    } = this.state.userInfo;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gradient-to-b from-pink-500 to-purple-600 p-6 flex flex-col items-center justify-center">
            <img
              src={avatar_url}
              alt={name}
              className="h-40 w-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <h2 className="mt-4 text-xl font-bold text-white">{name}</h2>
            {location && (
              <div className="flex items-center mt-2 text-pink-100">
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
                <span className="text-sm">{location}</span>
              </div>
            )}
          </div>

          <div className="md:w-2/3 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-700 font-medium">GitHub Profile</h3>
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
              >
                View Profile
              </a>
            </div>

            {bio && <p className="text-gray-600 mb-4">{bio}</p>}

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-pink-50 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-pink-600">
                  {public_repos || 0}
                </span>
                <span className="text-xs text-gray-500">Repositories</span>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-purple-600">
                  {followers || 0}
                </span>
                <span className="text-xs text-gray-500">Followers</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-indigo-600">
                  {following || 0}
                </span>
                <span className="text-xs text-gray-500">Following</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <span>GeekNoob04</span>
              </div>
              <p className="text-gray-400 text-xs mt-4">GitHub User ID: {id}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
