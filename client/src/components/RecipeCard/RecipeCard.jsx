import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import "./RecipeCard.css"

const RecipeCard=({name,image,diets,id,healthScore})=>{
    return (
        <div className="card">
            <img src={image} alt={name} />
            <Link to={`/home/recipe/${id}`}>{name}</Link>
            <h2>Health Score:</h2>
            <p>{healthScore}</p>
            <h2>Types of Diets:</h2>
            {diets.map(diet=><p>{diet.hasOwnProperty('name')?diet.name:diet}</p>)}
        </div>
    )

}

export default RecipeCard;