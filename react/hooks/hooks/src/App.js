import React,{useState,createContext,useContext} from 'react';


function B() {
  return (
    <div>

    </div>
  )
}
const value = useContext(B)

function App(props) {
  const [count,setCount] = useState(0)
  function changeCount() {
    setCount(count+1)
  }
  // useEffect(() => {
  //   console.log(`Effect${count}`)
  // },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changeCount}>click</button>
      <B.Provider >
        
      </B.Provider>
    </div>
  )
}
export default App