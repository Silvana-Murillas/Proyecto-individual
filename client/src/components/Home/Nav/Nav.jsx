import React from "react";
// import {useDispatch,useSelector} from 'react-redux'
// import * as actions from "../../redux/actions"
import SearchBar from "./SearchBar";
import Alphabeticfilter from "./Filter_asc-des";

const Nav=()=>{
    
    return (
        <div>
          <SearchBar></SearchBar>
          <Alphabeticfilter></Alphabeticfilter>

        </div>
    )

 
}

export default Nav;