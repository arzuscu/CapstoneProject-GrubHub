import React, { Component } from 'react'

export default class ShowRecipeCard extends Component {
  render() {
    return (
      <div className="showRecipe">
        <img className="showRecipe__imgOne" src="./Assets/Images/beanBurger.jpg" alt="img"/>
        <label className="showRecipe__recipeName">Bean Burger</label>
        <label className="showRecipe__label">Ingredients</label>
            <ul className="showRecipe__list">
                <li className="showRecipe__steps">1 can black beans drained</li>
                <li className="showRecipe__steps">2 carrots grated</li>
                <li className="showRecipe__steps">1/2 onion</li>
                <li className="showRecipe__steps">chopped 3 potatoes shredded</li>
                <li className="showRecipe__steps">2 1/2 ounces Gorgonzola cheese</li>
                <li className="showRecipe__steps">1 cup corn</li>
                <li className="showRecipe__steps">2 eggs</li>
                <li className="showRecipe__steps">salt and black pepper to taste</li>
                <li className="showRecipe__steps">2 tablespoons vegetable oil</li>
            </ul>
        <label className="showRecipe__label">Steps</label>
            <p className="showRecipe__steps">Mash black beans with a fork in a large bowl. Mix carrots, onion, potatoes, and corn into the mashed beans. Stir eggs into bean mixture to integrate completely.Form the mixture into 8 patties with wet hands; season with salt and black pepper.Heat vegetable oil in a skillet over medium heat. Cook the patties in hot oil until cooked through, about 6 minutes per side.</p>
      </div>
    )
  }
}
