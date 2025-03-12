import { Component, useState } from "react";

// Functional component:
const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);


  return (
    <div className="user-card">

      <h1>Count1 = {count} </h1>
      <button onClick={()=>{
        setCount(count+1);    
      }}>Increament</button>

      <h2>Functional Component</h2>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>

    </div>
  );
};

export default User;
