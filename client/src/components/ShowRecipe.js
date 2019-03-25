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
    if(e.target.name === 'icon') {
      let config = {
          method: 'POST',
          url: 'http://localhost:8080/favorites',
          data: {
            id: this.props.match ? this.props.match.params.id : null
            
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

    const {id, title, ingridients, Directions, image} = this.state.oneRecipe;

      let ingJSX = []
      // debugger
      if(ingridients){
        ingJSX = ingridients.map((item,index)=>{
          return <li key={index}>{item}</li>
      })

    }
   

    return (
      <div className="showRecipe">
      <Header/>
      <form ref = {this.recipeFavForm} key={id}>
      <img className="showRecipe__imgOne" id="img"src={image} alt="img"/>
      <label id="title"className="showRecipe__recipeName">{title}</label>
      <label className="showRecipe__label">Ingridients</label>
          <ul className="showRecipe__list">
            {/* <li id="ingridients"className="showRecipe__steps"></li> */}
            {ingJSX}
          </ul>
          <div className="recipeFeed__divIcon">
            <img className="recipeFeed--iconOne"src="../Assets/Icons/SVG/Icon-add.svg" onClick= {this.clickme} name="icon"alt="icon"/>
          </div>
      <label className="showRecipe__label">Steps</label>
          <p className="showRecipe__steps" id="directions">{Directions}</p>
          </form>
    </div>
    )
  }
}
