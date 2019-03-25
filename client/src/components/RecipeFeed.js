import React, { Component } from 'react'
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';


export default class RecipeFeed extends Component {
  render() {
    const recipes = this.props.recipes;
    const search = this.props.search;
    
    const filterRecipe = recipes.filter( recipes =>{
      return recipes.title.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })
  

    const recipeMap = filterRecipe.map((item)=>{
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


