import React, { Component } from 'react'

export default class RecipeCard extends Component {
  render() {
    return (
      <div>
            <div className="recipeFeed__imgDiv">
                <img className="recipeFeed--img"src={this.props.image} alt="pic"/>
            </div>
            {/* <img className="recipeFeed--iconOne"src="./Assets/Icons/SVG/Icon-add.svg" alt="icon"/> */}
        <div className="recipeFeed__textDiv">
            <p className="recipeFeed--foodpic">{this.props.title} </p>
            <p className="recipeFeed--recipeBy">{this.props.author}</p>
            <div className="recipeFeed__likeDiv">
                <img className="recipeFeed--iconTwo"src="./Assets/Icons/SVG/Icon-likes.svg" alt="icon"/>
                <p className="recipeFeed--iconText">{this.props.likes}</p>
            </div>
        </div>
      </div>
    )
  }
}
