import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const SearchBar=()=>{
    const dispatch=useDispatch();
    const[inputName,setinputname]=React.useState('')

    let handleChange=(e)=>{
     setinputname(e.target.value)
    }
     
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputName)
        dispatch(actions.getRecipesbyName(inputName))
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>

            <input type='text' name="name" onChange={handleChange} value={inputName}></input>
            <button type="submit">Buscar</button>
        </form>
        </div>
    )

 
}

export default SearchBar;