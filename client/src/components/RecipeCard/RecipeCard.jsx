import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const RecipeCard=({name,image,diets,id})=>{
    return (
        <div>
            <Link to={`/home/create/${id}`}><h2>{name}</h2></Link>
            <img src={image} alt={name} />
            {diets.map(diet=><h3>{diet.hasOwnProperty('name')?diet.name:diet}</h3>)}
        </div>
    )

}

export default RecipeCard;