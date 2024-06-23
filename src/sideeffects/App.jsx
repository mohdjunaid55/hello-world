import React, { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  let [counter, setCounter]=  useState(0)

    const Increment =() => {
      setCounter(counter + 1)
    }

    // useEffect(() =>  {
    //   setCounter(10)
    // }, [])

   useEffect(() =>  {
   let Interval =  setInterval(() => {
        setCounter(counter + 1)
    }, 1000) 

    // clean up function
    return () => {
        clearInterval(Interval)
    }
    }, [counter]) 

  return (
    <div>
        <p>counter: {counter}</p>
        <button onClick={Increment}> Increment</button>
    </div>
  )
}
