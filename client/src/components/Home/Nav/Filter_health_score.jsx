import React from "react";
import {useDispatch} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Healthscorefilter=()=>{
    const dispatch=useDispatch();
   

    let handleChange=(e)=>{
        e.preventDefault();
       
        if(e.target.value==="Lowest to Highest"){
            dispatch(actions.filterLtoH())
            dispatch(actions.typefilter(e.target.value))
            
        } 
        
        if(e.target.value==="Highest to Lowest"){
            dispatch(actions.filterHtoL())
            dispatch(actions.typefilter(e.target.value))
           
        }
    }
     
   

    return (
        <div>
            <form>
                <select onChange={handleChange}>
                    <option disabled selected>Order by HealthScore</option>
                    <option value="remove">Remove filter</option>
                    <option value="Lowest to Highest">Lowest to Highest</option>
                    <option value="Highest to Lowest">Highest to Lowest</option>
                </select>    
            </form>
        </div>
    )

 
}

export default Healthscorefilter;