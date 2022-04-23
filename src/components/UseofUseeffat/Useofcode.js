import React, { useEffect, useState } from "react";

function Useofcode() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  // when is mounted and update also
  useEffect(() => {
    console.log("calling when mounted ansd also updated ");
    document.title = "count: " + counter;
  });
  // when only mounted
  useEffect(() => {
    console.log("only when component mounted not updated");
  }, []);
  //  when only unmounted and updated
  useEffect(() => {
    return () => {
      console.log("only when component unmounted and up dated ");
    };
  });
  // only when unmounted
  useEffect(() => {
    return () => {
      console.log("only when component unmounted");
    };
  }, []);
  return (
    <div>
      <p>This is counter component</p>
      <div> Counter : {counter}</div>
      <button onClick={increaseCounter}>Increment</button>
    </div>
  );
}

export default Useofcode;
