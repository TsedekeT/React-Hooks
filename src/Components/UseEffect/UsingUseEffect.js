import React, { useState, useEffect } from "react";
import "./effects.css";

function UsingUseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(45);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count, age]);

  return (
    <div>
      <div className="valueHolder">
        <h1>The value of count is: {count}</h1>
        <h1>The value of age is: {age}</h1>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>CountIncrement</button>
      <button onClick = {() => setAge((age) => age + 5)}>AgeIncrement</button>
    </div>
  );
}

export default UsingUseEffect;
