import React from "react";
import ReactDOM from "react-dom/client";

//------------------------------------------------------------------------------------------------🫸
//React.createElement => creates an 'object' => After rendering it will become a 'HTML element'

// const heading = React.createElement(
//     "h1", {id : "heading"},
//      "Start React 🚀"
//     );

// console.log(heading)
//------------------------------------------------------------------------------------------------🫷

//JSX - is not HTMl in JS but its a HTML-like or XML-like Syntax
//JSX (Transpiled before it reaches to JS) - it is done by `Babel`

//JSX => React.createElement => ReactElements => JS Object => HTMLelement (render)

//React element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Start React 🚀 with JSX, React element 
  </h1>
);

// React Component:
// 1. Class based componemt - OLD
// 2. Functional component - NEW :
//    🎯 A function which return a peice of JSX code is known as "Functional Component".
//    🎯 Naming starts with capital letter.

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Start React Day-03🚀 Component Composition
    </h1>
  );
};

let a = 10,
  b = 30;

const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    {Title()}
    <Title />
    <Title></Title>
    <h1>Start React 🚀 from Functional Component</h1>
    <h2>{a + b}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />); // Rendering functional component
