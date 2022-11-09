import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Home from './components/Home/Home'
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <div>
        <h1>hola</h1>
          <NavLink to='/home'>
            <button type="submit">Let's start</button>
          </NavLink>
        </div>
      </Route>
      
      <Route exact path="/home" component={Home}/>
      <Route exact path="/home/create" component={CreateRecipe}/>
      <Route exact path="/home/recipe/:id" component={RecipeDetail}/>
    </div>
  );
}

export default App;
