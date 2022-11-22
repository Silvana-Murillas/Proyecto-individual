import React from "react";
// import {useDispatch,useSelector} from 'react-redux'
// import * as actions from "../../redux/actions"
import SearchBar from "./SearchBar";
import Alphabeticfilter from "./Filter_asc-des";
import Healthscorefilter from "./Filter_health_score";
import Dietfilter from "./Filterbydiet";
import { NavLink } from "react-router-dom";
import BdaApifilter from "./Filter_api_bd";
// import {useDispatch} from 'react-redux'
// import * as actions from "../../../redux/actions/index"
import "./Nav.css"


const Nav=()=>{
  
  const handlerOnclick=(e)=>{
    e.preventDefault();
    window.location.reload()
 }
    
    return (
        <div className="nav">
          <SearchBar></SearchBar>
          <Alphabeticfilter></Alphabeticfilter>
          <Healthscorefilter></Healthscorefilter>
          <Dietfilter></Dietfilter>
          <BdaApifilter></BdaApifilter>
          <button className="but" onClick={handlerOnclick}>Refresh</button>
          <NavLink to="/home/create">Create Recipe</NavLink>
        </div>
    )

 
}

export default Nav;