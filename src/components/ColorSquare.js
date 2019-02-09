import React, { Component } from 'react'
import '../styleSheets/ColorSquare.css'
export default class ColorSquare extends Component {
  
  onSquareClick = (event) =>{
    this.props.setSelectedIndex(event.target.id)  
    event.target.style.border = `4px solid black`
    this.props.changeSubmitBtnState(true);
  }
  
  
  componentDidMount(){
    console.log(this.props.backgroundColor)
    document.getElementById(`${this.props.id}`).style.backgroundColor =  this.props.backgroundColor;
    
  }

  render() {
   
    return (
      <div className = "square" id = {`${this.props.id}`} onClick = {this.onSquareClick}/>   
    )
  }
}
