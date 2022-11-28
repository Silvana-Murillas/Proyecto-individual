import React from "react";
import {useDispatch} from 'react-redux'
import * as actions from "../../../redux/actions/index"
import "./SearchBar.css"


const SearchBar=()=>{
    const dispatch=useDispatch();
    const[inputName,setinputname]=React.useState('')

    let handleChange=(e)=>{
     setinputname(e.target.value)
    }
     
    let handleSubmit=(e)=>{
        e.preventDefault();
        
        dispatch(actions.getRecipesbyquery(inputName))
    }

    return (
        <div >
        <form className="search" onSubmit={handleSubmit}>

            <input placeholder="Search by Name" type='text' name="name" onChange={handleChange} value={inputName}></input>
            <button type="submit">🔍</button>
        </form>
        </div>
    )

 
}

export default SearchBar;