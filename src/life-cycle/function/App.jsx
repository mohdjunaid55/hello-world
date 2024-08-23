import React, {useEffect, useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  // const [counter1, setCounter1] = useState(0);
  console.log("App component Load");

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

// ye jb bhi load hoga chal jaye ga or value change hogi tb bhi
  // componentDidUpdate
  // useEffect(() => {
  //   console.log("use Effect");
  //   console.log(counter);
  // })


  // ye only jb chale ga jb componet load ho uske bad na chale 
  // componentDidMount  
//  useEffect(() => {
//     console.log("use Effect");
//     console.log(counter);
//   }, [])


// jb bhi value  change ho jbhi rerandar hoga 
  // componentDidUpdate with dependencies
  useEffect(() => {
    console.log("use Effect");
    console.log(counter);
    // setCounter(counter + 1)
  }, [counter])


  return (
    <div>
        {console.log("return")}
      <p>Counter: {counter}</p>
      {/* <p>Counter1: {counter1}</p> */}
      <button onClick={incrementCounter}>Increment</button>
    </div>
  )
}