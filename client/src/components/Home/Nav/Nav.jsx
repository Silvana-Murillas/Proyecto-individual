import React from "react";
// import {useDispatch,useSelector} from 'react-redux'
// import * as actions from "../../redux/actions"
import SearchBar from "./SearchBar";
import Alphabeticfilter from "./Filter_asc-des";
import Healthscorefilter from "./Filter_health_score";
import Dietfilter from "./Filterbydiet";
import { NavLink } from "react-router-dom";
import Bd_ApiFilter from "./Filter_api_bd";
import {useDispatch} from 'react-redux'
import * as actions from "../../../redux/actions/index"
import "./Nav.css"
const Nav=()=>{
  const dispatch=useDispatch();
  const handlerOnclick=(e)=>{
    e.preventDefault();
    dispatch(actions.getRecipes())
 }
    
    return (
        <div className="nav">
          <SearchBar></SearchBar>
          <Alphabeticfilter></Alphabeticfilter>
          <Healthscorefilter></Healthscorefilter>
          <Dietfilter></Dietfilter>
          <Bd_ApiFilter></Bd_ApiFilter>
          <button className="but" onClick={handlerOnclick}>Refresh</button>
          <NavLink to="/home/create">Create Recipe</NavLink>
        </div>
    )

 
}

export default Nav;