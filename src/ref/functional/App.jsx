
import React, {useEffect, useRef, useState} from 'react'

export default function App() {
        // let paragraphRef = React.useRef();
        let paragraphRef = useRef();  // es trha bhi likh skte hai
        let inputRef = useRef();


    const getDetails = () => {
    paragraphRef.current.classList.toggle("container");  // css ke liye 
    console.log(inputRef.current.value);
    }


  return (
    <div>
        <input type="text" ref={inputRef} />

        <p ref={paragraphRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Possimus nemo velit dicta eos quo harum cum exercitationem iste a ab quam iure,
             ratione placeat tempora, eius debitis laborum tenetur eaque!</p>

             <button onClick={getDetails}> Clik Me </button>
        

    </div>
  )
}
