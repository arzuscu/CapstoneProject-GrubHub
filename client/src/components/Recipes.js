import React, { Component } from 'react'
import axios from 'axios';
import RecipeFeed from './RecipeFeed';

export default class Recipes extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          recipes:[]
        }
      }
      state = {
        search: ""
      }
    
      componentDidMount(){
        let url = "http://localhost:8080/recipes";
        axios.get(url)
        .then (res =>{
          this.setState({ recipes:res.data });
        })
        .catch ((err) => {
          console.log(err)
        })
      }
      settingState = (change) => {

      } 

  render() {
   
    return (
      <div>
        <RecipeFeed recipes={this.state.recipes} search={this.state.search}/>
      </div>
    )
  }
}
