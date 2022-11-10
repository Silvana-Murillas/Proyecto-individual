import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions/index"

const CreateRecipe=()=>{
    const dispatch=useDispatch();

    const loadedDiets=useSelector(state=>state.diets)
    

    const [inputRecipe,setInputRecipe]=React.useState({
        name:'',
        image:'',
        summary:'',
        healthsScore:0,
        steps:'',
        diets:new Set(),   

    }
    )
    React.useEffect(()=>
    {
        dispatch(actions.getDiets())
    },[dispatch])

    const handlerOnchange=(e)=>{
        if (e.target.name === "diets"){
            
            let newDiets = inputRecipe.diets;
            if (!inputRecipe.diets.has(e.target.value)){
                inputRecipe.diets.add(e.target.value);
            } else {
                inputRecipe.diets.delete(e.target.value);
            }
            setInputRecipe({...inputRecipe, diets : newDiets})
           
        } else {
            setInputRecipe({...inputRecipe,[e.target.name]:e.target.value})
        }
    }

    const handlerOnSubmit=(e)=>{
        e.preventDefault();
        dispatch(actions.postRecipe(inputRecipe))
        alert("New recipe added successfully")
    }


    return(
        <div>
            <form onSubmit={handlerOnSubmit}>
                <label> Recipe Image: <input type="url" name='image' value={inputRecipe.image} onChange={handlerOnchange}></input></label>
                <label> Recipe Name: <input type="text" name="name" value={inputRecipe.name} onChange={handlerOnchange}></input></label>
                <label> Summary:<textarea type="text" size="255" name="summary" value={inputRecipe.summary} onChange={handlerOnchange}></textarea></label>

                <label> Health Score {inputRecipe.healthscore}:<input type="range" max="100" min="0" name= "healthScore" value={inputRecipe.healthscore} onChange={handlerOnchange}></input></label>
                <label> Steps:<textarea type="text" name="steps" value={inputRecipe.steps} onChange={handlerOnchange}></textarea></label>
                <h3>Types of diets</h3>
                {loadedDiets&&loadedDiets.map((d)=><label>{d.name}<input type="checkbox" value={d.id} name="diets" onClick={(e)=>handlerOnchange(e)} ></input></label>)}
                <input type="submit"></input>
            </form>

        </div>
    )

}

export default CreateRecipe;