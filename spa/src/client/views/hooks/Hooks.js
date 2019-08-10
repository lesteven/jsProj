import React, { useState, useEffect } from 'react';


const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = '';
    }
  })
  return (
    <div>
      <p> hello hooks! </p>
      <p> { count }  </p>
      <button onClick={() => setCount(count+1)}> Click! </button>
    </div>
  )
}

export default Hooks;
