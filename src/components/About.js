import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              About Me
            </h1>

            <h2 className="text-xl text-gray-600 font-medium">
              Welcome to Namaste React
            </h2>
            <div className="mt-6 h-1 w-24 bg-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="mt-10">
            <UserClass name={"Harshit prop class"} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
