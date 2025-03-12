import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//Using Class Component:
class About extends React.Component{

    constructor(props)
    {
        super(props)
        console.log(props.state + " Parent Constructor")
    }

    componentDidMount()
    {
        console.log(" Parent componentDidMount")
    }

    render()
    {
        console.log(" Parent Render")

        return (
            <div>
                <h1>Welcome to React</h1>
                <h2>It is a React learning Project</h2>
                <User name="Satish Raut" location="Odisha" contact="satish@gmail.com" />
    
    
                <UserClass  name="Satish Raut" location="Odisha" contact="satish@gmail.com"/>   
            </div>
        );
    }
}

// Using Functional Component
// const About = () => {
//     return (
//         <div>
//             <h1>Welcome to React</h1>
//             <h2>It is a React learning Project</h2>
//             <User name="Satish Raut" location="Odisha" contact="satish@gmail.com" />


//             <UserClass  name="Satish Raut" location="Odisha" contact="satish@gmail.com"/>
//         </div>
//     );
// };

export default About;
