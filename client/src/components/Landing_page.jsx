// import './App.css';
import React from "react";
import "./Landing.css"
// import { Route } from "react-router-dom";
// import Home from './components/Home/Home'
// import CreateRecipe from './components/CreateRecipe/CreateRecipe';
// import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import {NavLink } from 'react-router-dom';
// import {useDispatch} from 'react-redux'
// import * as actions from "../redux/actions/index"

function Landing() {
 
  return (
    <div className="background"> 
      
          <NavLink to='/home'>
            Let's eat
          </NavLink>   
      
    </div>
  );
}

export default Landing;
