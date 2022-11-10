import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Healthscorefilter=()=>{
    const dispatch=useDispatch();
   

    let handleChange=(e)=>{
        e.preventDefault();
        if(e.target.value==='remove'){
            dispatch(actions.getRecipes())
        }
    
        if(e.target.value==="Lowest to Highest"){
            dispatch(actions.filterLtoH())
        } 
        
        if(e.target.value==="Highest to Lowest"){
            dispatch(actions.filterHtoL())
        }
    }
     
   

    return (
        <div>
            <form>
                <select onChange={handleChange}>
                    <option disabled selected>...HealthScore</option>
                    <option value="remove">Remove filter</option>
                    <option value="Lowest to Highest">Lowest to Highest</option>
                    <option value="Highest to Lowest">Highest to Lowest</option>
                </select>    
            </form>
        </div>
    )

 
}

export default Healthscorefilter;