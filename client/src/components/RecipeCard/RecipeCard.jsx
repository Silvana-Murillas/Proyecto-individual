import React from "react";
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import * as actions from "../../redux/actions"
import "./RecipeCard.css"

const RecipeCard=({name,image,diets,id,healthScore})=>{
    const dispatch=useDispatch()
    const handerClick=(e,id)=>{
        e.preventDefault();
        if(window.confirm("Are you sure you want to delete this recipe?")){
            dispatch(actions.deleteRecipe(id))
            window.location.reload()
        }
          
    }
    return (
        <div className="card">
            <img src={image} alt={name} />
            <Link to={`/home/recipe/${id}`}>{name}</Link>
            <h2>Health Score:</h2>
            <p>{healthScore}</p>
            <h2>Types of Diets:</h2>
            {diets.map(diet=><p key={diet}>{diet.hasOwnProperty('name')?diet.name:diet}</p>)}
            { /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)&&<button key={id} className="btn" onClick={(e)=>handerClick(e,id)}>Delete</button>}
        </div>
    )

}

export default RecipeCard;