import React, { useState } from 'react'

export default function App1() {
  // let counter = 1000;
  // React.useState() hm es trha react.na likh ke uppar {useState} 

  let [counter, setcounter] = useState(1000)
// console.log(counter, setcounter);

  const Increment = () => {
    setcounter(counter + 1);
    // setcounter(counter + 2);
    // setcounter(counter + 3);
    // setcounter(counter + 4);
    // setcounter(counter + 5); // last vala chale ga 

    console.log(counter);
// 
   // 1 --- state ki value change krne ke 4  type --
    // setcounter(counter + 1);
    
    
 // 2--------
     //  setcounter(counter++);

 //  3---------
     //  setcounter(++counter);

// 4  callback---------------
// setcounter((preValue) => {
//   console.log(preValue);
//   return preValue + 1
// })

 }


 
  const Decrement = () => {
    setcounter(counter - 1);
    console.log(counter);
  }

  return (
    <div>
    <p>Counter: {counter}</p>
    <button onClick={Increment}>Increment </button>
    <button onClick={Decrement}>Decrement</button>
      </div>
  )
}


