import React, { useState } from "react";

function ProgressBar({ duration, onComplete }) {
  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    let currentWidth = 0;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
      currentWidth += step;
      if (currentWidth >= 100) {
        clearInterval(interval);
        setWidth(100);
        onComplete();
      } else {
        setWidth(currentWidth);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div
      style={{
        backgroundColor: "#ccc",
        height: "20px",
        marginBottom: "10px",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: "100%",
          backgroundColor: "#4caf50",
        }}
      />
    </div>
  );
}

function QueueableProgressBars() {
  const [queue, setQueue] = useState([]);
  const [active, setActive] = useState(false);
  const [displayBars, setDisplayBars] = useState([]);

  const addProgressBar = () => {
    const duration = Math.floor(Math.random() * 3000) + 2000; // 2s to 5s
    setQueue((prev) => [...prev, { id: Date.now(), duration }]);
  };

  React.useEffect(() => {
    if (!active && queue.length > 0) {
      setActive(true);
      const next = queue[0];
      setQueue((prev) => prev.slice(1));
      setDisplayBars((prev) => [...prev, next]);
    }
  }, [queue, active]);
  //eslint ignore below line
  const handleComplete = (id) => {
    setActive(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={addProgressBar}
        style={{ marginBottom: "20px", padding: "10px 20px" }}
      >
        Add Progress Bar
      </button>
      <div>
        {displayBars.map((bar, index) =>
          index === displayBars.length - 1 ? (
            <ProgressBar
              key={bar.id}
              duration={bar.duration}
              onComplete={() => handleComplete(bar.id)}
            />
          ) : (
            <div
              key={bar.id}
              style={{
                backgroundColor: "#ccc",
                height: "20px",
                marginBottom: "10px",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#4caf50",
                }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default QueueableProgressBars;
