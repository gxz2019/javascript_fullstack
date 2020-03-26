import React, { useState } from 'react';

function App() {
  const [count,setCount1] = useState(0);
  return (
    <div>
      <p>{ count }</p>
      <button onClick={() => {setCount1(count+1)}}>click</button>
    </div>
  )
}

export default App;
