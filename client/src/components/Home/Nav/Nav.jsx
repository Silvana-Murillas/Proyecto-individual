import React from "react";
// import {useDispatch,useSelector} from 'react-redux'
// import * as actions from "../../redux/actions"
import SearchBar from "./SearchBar";
import Alphabeticfilter from "./Filter_asc-des";
import Healthscorefilter from "./Filter_health_score";
import Dietfilter from "./Filterbydiet";
import { NavLink } from "react-router-dom";
import Bd_ApiFilter from "./Filter_api_bd";
const Nav=()=>{
    
    return (
        <div>
          <SearchBar></SearchBar>
          <Alphabeticfilter></Alphabeticfilter>
          <Healthscorefilter></Healthscorefilter>
          <Dietfilter></Dietfilter>
          <Bd_ApiFilter></Bd_ApiFilter>
          <NavLink to="/home/create"><button>Create Recipe</button></NavLink>
        </div>
    )

 
}

export default Nav;