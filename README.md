# Food Ordering App

This project is a React-based Food Ordering App designed to help you learn modern React concepts by building a real-world application. The app demonstrates component-based architecture, custom hooks, code splitting, and more. It features a restaurant listing, search functionality, detailed menus, and a responsive UI, making it a great learning resource for beginners React developers.

## Getting Started (Process to Run this project in your device)

Follow these steps to set up and run the project from scratch:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Satish-Raut/React-learnings
   cd "Learnings By Creating Food Ordering App"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open the app in your browser:**
   The app will typically run at [http://localhost:3000](http://localhost:3000) by default.






---

/\*\*

- Header
- -logo
- -Nav items
-
- Body
- - Search
- - Resturant container
- - restro card container
-      - img
-      - Name of restro
-      - Star rating
-      - cuisine
-      - delivery tie
-
- Footer
- - Copyrights
- - Links
- - Address
- - contacts
-
- \*/

Two types of export and import
---

- Default Export/Import
  export default component;
  import component from "path";

- Named Export/Import
  export const component;
  import {component} from "Path";

Hook in React
---

- useState()
  - Whenever the state variable is update react will Re-render the component.
- useEffect()

---

## React Learning Notes: Day 1 to Day 11

### Day 1: Introduction to React & Project Setup
- What is React? Why use it?
- Setting up a React project (using Create React App or Parcel).
- Understanding the project structure.
- Writing your first React component.
- Rendering components to the DOM.

### Day 2: JSX & Components
- What is JSX? How does it differ from HTML?
- Creating functional components.
- Props: Passing data to components.
- Component composition (nesting components).

### Day 3: Styling in React
- Inline styles vs. CSS files.
- Using className instead of class.
- Organizing styles for components.

### Day 4: State & Events
- Introduction to useState hook.
- Managing local component state.
- Handling user events (onClick, onChange).
- Updating the UI based on state.

### Day 5: Lists & Conditional Rendering
- Rendering lists with map().
- Using keys in lists.
- Conditional rendering (if/else, ternary, &&).

### Day 6: useEffect & Side Effects
- Introduction to useEffect hook.
- Fetching data from APIs.
- useEffect dependency array.
- Cleaning up effects.

### Day 7: Routing in React
- Introduction to React Router.
- Setting up routes and navigation.
- Route parameters and nested routes.
- Handling 404 pages.

### Day 8: Class Components & Lifecycle Methods
- Creating class components.
- Using state and props in class components.
- Lifecycle methods: constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount.
- Differences between class and functional components.

### Day 9: Custom Hooks & Code Splitting
- Creating and using custom hooks (e.g., useRestraurantMenu, useOnlineStatus).
- Optimizing with custom hooks.
- Code splitting: React.lazy and Suspense.
- Benefits of chunking and lazy loading.

### Day 10: Styling with Tailwind CSS
- Installing and configuring Tailwind CSS.
- Using utility classes for rapid styling.
- Responsive design with Tailwind.

### Day 11: Higher Order Components (HOC)
- What is a Higher Order Component?
- Creating and using HOCs to add features to components.
- Example: Adding a “Veg” label to restaurant cards.

---

## 🚀Day - 08(Learnings):🚀

- Class component
- How props work in class component
- How to use the State variables in Class Component
- How to change the values of State variables in Class Component
- The life cycle of the class component
  :- Constructor() -> Render() -> componentDidMount()
  ⬆️********\_\_\_\_********⬆️ ⬆️******\_\_******⬆️
  "Render Phase" "Commit Phase"
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

---

## 🚀Day - 09(Learnings):🚀

- Optimizing The app using "Custom Hook".
- To optimize my app i will fetch the data in a separate Custom Hook named "useRestraurantMenu".
- To display the internet status i will create a Custom Hool named "useOnlineStatus".
- I got to know that I can go to offline mode in the Network section after inspecting the browser.
- Chunking / Code Spliting / Dynamic Bundling / Lazy Loading / On-Demand Loading

1. Problems Without Chunking in React:

   - 📦 Large Bundle Size: When a React app grows, all components get bundled together, increasing the file size.
   - 🐢 Slow Initial Load: Loading the entire app at once makes the website slow, especially for users with poor network conditions.
   - 🔄 Unnecessary Component Loading: Users might not need all components initially, but they still get loaded, wasting bandwidth.
   - 🔥 Bad User Experience: A slow-loading app leads to frustration and a high bounce rate.

2. What is Chunking in React?

   - Chunking in React means breaking the application’s JavaScript bundle into smaller pieces (chunks) and loading them only when needed.

   This is done using:

   - React.lazy(): Dynamically imports a component only when it is needed.
   - Suspense: Displays a fallback UI (like a loading spinner) until the lazy-loaded component is available.

✅ Benefit: Only loads necessary components, reducing the initial bundle size.

3.  How React.lazy and Suspense Help with Chunking?

    - Instead of importing all components upfront, we use React.lazy to load components on demand.

    🧑‍💻 ➡️Example: Without Lazy Loading (All Components Load at Once)

    - import Home from "./Home";
    - import About from "./About";
    - import Contact from "./Contact";

    - function App() {
    - return (
    -      <div>
    -         <Home />
    -         <About />
    -         <Contact />
    -      </div>
    - );
    - }

    - export default App;

    🧑‍💻 ⬅️ 📌 Problem: Even if a user never visits the About or Contact page, they are still loaded in the initial bundle.

    🧑‍💻 ➡️Example: With Lazy Loading (Chunking Enabled)

    - import React, { lazy, Suspense } from "react";

    - const Home = lazy(() => import("./Home"));
    - const About = lazy(() => import("./About"));
    - const Contact = lazy(() => import("./Contact"));

    - function App() {
    - return (
    -      <div>
    -         <Suspense fallback={<h2>Loading...</h2>}>
    -         <Home />
    -         <About />
    -         <Contact />
    -         </Suspense>
    -      </div>
    - );
    - }

    - export default App;

    🧑‍💻 ⬅️  
    ✅ Advantages of Chunking with Lazy and Suspense:

    🟢 Faster Initial Load 🚀 - The app loads only essential components first.
    🟢 Reduces Bundle Size 📦 - Loads components only when they are needed.
    🟢 Better User Experience 🎯 - Displays a loading state instead of freezing the page.

## Day - 10(Learning):🚀

  - it is all about Styling the app using "Talwind" CSS framework.



## Day - 11(Learning):🚀

  - Higher Order Component:
      -  It will take a component and return a component.
      -  Along with it will add some extra features.
      