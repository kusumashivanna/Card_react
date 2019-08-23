import React, { Component } from 'react'
import './Card3.css';
export default class Card3 extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "UX Designer" };
      }
    render() {
        return (
            <div className="card3">
            <div class="container3">
            <img src={this.props.girllogo} alt="Avatar" class="avatar"/>
            <h1>{this.props.f1}</h1>
            <p class="title">{this.props.f2}</p>
            <p class="round2" onClick={()=>this.setState({value:"hai"})}>{this.state.value}</p><div>
            <div class="icon3">
                <h4>{this.props.f4}</h4>
                <img src={this.props.name2} class="dot"></img>
                <img src={this.props.name3} class="dot"></img>
                <img src={this.props.name4} class="dot"></img>
                <img src={this.props.name1} class="dot"></img>
                <span class="dot">+2</span><br></br>
        
            </div><div>
            <div class="ima">
                <a href="https://twitter.com/LinkedIn?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={this.props.twitter}></img></a>
                <a href="https://dribbble.com/session/new"><img src={this.props.driddle}></img></a>
                <a href="https://twitter.com/login"><img src={this.props.linked}></img></a>
        
            </div>
            </div>
            </div>
            </div>
            </div>
         )
        }
    }
    
  