import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../../redux/actions/index"


const Alphabeticfilter=()=>{
    const dispatch=useDispatch();
    const[optionselect,setoption]=React.useState({value:'remove'})

    let handleChange=(e)=>{
       
     setoption({value:e.target.value})
     console.log(e.target.value)
     if(e.target.value==='remove'){
        dispatch(actions.getRecipes())
    }
    
    if(e.target.value==='A-Z'){
        console.log(e.target.value)
        dispatch(actions.filterAZ())

    } 
    
    if(e.target.value==='Z-A'){
        dispatch(actions.filterZA())
    }
    }
     
    // let handleSubmit=(e)=>{
    //     console.log(optionselect);
    //      e.preventDefault();
    //     if(optionselect.value==='remove'){
    //         dispatch(actions.getRecipes())
    //     }else if(optionselect.value==='A-Z'){
    //         dispatch(actions.filterAZ())

    //     }else if(optionselect.value==='Z-A'){
    //         dispatch(actions.filterZA())
    //     }
        
    // }

    return (
        <div>
            <form>
                <select onChange={handleChange} value={optionselect.value}>
                    <option value="remove">Remove filter</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>    
            </form>
        </div>
    )

 
}

export default Alphabeticfilter;