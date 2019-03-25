import React, { Component } from 'react'

export default class FavRecipeCard extends Component {
  render() {
  
    return (
      
      <div>
        {/* <label className="showRecipe__labelOne">FAVORITES</label> */}
        <div className="recipeFeed__imgDiv">
            <img className="recipeFeed--img"src={this.props.image} alt="pic"/>
        </div>
        <div className="recipeFeed__textDiv">
            <p className="recipeFeed--foodpic">{this.props.title} </p>
            <p className="recipeFeed--recipeBy">{this.props.author}</p>
            <div className="recipeFeed__likeDiv">
                <img className="recipeFeed--icon"src="./Assets/Icons/SVG/Icon-likes.svg" alt="icon"/>
                <p className="recipeFeed--iconText">{this.props.likes}</p>
            </div>
        </div>
        
      </div>
    )
  }
}
