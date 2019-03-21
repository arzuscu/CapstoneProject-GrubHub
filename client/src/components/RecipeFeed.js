import React, { Component } from 'react'
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';


export default class RecipeFeed extends Component {
  render() {
    const recipes = this.props.recipes;
    // let filterRecipe = recipes.filter(recipes => recipes.id !== this.props.current);

    const recipeMap = recipes.map((item)=>{
      return (
      <Link to={`/recipes/${item.id}`} key={item.id} >
        <RecipeCard image={item.image} title={item.title} author={item.author} likes={item.likes}  />
      </Link>
      )
    })
    
    return (
      <div className="recipeFeed">
        { recipeMap }
      </div>
    )
  }
}
