import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';


export default class ShowRecipe extends Component {
  constructor(){
    super()
    this.recipeFavForm = React.createRef();
  }

  state = {
    oneRecipe: ''
  }

  componentDidMount(){
    const id = this.props.match ? this.props.match.params.id : null;
    
    axios.get(`http://localhost:8080/recipes/${id}`)
    .then(res => {
      this.setState({
        oneRecipe: res.data
      })
    })
  }
  clickme = (e) =>{
    e.preventDefault()
    console.log(e.target.name)
    if(e.target.name === 'icon') {
      let config = {
          method: 'POST',
          url: 'http://localhost:8080/favorites',
          data: {
            id: this.props.match ? this.props.match.params.id : null
            // img: this.recipeForm.current.img.value,
            // title: this.recipeForm.current.title.value,
            // ingridients: this.recipeForm.current.ingridients.value.split(','),
            // Directions: this.recipeForm.current.steps.value
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
         ///////
          window.location ="http://localhost:3000/favorites";
      } 
  }
    
  render() {

    const {title, ingridients, Directions, image} = this.state.oneRecipe;

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
      <div className="showRecipe">
      <Header/>
      <form ref = {this.recipeFavForm}>
      <img className="showRecipe__imgOne" id="img"src={image} alt="img"/>
      <label id="title"className="showRecipe__recipeName">{title}</label>
      <label className="showRecipe__label">Ingridients</label>
          <ul className="showRecipe__list">
            <li id="ingridients"className="showRecipe__steps">{ingJSX}</li>
          </ul>
          <img className="recipeFeed--iconOne"src="../Assets/Icons/SVG/Icon-add.svg" onClick= {this.clickme} name="icon"alt="icon"/>
      <label className="showRecipe__label">Steps</label>
          <p className="showRecipe__steps" id="directions">{Directions}</p>
          </form>
    </div>
    )
  }
}
