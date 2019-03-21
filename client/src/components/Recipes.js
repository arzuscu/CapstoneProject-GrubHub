import React, { Component } from 'react'
import axios from 'axios';
import RecipeFeed from './RecipeFeed';

export default class Recipes extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          recipes:[]
        }
      }
    
      componentDidMount(){
        let url = "http://localhost:8080/recipes";
        axios.get(url)
        .then (res =>{
          this.setState({ recipes:res.data });
        })
        .catch ((err) => {
          console.log(err)
        })
      }
      settingState = (change) => {

      } 
      // componentDidUpdate(){
      //   console.log(this.state.recipeDetail.id)
      //   if(this.props.match.params.id !== this.state.recipeDetail.id){
      //     this.getRecipe(this.props.match.params.id);
      //   }
      // }

      // getRecipe = (id) => {
      //   let Mainurl = (`http://localhost:8080/recipes/${id}`);
      //     axios.get(Mainurl)
      //     .then (response =>{
      //       const recipeDetail= response.data;
      //       console.log('recipe detail',recipeDetail)
      //       this.setState({ recipeDetail:recipeDetail });
      //     })
      //   }

  render() {
    // console.log('state',this.state.recipeDetail)
    // console.log(this.state.recipeDetail.id)

    
    return (
      <div>
        <RecipeFeed recipes={this.state.recipes} />
  
        {/* <ShowRecipe recipes={this.state.recipes.id}/> */}
        {/* <FavRecipeCard recipes={this.state.recipes}/> */}
      </div>
    )
  }
}
