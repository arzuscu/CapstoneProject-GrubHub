import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import FavRecipeCard from './FavRecipeCard';

export default class FavFeed extends Component {
  render() {
    const favs = this.props.favs;
    console.log(this.props.favs)
    const favsMap = favs.map((item)=>{
        return (
            <Link to={'/favorites'} key={item.id} >
              <FavRecipeCard image={item.image} title={item.title} author={item.author} likes={item.likes}  />
            </Link>
            )
    })
    return (
        <div className="recipeFeed">
            { favsMap }
        </div>
    )
  }
}
