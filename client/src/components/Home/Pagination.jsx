import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions"


const Pages=()=>{
    const recipes=useSelector(state=>state.recipes)
    const dispatch=useDispatch();
    let pages=[]

    if(recipes){
    for(let i=1;i<=Math.ceil(recipes.length/9);i++){
        pages.push(i);
    }
    } 

    const handlerClick=(e,p)=>{
        e.preventDefault();
        dispatch(actions.sendPage(p))
    }

    return (
        <div>
          {pages&&pages.map(p=><button onClick={(e)=>handlerClick(e,p)}>{p}</button>)}
        </div>
    )

 
}

export default Pages;