import React, { Component } from 'react'
import './style/index.scss'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Header extends Component {
  state = {
    search: ""
  }

  componentDidMount(){
    console.log(this.props.match)
  const title = this.props.match ? this.props.match.params.title : null;
  
  axios.get(`http://localhost:8080/search/${title}`)
  .then(res => {
    this.setState({
      search: res.data
    })
  })
}

  onChange = e =>{
    this.setState({ search : e.target.value });
  }
  render() {
    return (
      <div className="navBarDiv">
        <div className="navBarDiv__GrubHub">
        <Link to ={"/recipes"}><img className="navBarDiv__logo" src="../Assets/Logo/GrubHub.png" alt="pic"/></Link>
        </div>
        <div className="navBarDiv__searchDiv">
            <div className="navBarDiv__text">
                <input className="navBarDiv__search"type="text" placeholder="Search" icon="search" onChange={this.onChange} style={{paddingLeft: '40px'}}/>
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
