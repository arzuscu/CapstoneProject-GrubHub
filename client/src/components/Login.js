import React, { Component } from 'react'
import HeaderLogin from './HeaderLogin';
import './style/index.scss'
import './style/variables.scss'
import {Link} from "react-router-dom";


export default class Login extends Component {
  render() {
    return (
      <div>
        <div>
            <HeaderLogin/>
            <div className="loginDiv">
                <div className="loginDiv__input">
                    <label className="loginDiv__labelOne">EMAIL</label>
                    <input className="loginDiv__inputOne"type="text" name="email" placeholder="Email" />
                    <label className="loginDiv__labelTwo">PASSWORD</label>
                    <input className="loginDiv__inputTwo"type="password" name="password" placeholder="Password" />
                    <div className="loginDiv__buttonDiv">
                        <Link to={"/recipes"}><button className="loginDiv__button"type="submit" >LOGIN</button></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
