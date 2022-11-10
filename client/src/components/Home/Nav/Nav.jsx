import React from "react";
// import {useDispatch,useSelector} from 'react-redux'
// import * as actions from "../../redux/actions"
import SearchBar from "./SearchBar";
import Alphabeticfilter from "./Filter_asc-des";
import Healthscorefilter from "./Filter_health_score";
import Dietfilter from "./Filterbydiet";
import { NavLink } from "react-router-dom";

const Nav=()=>{
    
    return (
        <div>
          <SearchBar></SearchBar>
          <Alphabeticfilter></Alphabeticfilter>
          <Healthscorefilter></Healthscorefilter>
          <Dietfilter></Dietfilter>
          <NavLink to="/home/create"><button>Create Recipe</button></NavLink>
        </div>
    )

 
}

export default Nav;