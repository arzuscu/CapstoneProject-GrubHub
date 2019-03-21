import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateRecipe extends Component {
    shareClick = (e) => {
        console.log('submitted');
        e.preventDefault();


        let config = {
            method: 'POST',
            url: 'http://localhost:8080/recipes',
            data: {
                title: e.target.title.value,
                ingridients: e.target.ingridients.value,
                Directions: e.target.steps.value
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
        
        e.target.title.value = '';
        e.target.ingridients.value = '';
        e.target.steps.value = '';
        window.location ="http://localhost:3000/recipes";
      }
  render() {
    return (
      <div className="createRecipeDiv">
        <div className="createRecipeDiv__inputDiv">
            <form onSubmit={this.shareClick}>
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
                    <button className="createRecipeDiv__buttonOne" type="submit">SHARE</button>
                   <button className="createRecipeDiv__buttonTwo" type="button">ADD TO FAVS</button>
                </div>
            </form>
            </div>
      </div>
    )
  }
}
