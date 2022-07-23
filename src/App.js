import React, { Component } from 'react';
import './App.css'

export default class App extends Component{
  state={
    numero:0
  }
  incremento=() => {
    if(this.state.numero<=9){
      this.setState({numero:this.state.numero+1})
    }
  }
  decremento=() => {
    if(this.state.numero > 0){
      this.setState({numero:this.state.numero-1})
    }
  }
  render(){
    return(
      <div className='container'>
        <h1>Contador</h1>
        <h2>{this.state.numero}</h2>
        <div className='btn-div'>
          <button className='btn-menos' onClick={this.decremento}>-</button>
          <button className='btn-mais' onClick={this.incremento}>+</button>
        </div>
      </div>
    )
  }
}