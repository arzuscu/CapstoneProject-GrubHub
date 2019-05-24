import React, { Component } from 'react'
import axios from 'axios';
import FavFeed from './FavFeed';

export default class FavRecipe extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          favorites:[]
        }
      }
      componentDidMount(){

        let url = "http://localhost:8080/favorites";
        axios.get(url)
        .then(res =>{
          this.setState({ favorites:res.data });
        })
        .catch((err) => {
          console.log(err)
        })
      } 
      
  render() {
    return (
      <div className="favRecipe__divOne">
        <label className="showRecipe__labelOne">ARZU'S FAVORITES</label>
        <FavFeed favorites={this.state.favorites} search={this.props.search}/>
      </div>
    )
  }
}
