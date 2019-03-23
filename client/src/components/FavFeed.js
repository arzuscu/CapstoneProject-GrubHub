import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import FavRecipeCard from './FavRecipeCard';

export default class FavFeed extends Component {
  render() {
    const favs = this.props.favorites;
    console.log(this.props.favorites)
    
    const favsMap = favs ? favs.map((item)=>{
        return (
            <Link to={`/favorites/${item.id}`} key={item.id} >
              <FavRecipeCard image={item.image} title={item.title} author={item.author} likes={item.likes} 
             />
            </Link>
            )
    }):null
    return (
        <div className="recipeFeed">
            { favsMap }
            <div className="recipeFeed__btn">
            <Link to ={"/createrecipe"}><button className="recipeFeed__button" type="button">CREATE RECIPE</button></Link>
            </div>
        </div>
    )
  }
}
