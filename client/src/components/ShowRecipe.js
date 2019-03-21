import React, { Component } from 'react'
// import ShowRecipeCard from './ShowRecipeCard';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';


export default class ShowRecipe extends Component {

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
    
  render() {
   
    const {title, ingridients, Directions, image} = this.state.oneRecipe;

    //   const recipeDetail = this.props.recipeDetail;
    //   console.log(recipeDetail);
    //   let splitIng = recipeDetail.ingridients.split(',')
    //   console.log(splitIng);
    //   let splitIng = recipeDetail.ingridients.split(',').map((item)=>{
    //   return (
    // console.log('props',this.props.recipes)
    //     <Link to={`/recipes/${item.id}`} key={item.id} >
    //         <ShowRecipeCard image={item.image} title={item.title} ingridients={item.ingridients} directions={item.directions} />
    //     </Link>
    //     )
    // })

    
    console.log(ingridients)
    let output = '';
    // debugger
    if(ingridients){
      const ingJSX = ingridients.forEach((item)=>{
        
        console.log(item)
        output = <li>{item}</li>
        return output
    })

    console.log(ingJSX)
    }
   

    return (
      <div className="showRecipe">
      <Header/>
      <img className="showRecipe__imgOne" src={image} alt="img"/>
      <label className="showRecipe__recipeName">{title}</label>
      <label className="showRecipe__label"></label>
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
          <p className="showRecipe__steps">{Directions}</p>
    </div>
    )
  }
}
