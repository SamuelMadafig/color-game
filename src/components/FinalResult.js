import React from 'react'
import "../styleSheets/FinalResult.css"
export default function FinalResult(props) {
  return (
    <div className = "final-result">
        {props.finalMessage}
        <div className = "restart-id-container">
        <button className = "button restart-id"   onClick = {props.restartGame}>Restart</button>
        </div>
       
    </div>
  )
}
