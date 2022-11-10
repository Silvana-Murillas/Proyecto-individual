import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Alphabeticfilter=()=>{
    const dispatch=useDispatch();

    let handleChange=(e)=>{
        e.preventDefault();
       
        if(e.target.value==='remove'){
            dispatch(actions.getRecipes())
        }
    
        if(e.target.value==='A-Z'){
            dispatch(actions.filterAZ())
        } 
    
        if(e.target.value==='Z-A'){
            dispatch(actions.filterZA())
        }
    }
     

    return (
        <div>
            <form>
                <select onChange={handleChange} >
                <option disabled selected>...Alphabetic</option>
                    <option value="remove">Remove filter</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>    
            </form>
        </div>
    )

 
}

export default Alphabeticfilter;