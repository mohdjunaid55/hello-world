import React, { useReducer} from 'react'

export default function App1() {
    // hmne tha function bna liya
const counterReducer =(state, action) =>{
    console.log(state, action);

    if(action.type === "increment"){
        return state + 1;
    }

    if(action.type === "decrement"){
        return state - 1;
    }

    return state;
}


let [counter, dispatch] = useReducer(counterReducer, 0)

  const Increment = () => {
    dispatch({
        type : "increment",
        payload : 1
    })
 }

const Decrement = () => {
    dispatch({
        type : "decrement",
        payload : 1
    })
  }

  return (
    <div>
    <p>Counter: {counter}</p>
    <button onClick={Increment}>Increment </button>
    <button onClick={Decrement}>Decrement</button>
      </div>
  )
}


