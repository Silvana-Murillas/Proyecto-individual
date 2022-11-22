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
        console.log(inputName)
        dispatch(actions.getRecipesbyquery(inputName))
    }

    return (
        <div >
        <form className="search" onSubmit={handleSubmit}>

            <input placeholder="Buscar por nombre" type='text' name="name" onChange={handleChange} value={inputName}></input>
            <button type="submit">🔍</button>
        </form>
        </div>
    )

 
}

export default SearchBar;