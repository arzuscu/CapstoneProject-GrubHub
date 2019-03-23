import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Recipes from './components/Recipes';
import ShowRecipeCard from './components/ShowRecipeCard';
import ShowRecipe from './components/ShowRecipe';
import FavRecipe from './components/FavRecipe';
import CreateRecipe from './components/CreateRecipe';
import ShowFavs from './components/ShowFavs';

class App extends Component {
  // state = {
  //   search: ""
  // }
  render() {
    return (
      <Router>
        <div className="App">
        
        <Switch>
          <Route path="/" exact component={ Login }/>
          <Route path="/recipes" exact render={(props) => {
            return (
              <>
                <Header/>
                <Recipes {...props}/>
              </>
            )
          }}/>
          <Route path='/recipes/:id' exact component={ ShowRecipe }/>
          {/* <Route path="/recipes/:id" render={() => {
            return (
              <>
                <Header/>
                <ShowRecipe />
              </>
            )
          }}/> */}
          <Route path="/favorites" exact render={(props) => {
            return (
              <>
                <Header/>
                <FavRecipe {...props}/>
                {/* <FavRecipe /> */}
              </>
            )
          }}/>
          <Route path='/favorites/:id' exact component={ ShowFavs }/>
          <Route path="/createrecipe" exact render={(props) => {
            return (
              <>
                <Header/>
                <CreateRecipe {...props}/>
              </>
            )
          }}/>
          {/* <ShowFavs /> */}
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
