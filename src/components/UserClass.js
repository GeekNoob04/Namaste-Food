import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "default location",
        avatar_url: "dummy photo",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/GeekNoob04");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("component Did Update");
  }
  componentWillUnmount() {
    console.log("component Will Unmount");
  }
  render() {
    // console.log(this.props.name + "Child Render");
    const { name, id, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Id: {id}</h3>
        <h4>Contact: @BudhrajaHarshit</h4>
      </div>
    );
  }
}

export default UserClass;
