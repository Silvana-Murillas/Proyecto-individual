import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions"
import RecipeCard from "../RecipeCard/RecipeCard";
import Nav from "./Nav/Nav";
import Pages from "./Pagination";
import "./Home.css"

const Home=()=>{
    const dispatch=useDispatch();
    const recip=useSelector(state=>state.recipes)
    const page=useSelector(state=>state.page)
      
    React.useEffect(()=>{
    dispatch(actions.getRecipes())
    },[dispatch])
    
    
    
   
    // const [recipesbypage,setrecipesbypage]=React.useState(9)
    
    if(recip.hasOwnProperty('error')){

        return (
            <div>
                <Nav></Nav>
              <img src="404.gif"></img>
             
            </div>
        )
    }

    const limitRecipes=page * 9;

    const beginRecipesbypage=limitRecipes - 9;
     
    let recipes;
    recipes=recip.slice(beginRecipesbypage,limitRecipes);
     
     
    return (
        <div >
            <Nav></Nav>
           <Pages page={page}></Pages>  
             <div className="cards">
          {recipes&&recipes.map(recipe=><RecipeCard name={recipe.name} image={recipe.image}  diets={recipe.diets} key={recipe.id} id={recipe.id} healthScore={recipe.healthScore}></RecipeCard>)}
          </div>
        </div>
    )

 
}

export default Home;