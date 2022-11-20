import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from "../../redux/actions"
import "./Pagination.css"


const Pages=({page})=>{
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

    const handlerPrev=(e,page)=>{
        e.preventDefault();
        if(page===1){
            alert("No hay mas paginas")
            dispatch(actions.sendPage(page))
        }
        dispatch(actions.sendPage(page-1))
    }

    const handlerNext=(e,page)=>{
        if(page===pages[pages.length-1]){
            alert("No hay mas paginas")
            dispatch(actions.sendPage(page))
        }
        e.preventDefault();
        dispatch(actions.sendPage(page+1))
    }

    return (
        <div >
            <button className="pag" onClick={(e)=>handlerPrev(e,page)}>⋘</button>
          {pages&&pages.map(p=><button key={p} className={p===page?"pageactual":"pag"} onClick={(e)=>handlerClick(e,p)}>{p}</button>)}
          <button className="pag" onClick={(e)=>handlerNext(e,page)}>⋙</button>
        </div>
    )

 
}

export default Pages;