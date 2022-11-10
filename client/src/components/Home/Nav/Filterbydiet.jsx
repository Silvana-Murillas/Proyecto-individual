import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Dietfilter=()=>{
    const dispatch=useDispatch();
    const diets=useSelector(state=>state.diets)
    
    React.useEffect(()=>{
        dispatch(actions.getDiets())
    },[dispatch])
    
    let handleChange=(e)=>{ 
     e.preventDefault();      
     if(e.target.value==="remove"){
        dispatch(actions.getRecipes())
     }
     else {
        
        dispatch(actions.filterDiets(e.target.value))
     }
    
    }

    return (
        <div>
            <form>
                <select onChange={handleChange}>
                <option disabled selected>...Type of Diet</option>
                    <option value='remove'>Remove filter</option>
                    {diets&&diets.map(d=><option value={d.name}>{d.name}</option>)}
                </select>    
            </form>
        </div>
    )
}

export default Dietfilter;