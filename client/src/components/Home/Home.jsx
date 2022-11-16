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
    
    
    // debugger;

    // const [pag,setPage]=React.useState(1)
    //  setPage(page)
   
    const [recipesbypage,setrecipesbypage]=React.useState(9)
    
    if(recip==="name no found"){

        return (
            <div>
                <Nav></Nav>
              <img src="248989-P42VE0-381.jpg"></img>
                <h1>Name no found</h1>
            </div>
        )
    }

    const limitRecipes=page * recipesbypage;

    const beginRecipesbypage=limitRecipes - recipesbypage;
     
    let recipes;
    recipes=recip.slice(beginRecipesbypage,limitRecipes);
     
     
    return (
        <div >
            <Nav></Nav>
           <Pages></Pages>  
             <div className="cards">
          {recipes&&recipes.map(recipe=><RecipeCard name={recipe.name} image={recipe.image}  diets={recipe.diets} key={recipe.id} id={recipe.id} healthScore={recipe.healthScore}></RecipeCard>)}
          </div>
        </div>
    )

 
}

export default Home;