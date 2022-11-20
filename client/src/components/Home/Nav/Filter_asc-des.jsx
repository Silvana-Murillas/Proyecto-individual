import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Alphabeticfilter=()=>{
    const dispatch=useDispatch();
    // const activesfilters=useSelector(state=>state.filter)

    let handleChange=(e)=>{
        e.preventDefault();
    
        if(e.target.value==='A-Z'){
            dispatch(actions.filterAZ())
            dispatch(actions.typefilter(e.target.value))
            
        } 
    
        if(e.target.value==='Z-A'){
            dispatch(actions.filterZA())
            dispatch(actions.typefilter(e.target.value))
        }
    }
     

    return (
        <div>
            <form>
                <select onChange={handleChange} >
                <option disabled selected> Order Alphabetic</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>    
            </form>
        </div>
    )

 
}

export default Alphabeticfilter;