import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import {Link} from 'react-router-dom';

export default class ShowFavs extends Component {
    state = {
        oneFavs: ''
      }
    
      componentDidMount(){
          console.log(this.props.match)
        const id = this.props.match ? this.props.match.params.id : null;
        
        axios.get(`http://localhost:8080/favorites/${id}`)
        .then(res => {
          this.setState({
            oneFavs: res.data
          })
        })
      }


  render() {
    const {title, ingridients, Directions, image} = this.state.oneFavs;

    console.log('ingriedients',ingridients)
    let output = '';
    let ingJSX = []
    // debugger
    if(ingridients){
      ingJSX = ingridients.map((item)=>{
        
        console.log(item)
        output = <li>{item}</li>
        return output
    })

    console.log('jsx',ingJSX)
    console.log('output',output)
  }
    return (
      <div>
        <div className="showRecipe">
        <Header/>
            <img className="showRecipe__imgOne" src={image} alt="img"/>
            <label className="showRecipe__recipeName">{title}</label>
            <label className="showRecipe__label">Ingridients</label>
                <ul className="showRecipe__list">
                    <li className="showRecipe__steps">{ingJSX}</li>
                </ul>
            <label className="showRecipe__label">Steps</label>
            <p className="showRecipe__steps">{Directions}</p>
        </div>
      </div>
    )
  }
}
