import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LazyLoder from "./Concepts/lazy_loading_&_code_splitting/LazyLoader";
import LearnUseMemo from "./Concepts/learn_useMemo/LearnUseMemo";
import FilterUsers from "./Concepts/learn_useMemo/FilterUsersMemo";
function App() {
  console.log("App.jsx rendered");
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <LazyLoder /> */}
      {/* <LearnUseMemo /> */}
      <FilterUsers />
    </>
  );
}

export default App;
