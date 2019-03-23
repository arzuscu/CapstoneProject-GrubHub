import React, { Component } from 'react'
import './style/index.scss'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="navBarDiv">
        <div className="navBarDiv__GrubHub">
        <Link to ={"/recipes"}><img className="navBarDiv__logo" src="../Assets/Logo/GrubHub.png" alt="pic"/></Link>
        </div>
        <div className="navBarDiv__searchDiv">
            <div className="navBarDiv__text">
                <input className="navBarDiv__search"type="text" placeholder="Search" name="search" onChange={this.onChange} style={{paddingLeft: '40px'}}/>
            </div>
            <div className="navBarDiv__formImg">
                <div className="navBarDiv--imgDiv">
                <Link to ={"/favorites"}><img className="navBarDiv--img"src="../Assets/Images/arzu.jpg" alt="pic"/></Link>
                </div> 
                <div className="navBarDiv--fromDiv">
                    <p className="navBarDiv--from"> Arzu</p>
                </div>
            </div>
        </div>
         
      </div>
      
    )
  }
}