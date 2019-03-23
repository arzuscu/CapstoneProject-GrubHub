import React, { Component } from 'react'
import axios from 'axios';
import FavFeed from './FavFeed';
import ShowFavs from './ShowFavs';
import {Link} from 'react-router-dom';

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
    console.log(this.state.favorites)
    return (
      <div>
        <FavFeed favorites={this.state.favorites}/>
      </div>
    )
  }
}
