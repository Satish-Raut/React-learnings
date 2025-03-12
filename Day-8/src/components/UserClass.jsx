import React, { use } from "react";

//Class component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default Name",
        location: "Default Location",
        contact: "satish@gmail.com",
        avatar_url: "https://via.placeholder.com/150" 
      }
    };

    // console.log(this.props.name + " Child Constructor")
  }

  async componentDidMount() {
    // console.log( this.props.name + " Child componentDidMount")

    //API call:
    const data = await fetch("https://api.github.com/users/Satish-Raut");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    //Destructuring the variables
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log( this.props.name+"Child Render");

    return (
      <div className="user-card">
        <h2>Class component</h2>
        <img src={avatar_url} className="avtar"></img>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: satish@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
