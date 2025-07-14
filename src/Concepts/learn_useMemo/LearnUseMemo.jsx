import { useState, useMemo } from "react";

function LearnUseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  {
    /* below is an expensive operation */
  }
  const expensiveFunction = () => {
    console.log("Expensive Calculation happened");
    let total = 1;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }
    return total;
  };
  //   expensiveFunction();

  //the expensive operation will run only when count1 changes otherwise not
  const data = useMemo(() => expensiveFunction(), [count1]);

  console.log("component rendered");

  return (
    <>
      <h3>Hello From UseMemo Concept!</h3>
      {data}
      <div>
        <button
          onClick={() => setCount1(count1 + 1)}
        >{`count 1: ${count1}`}</button>
      </div>
      <div>
        <button
          onClick={() => setCount2(count2 + 1)}
        >{`count 2: ${count2}`}</button>
      </div>
    </>
  );
}

export default LearnUseMemo;
