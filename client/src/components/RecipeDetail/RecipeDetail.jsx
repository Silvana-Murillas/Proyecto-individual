import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions/index"
import { NavLink } from 'react-router-dom';

const RecipeDetail=(props)=>{
    const dispatch=useDispatch();
    const recipesdetail=useSelector(state=>state.recipesdetail)

    React.useEffect(()=>{
        dispatch(actions.getRecipebyid(props.match.params.id))
    },[dispatch])

    return (
        <div>
            <NavLink to="/home">Volver</NavLink>
          <h2>{recipesdetail.name}</h2>
          <img src={recipesdetail.image} alt={recipesdetail.name}/>
          {recipesdetail.dishTypes&&recipesdetail.dishTypes.map(d=><h3>{d}</h3>)}
          <h3>{recipesdetail.healthScore}</h3>
          {recipesdetail.diets&&recipesdetail.diets.map(d=><h3>{d.hasOwnProperty('name')?d.name:d}</h3>)}
          <p>{recipesdetail.summary}</p>
          {recipesdetail.steps&&recipesdetail.steps.map(s=><h4>{`${s.number} ${s.step}`}</h4>)}
        </div>
    )

}

export default RecipeDetail;