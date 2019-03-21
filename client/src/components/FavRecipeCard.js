import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class FavRecipeCard extends Component {
  render() {
    console.log(this.props.image)
    return (
      <div>
          <div className="recipeFeed__imgDiv">
                <img className="recipeFeed--img"src={this.props.image} alt="pic"/>
            </div>
            <img className="recipeFeed--icon"src="./Assets/Icons/SVG/Icon-add.svg" alt="icon"/>
        <div className="recipeFeed__textDiv">
            <p className="recipeFeed--foodpic">{this.props.title} </p>
            <p className="recipeFeed--recipeBy">{this.props.author}</p>
            <div className="recipeFeed__likeDiv">
                <img className="recipeFeed--icon"src="./Assets/Icons/SVG/Icon-likes.svg" alt="icon"/>
                <p className="recipeFeed--iconText">{this.props.likes}</p>
                <Link to ={"/createrecipe"}><button className="recipeFeed__button" type="button">CREATE RECIPE</button></Link>
            </div>
        </div>
        
      </div>
    )
  }
}
