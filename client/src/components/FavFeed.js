import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import FavRecipeCard from './FavRecipeCard';

export default class FavFeed extends Component {
  render() {
      
    const favs = this.props.favorites;
    const search = this.props.search;
    
    const filterRecipe = favs.filter( favs =>{
      return favs.title.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })
    
    const favsMap = favs ? filterRecipe.map((item)=>{
        return (
            <Link to={`/favorites/${item.id}`} key={item.id} >
              <FavRecipeCard image={item.image} title={item.title} author={item.author} likes={item.likes} />
            </Link>
            )
    }):null

    return (
        
        <div className="recipeFeed">
        {/* <div className="recipeFeed__labelDiv">
            <label className="showRecipe__labelOne">FAVORITES</label>
        </div> */}
            { favsMap }
        {/* <label className="showRecipe__labelOne">FAVORITES</label> */}
            <div className="recipeFeed__btn">
            <Link to ={"/createrecipe"}><button className="recipeFeed__button" type="button">CREATE RECIPE</button></Link>
            </div>
        </div>
    )
  }
}
