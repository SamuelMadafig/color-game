import React, { Component } from 'react'
import '../styleSheets/Header.css'
export default class Header extends Component {
    state   = {selectedOption: 'esay'}
  
    onOptionChange = (event) =>{
        
        console.log('test')
        this.setState({
            selectedOption: event.target.value,
            colorString: ''
        })
    }
  





    onFormSubmit = (event)=>{
        event.preventDefault();
        console.log(this.props.correctColor)
        this.props.changeGameMode(this.state.selectedOption)
        document.getElementById("header-btn").disabled = true;
     
        /* document.querySelector(".squares").parentNode.removeChild(document.querySelector(".squares")); */
    }

  
  
    render() {
    return (
      <header className = "header-main">
          <div className = "main-container">
              <form className = "main-menu-form" onSubmit = {this.onFormSubmit}>
               <label> <input className = "radio-btn" type = "radio" name = "typeGame" value = "esay" onChange = {this.onOptionChange} checked =           {this.state.selectedOption === 'esay'}/>Esay</label>
                <label><input className = "radio-btn" type = "radio" name = "typeGame" value = "medium" onChange = {this.onOptionChange} checked ={this.state.selectedOption === 'medium'}/>Medium</label>
                <label><input className = "radio-btn" type = "radio" name = "typeGame" value = "hard" onChange = {this.onOptionChange}  checked ={this.state.selectedOption === 'hard'}/>Hard</label>
                <button className = "button" id = "header-btn" onClick = {this.onButtonClick}>Go</button>
                
              </form>
              <div className = "correct-color">
                {this.props.correctColor}
              </div>
             
      
          </div>
      </header>
    )
  }
}
