import React, { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import QueueableProgressBars from './Components/ProgressBar/ProgressBar'

{
  /* only load the below component when it is required through lazy */
}
const QueueableProgressBars = React.lazy(() =>
  import("./Components/ProgressBar/ProgressBar")
);
function LazyLoader() {
  const [showProgress, setShowProgress] = useState(false);

  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setShowProgress(!showProgress)}>
          ShowProgressBar
        </button>
        {/* till the component loads show a fallback using Suspense */}
        <Suspense fallback={<div>loading...</div>}>
          {showProgress && <QueueableProgressBars />}
        </Suspense>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default LazyLoader;
