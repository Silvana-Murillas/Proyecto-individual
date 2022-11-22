import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Dietfilter=()=>{
    const dispatch=useDispatch();
    const diets=useSelector(state=>state.diets)
    const activesorder=useSelector(state=>state.order)
    
    React.useEffect(()=>{
        dispatch(actions.getDiets())
    },[dispatch])
    
    let handleChange=(e)=>{ 
     e.preventDefault();          
        dispatch(actions.filterDiets(e.target.value))
        if(activesorder==="A-Z"){dispatch(actions.filterAZ())}
        if(activesorder==="Z-A"){dispatch(actions.filterZA())}
        if(activesorder==="Lowest to Highest"){dispatch(actions.filterLtoH())}
        if(activesorder==="Highest to Lowest"){dispatch(actions.filterHtoL())}  
           
     
    
    }

    return (
        <div>
            <form>
                <select onChange={handleChange}>
                <option disabled selected>...Filter by type of Diet</option>
                    {diets&&diets.map(d=><option key={d.id} value={d.name}>{d.name}</option>)}
                </select>    
            </form>
        </div>
    )
}

export default Dietfilter;