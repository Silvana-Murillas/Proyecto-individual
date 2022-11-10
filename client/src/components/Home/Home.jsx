import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions"
import RecipeCard from "../RecipeCard/RecipeCard";
import Nav from "./Nav/Nav";

const Home=()=>{
    const dispatch=useDispatch();
    const recipes=useSelector(state=>state.recipes)

    // React.useEffect(()=>{
    //     dispatch(actions.getRecipes())
    // },[dispatch])

    return (
        <div>
            <Nav></Nav>
          {recipes&&recipes.map(recipe=><RecipeCard name={recipe.name} image={recipe.image}  diets={recipe.diets} key={recipe.id} id={recipe.id} ></RecipeCard>)}

        </div>
    )

 
}

export default Home;