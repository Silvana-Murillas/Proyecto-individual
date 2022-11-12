import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const RecipeCard=({name,image,diets,id,healthScore})=>{
    return (
        <div>
            <h2>Name:</h2>
            <Link to={`/home/recipe/${id}`}><h3>{name}</h3></Link>
            <img src={image} alt={name} />
            <h2>Health Score:</h2>
            <h3>{healthScore}</h3>
            <h2>Types of Diets:</h2>
            {diets.map(diet=><h3>{diet.hasOwnProperty('name')?diet.name:diet}</h3>)}
        </div>
    )

}

export default RecipeCard;