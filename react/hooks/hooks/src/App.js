import React,{useState, useEffect} from 'react';

function App(props) {
  const [count,setCount] = useState(0)
  function changeCount() {
    setCount(count+1)
  }
  useEffect(() => {
    console.log(`Effect${count}`)
  })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changeCount}>click</button>
    </div>
  )
}
export default App