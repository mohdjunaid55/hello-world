import React from 'react'
import Header from './Header'
import ReactDOM from 'react-dom'

export default function App() {
  return (
    <div>
          {/* <Header></Header> */}
         <p>App component</p>
         
         {
                    //  "junaid"
      ReactDOM.createPortal(<Header/>, document.getElementById("header"))
         }
        
    </div>
  )
}
