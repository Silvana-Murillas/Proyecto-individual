import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions"
import RecipeCard from "../RecipeCard/RecipeCard";
import Nav from "./Nav/Nav";
import Pages from "./Pagination";

const Home=()=>{
    const dispatch=useDispatch();
    const recip=useSelector(state=>state.recipes)
    const page=useSelector(state=>state.page)

    
    
    // debugger;

    // const [pag,setPage]=React.useState(1)
    //  setPage(page)
    console.log(page)
    const [recipesbypage,setrecipesbypage]=React.useState(9)
    const handlerOnclick=(e)=>{
        e.preventDefault();
        dispatch(actions.getRecipes())
     }
    if(recip==="name no found"){

        return (
            <div>
                <Nav></Nav>
                <button onClick={handlerOnclick}>refrescar</button>
              <img src="248989-P42VE0-381.jpg"></img>
                <h1>Name no found</h1>
            </div>
        )
    }

    const limitRecipes=page * recipesbypage;

    const beginRecipesbypage=limitRecipes - recipesbypage;
     
    let recipes;
    recipes=recip.slice(beginRecipesbypage,limitRecipes);
    
    // React.useEffect(()=>{
    //     dispatch(actions.getRecipes())
    // },[dispatch])

   
    
      
     
    return (
        <div>
            <Nav></Nav>
           <Pages></Pages>
            <button onClick={handlerOnclick}>refrescar</button>
          {recipes&&recipes.map(recipe=><RecipeCard name={recipe.name} image={recipe.image}  diets={recipe.diets} key={recipe.id} id={recipe.id} healthScore={recipe.healthScore}></RecipeCard>)}

        </div>
    )

 
}

export default Home;