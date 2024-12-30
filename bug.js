import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count); // This will log the *previous* state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}