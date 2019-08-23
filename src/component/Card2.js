import React, { Component } from 'react'
import './Card2.css';
export default class Card2 extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "KNOW MORE" };
      }
    render() {
        return (
            
    <div className="card">
    <img src={this.props.logo} class="img1"></img>
    <div class="container1">
        <h1><b>{this.props.header} </b></h1>
        <h3 class="icon1">{this.props.footer}</h3>
        <h2 class="ix" onClick={()=>this.setState({value:"hai"})}><font color="red">{this.state.value}</font></h2>
    </div> 
    </div>  
        )
    }
}


