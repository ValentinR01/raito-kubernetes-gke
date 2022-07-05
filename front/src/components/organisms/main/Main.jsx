import React from 'react' ;
import "./Main.css"

function Main(props) {
  return (
    <div className="container-main">
        <p>  Je suis Main</p>
        {props.children}
    
    </div>
  )
}

export default Main  ;