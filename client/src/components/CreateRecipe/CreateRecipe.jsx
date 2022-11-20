import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions/index"
import { NavLink } from "react-router-dom";
import "./CreateRecipe.css"

export function validate(input){
    console.log(input)
    let error={};
    if(!input.name){
       error.name='Name is required';
    }
    if(typeof input.name=== "number"){
        error.name="Name can't be a number"
    }
    if (input.name.length>25){
        error.name="Name must have maximum 25 characteres";
    }
    if(!input.summary){
        error.summary="Summary is required";
    }
    if(input.image &&!/https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(input.image)){
        error.image="URL invalid, must be a url";
    }
    if (input.healthScore<0||input.healthScore>100){
        error.healthScore="HealthScore must be between 0-100";
    }
    console.log(error)
    return error;
}

const CreateRecipe=()=>{
    const dispatch=useDispatch();

    const loadedDiets=useSelector(state=>state.diets)
    
    const [errors,seterrors]=React.useState({});

    const [inputRecipe,setInputRecipe]=React.useState({
        name:'',
        image:undefined,
        summary:'',
        healthScore:0,
        steps:undefined,
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
            seterrors(validate({...inputRecipe,[e.target.name]:e.target.value}))
            setInputRecipe({...inputRecipe,[e.target.name]:e.target.value})
        }
    }

    const handlerOnSubmit=(e)=>{
        e.preventDefault();
        dispatch(actions.postRecipe(inputRecipe))
        //alert("New recipe added successfully")
        setInputRecipe({
            name:'',
            image:null,
            summary:'',
            healthScore:0,
            steps:'',
            diets:new Set(),   
    
        })
    }
    


    return(
        <div className="form">

<NavLink to='/home'>
            <button type="submit" onClick={(e)=>{dispatch(actions.getRecipes())}}>◀</button>
          </NavLink>
            <form onSubmit={handlerOnSubmit}>
                <h2>Create Recipe</h2>
                <label className="lab" id="imgl"> Recipe Image (URL): <input className={errors.image&&"error"} id="inputimg" type="url" name='image' value={inputRecipe.image} onChange={handlerOnchange}></input></label>
                {errors.image&&<p>{errors.image}</p>}
                <label className="lab"> Recipe Name : <input className={errors.name&&"error"} id="inputname" type="text" name="name" value={inputRecipe.name} onChange={handlerOnchange}></input></label>
                {errors.name&&<p>{errors.name}</p>}
                <label id="label"> Summary:</label>
                <textarea className={errors.summary&&"error"} type="text" size="255" name="summary" value={inputRecipe.summary} onChange={handlerOnchange}></textarea>
                {errors.summary&&<p>{errors.summary}</p>}
                <label id="label">HealthScore:</label>
                <label id="labelhs">  {inputRecipe.healthScore} <input type="range" max="100" min="0" name= "healthScore" value={inputRecipe.healthScore} onChange={handlerOnchange}></input></label>
                {errors.healthScore&&<p>{errors.healthScore}</p>}
                <label id="label"> Steps:</label>
                <textarea  type="text" name="steps" value={inputRecipe.steps} onChange={handlerOnchange}></textarea>
                <h3>Types of diets</h3>
                <div className="check">
                {loadedDiets&&loadedDiets.map((d)=><label><input key={d.id} type="checkbox" value={d.id} name="diets" onClick={(e)=>handlerOnchange(e)} ></input>{d.name}</label>)}
                </div>
                <input value="Create" id="sub" type="submit" disabled={!inputRecipe.name||!inputRecipe.summary||errors.name||errors.summary||errors.healthScore||errors.image}></input>
            </form>

        </div>
    )

}

export default CreateRecipe;