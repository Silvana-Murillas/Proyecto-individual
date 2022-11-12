import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions/index"
import { NavLink, useHistory } from 'react-router-dom';

const RecipeDetail=(props)=>{
    const dispatch=useDispatch();
    const recipesdetail=useSelector(state=>state.recipesdetail)
    let history = useHistory();

    React.useEffect(()=>{
        dispatch(actions.getRecipebyid(props.match.params.id))
    },[dispatch])

    const handlerClick=(e)=>{
        history.push("/home");
    }

    return (
        <div>
        <NavLink to="/home"><button onClick={handlerClick}>Volver</button></NavLink>
          <h1>Name recipe:</h1>
          <h2>{recipesdetail.name}</h2>
          <img src={recipesdetail.image} alt={recipesdetail.name}/>
          <h2>Dish Type</h2>
          {recipesdetail.dishTypes&&recipesdetail.dishTypes.map(d=><h3>{d}</h3>)}
          <h2>Health Score</h2>
          <h3>{recipesdetail.healthScore}</h3>
          <h2>Diet Types</h2>
          {recipesdetail.diets&&recipesdetail.diets.map(d=><h3>{d.hasOwnProperty('name')?d.name:d}</h3>)}
          <h2>Summary</h2>
         <p>{recipesdetail.summary&&recipesdetail.summary.replace(/(<([^>]+)>)/ig,'')}</p>
         <h2>Steps</h2>
          {recipesdetail.steps&& Array.isArray(recipesdetail.steps)? recipesdetail.steps.map(s=><h4>{`${s.number} ${s.step}`}</h4>):<p>{recipesdetail.steps}</p>}
        </div>
    )

}

export default RecipeDetail;