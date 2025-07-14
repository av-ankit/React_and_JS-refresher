import React, { useState, Suspense } from "react";
// import QueueableProgressBars from './Components/ProgressBar/ProgressBar'

{
  /* only load the below component when it is required through lazy */
}
const QueueableProgressBars = React.lazy(() =>
  import("../../Components/ProgressBar/ProgressBar")
);
function LazyLoader() {
  const [showProgress, setShowProgress] = useState(false);

  return (
    <>
      <div className="card">
        <button onClick={() => setShowProgress(!showProgress)}>
          ShowProgressBar
        </button>
        {/* till the component loads show a fallback using Suspense */}
        <Suspense fallback={<div>loading...</div>}>
          {showProgress && <QueueableProgressBars />}
        </Suspense>
      </div>
    </>
  );
}

export default LazyLoader;
