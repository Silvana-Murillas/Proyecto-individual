import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Bd_ApiFilter=()=>{
    const dispatch=useDispatch();

    let handleChange=(e)=>{
        e.preventDefault();
       
        if(e.target.value==='remove'){
            dispatch(actions.getRecipes())
        }
    
        if(e.target.value==='Created Recipes'){
            dispatch(actions.getBd())
        } 
    
        if(e.target.value==='Api Recipes'){
            dispatch(actions.getApi())
        }
    }
     

    return (
        <div>
            <form>
                <select onChange={handleChange} >
                <option disabled selected>...Filter by source</option>
                    <option value="remove">Remove filter</option>
                    <option value="Created Recipes">Created Recipes</option>
                    <option value="Api Recipes">Api Recipes</option>
                </select>    
            </form>
        </div>
    )

 
}

export default Bd_ApiFilter;