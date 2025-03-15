// import User from "./User";
// import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Welcome to Namaste React</h2>
//       {/* <User name={"Harshit prop"}/> */}
//       <UserClass name={"Harshit prop class"} />
//     </div>
//   );
// };
// export default About;
import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>Welcome to Namaste React</h2>
        {/* <User name={"Harshit prop"}/> */}
        <UserClass name={"Harshit prop class"} />
      </div>
    );
  }
}
export default About;
