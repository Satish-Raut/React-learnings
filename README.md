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
