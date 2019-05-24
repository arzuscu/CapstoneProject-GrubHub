import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';

export default class ShowFavs extends Component {
    state = {
        oneFavs: ''
      }
    
      componentDidMount(){
        const id = this.props.match ? this.props.match.params.id : null;
        
        axios.get(`http://localhost:8080/favorites/${id}`)
        .then(res => {
          this.setState({
            oneFavs: res.data
          })
        })
      }


  render() {
    const { title, ingridients, Directions, image} = this.state.oneFavs;

    let ingJSX = []
    // debugger
    if(ingridients){
      ingJSX = ingridients.map((item,index)=>{
        return <li key={index}>{item}</li>
    })
  }
    return (
      <div>
        <div className="showRecipe">
        <Header/>
        <div>
            <img className="showRecipe__imgOne" src={image} alt="img"/>
            <label className="showRecipe__recipeName">{title}</label>
            <label className="showRecipe__label">Ingredients</label>
                <ul className="showRecipe__list">
                    {/* <li className="showRecipe__steps">{ingJSX}</li> */}
                    {ingJSX}
                </ul>
            <label className="showRecipe__label">Steps</label>
            <p className="showRecipe__steps">{Directions}</p>
            </div>
        </div>
      </div>
    )
  }
}
