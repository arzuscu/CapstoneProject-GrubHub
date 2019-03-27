import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Recipes from './components/Recipes';
import ShowRecipe from './components/ShowRecipe';
import FavRecipe from './components/FavRecipe';
import CreateRecipe from './components/CreateRecipe';
import ShowFavs from './components/ShowFavs';
// import Search from './components/Search';

class App extends Component {
  state ={
    search: ""

  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
        
        <Switch>
          <Route path="/" exact component={ Login }/>
          <Route path="/recipes" exact render={(props) => {
            return (
              <>
                <Header search={this.handleSearch}/>
                <Recipes {...props} search={this.state.search}/>
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
                <Header search={this.handleSearch}/>
                <FavRecipe {...props} search={this.state.search}/>
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
          {/* <Route path="/search" component={Search}/> */}
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
