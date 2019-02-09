import React, { Component } from 'react';
import Board from './Board'
import Header from './Header'
import "../styleSheets/App.css"
import ColorSquare from './ColorSquare'





class App extends Component {
  
  state = {correctColorIndex : null, colorTag : '', colors: [], gameMode: ''}
  
  randomNumber = (max, min) =>(Math.floor(Math.random()*(max - min + 1) + min))
   

  createColorsArray = (min,max, numberOfSquare) => {
    const colorsArr = [];
   
    for(let i = 0; i < numberOfSquare; i++){
      colorsArr.push(`rgb(${this.randomNumber(min,max)},${this.randomNumber(min,max)},${this.randomNumber(min,max)})`)
    }
    return colorsArr
  }




  getGameMode = (mode) => {
    
    
    let numberOfSquare = 6;
    let winningColor;
    let colorsArr;
    
    if(mode === "esay"){
     
       numberOfSquare = 3;
       colorsArr = this.createColorsArray(0,255, 3)
       winningColor = this.randomNumber(0,3);
    
    }else if(mode === "medium"){
      
      colorsArr = this.createColorsArray(0,255,6)
      winningColor = this.randomNumber(0,6);
    
    }else if(mode === "hard"){
       
       const range = this.randomNumber(25,225)
       colorsArr = this.createColorsArray((range -25) ,(range + 25),6)
       winningColor = this.randomNumber(0,6);
    }
    
  
   
   
    this.setState({gameMode: mode, colors: colorsArr, correctColorIndex: winningColor, numberOfSquares: numberOfSquare})
  }





















  render() {
    console.log(this.state.colors)
    return (
      <div className = "container">  
        <Header changeGameMode = {this.getGameMode}  correctColor = {this.state.colors[this.state.correctColorIndex]} />
        <Board colors = {this.state.colors} correctColorIndex = {this.state.correctColorIndex} numberOfSquares = {this.state.numberOfSquares} restartGame = {this.props.restartGame}/>
      </div>
    )
  }
}

export default App;
