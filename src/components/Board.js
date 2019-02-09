import React, { Component } from 'react'
import FinalResult from "./FinalResult"
import ColorSquare from './ColorSquare'
import "../styleSheets/Board.css"


export default class Board extends Component {

    state = { selectedId: null, submitBtnDisabled: true, restartBtnDisabled: true, finalResultScreen: false, finalMessage: ''}

    changeSubmitBtnState = (state) => {
        state ? this.setState({submitBtnDisabled: false}):this.setState({submitBtnDisabled: true})
    }
    createSquare(numberOfSquare){
        
        const compnentsArr = [];
            for(let i = 0 ; i < numberOfSquare; i++){
                compnentsArr.push(<ColorSquare id = {i} key = {i} backgroundColor = {this.props.colors[i]} setSelectedIndex = {this.getSelectedId} changeSubmitBtnState = {this.changeSubmitBtnState}/>) 
            }   
            
            return compnentsArr
    } 
   
    getSelectedId = (id) => {
        document.querySelectorAll(".square").forEach((squ) => {squ.style.border = "none"})
        this.setState({selectedId: id})
      
    }


    onSubmitClick = () =>{
       
        if( parseInt(this.props.correctColorIndex) === parseInt(this.state.selectedId)){
            this.setState({ submitBtnDisabled: true, restartBtnDisabled: false,finalResultScreen: true,finalMessage: 'Correct' })
        
         }else{
            this.setState({submitBtnDisabled: true, restartBtnDisabled: false,finalResultScreen: true,finalMessage: 'Incorrect'})
         }
     }

    restartGame = () =>{
       window.location.reload()
    }

    render() {
        
        if(this.state.finalResultScreen){
            return(
                <div className = "board" style = {{backgroundColor:this.props.colors[this.props.correctColorIndex]}}>
                    <FinalResult finalMessage restartGame = {this.restartGame} finalMessage = {this.state.finalMessage}/>
                    <span className = "squares">
                        {this.createSquare(this.props.numberOfSquares)}
                    </span>
                    </div>
            )
        }
        
        return(
            <div className = "board">
              {/*   <FinalResult /> */}
                <span className = "squares">
                    {this.createSquare(this.props.numberOfSquares)}
                </span>  
                    <div className = "submit-btn-container">
                        <button className = "button submit-btn" onClick = {this.onSubmitClick} disabled = {this.state.submitBtnDisabled}>Submmit</button>
                    </div>
                   
            </div>
        )
    
    }
}

 