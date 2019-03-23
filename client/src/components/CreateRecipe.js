import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateRecipe extends Component {
    constructor(){
        super()

        this.recipeForm = React.createRef();
    }

      clickme = (e) => {
        e.preventDefault()
        console.log('hfdf',e.target.name)
        if(e.target.name === 'fav') {
            let config = {
                method: 'POST',
                url: 'http://localhost:8080/favorites',
                data: {
                title: this.recipeForm.current.title.value,
                ingridients: this.recipeForm.current.ingridients.value.split(','),
                Directions: this.recipeForm.current.steps.value
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios(config)
                .then(response =>{
                    console.log(response)
                })
                .catch ((err) => {
                    console.log(err)
                  })
                this.recipeForm.current.title.value = '';
                this.recipeForm.current.ingridients.value = '';
                this.recipeForm.current.steps.value = '';
                window.location ="http://localhost:3000/favorites";
        } else if(e.target.name === 'share'){
            let config = {
                method: 'POST',
                url: 'http://localhost:8080/recipes',
                data: {
                title: this.recipeForm.current.title.value,
                ingridients: this.recipeForm.current.ingridients.value.split(','),
                Directions: this.recipeForm.current.steps.value
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios(config)
                .then(response =>{
                    console.log(response)
                })
                .catch ((err) => {
                    console.log(err)
                  })
                this.recipeForm.current.title.value = '';
                this.recipeForm.current.ingridients.value = '';
                this.recipeForm.current.steps.value = '';
                window.location ="http://localhost:3000/recipes";
        }
      }
      
  render() {
    return (
      <div className="createRecipeDiv">
        <div className="createRecipeDiv__inputDiv">
            <form ref = {this.recipeForm} >
                <div className="createRecipeDiv__divOne">
                    <label className="createRecipeDiv__labelOne">RECIPE NAME</label>
                    <input className="createRecipeDiv__input"type="text" name="title" placeholder="   Add your recipe name" />
                </div>
                <div className="createRecipeDiv__divTwo">
                    <label className="createRecipeDiv__labelTwo">INGREDIENTS</label>
                    <textarea className="createRecipeDiv__textOne"rows="4" cols="50" name="ingridients"  placeholder="Add your ingredients"/>
                </div>
                <div className="createRecipeDiv__divThree">
                    <label className="createRecipeDiv__labelThree">STEPS</label>
                    <textarea className="createRecipeDiv__textTwo"rows="4" cols="50" name="steps"  placeholder="Add your steps"/>
                </div>
                <div className="createRecipeDiv__divFour">
                    <button onClick={this.clickme} className="createRecipeDiv__buttonOne" name ='share'>SHARE</button>
                   <button onClick={this.clickme} className="createRecipeDiv__buttonTwo" name='fav'>ADD TO FAVS</button>
                </div>
            </form>
            </div>
      </div>
    )
  }
}