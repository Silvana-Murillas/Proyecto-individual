import axios from 'axios';
 export const GET_ALL_RECIPES='GET_ALL_RECIPES';
 export const GET_ALL_RECIPES_BYQUERY='GET_ALL_RECIPES_BYQUERY'
 export const GET_RECIPE_DETAIL="GET_RECIPE_DETAIL";
 export const GET_DIETS="GET_DIETS"
 export const CREATE_RECIPE="CREATE_RECIPE"
 export const FILTER_AZ='FILTER_AZ'
 export const FILTER_ZA='FILTER_ZA'
 export const FILTERL_H='FILTERL_H'
 export const FILTERH_L='FILTERH_L'
 export const FILTERDIETS="FILTERDIETS"
 export const SENDPAGE='SENDPAGE'
 export const GET_BD="GET_BD"
 export const GET_API="GET_API"
 export const TYPE_FILTER="TYPE_FILTER"

 export const getRecipes=()=>{
    return function(dispatch){
        return axios.get('https://proyecto-individual-production-226b.up.railway.app/recipes')
        .then(r=>r.data)
        .then(data=>dispatch({type:GET_ALL_RECIPES,payload:data}))
        .catch(error=>alert(error.message))
    }
 }

 export const getRecipesbyquery=(name,source)=>{
    return function(dispatch){
      let query;
      if(name){
         query=`name=${name}`
      }
      if(source){
         if(query){
            query+=`&source=${source}`
         }
         else {
            query=`source=${source}`
         }
      }
        return axios.get(`https://proyecto-individual-production-226b.up.railway.app/recipes?${query}`)
        .then(r=>r.data)
        .then(data=>dispatch({type:GET_ALL_RECIPES_BYQUERY,payload:data}))
        .catch(error=>dispatch({type:GET_ALL_RECIPES_BYQUERY, payload:error.response.data}))
    }
 }

 export const filterAZ=()=>{
    return {type:FILTER_AZ}
 }
 export const filterZA=()=>{
   console.log("FILTER_ZA")
    return {type:FILTER_ZA}
 }
 export const filterLtoH=()=>{
   return {type:FILTERL_H}
 }

 export const filterHtoL=()=>{
  return {type:FILTERH_L}
 }

 export const filterDiets=(diet)=>{
   console.log(diet)
   return {type:FILTERDIETS,payload:diet}
 }

 export const typefilter=(filter)=>{
   return {type:TYPE_FILTER,payload:filter}
}

 export const getRecipebyid=(id)=>{
   return function(dispatch){
       return axios.get(`https://proyecto-individual-production-226b.up.railway.app/recipes/${id}`)
       .then(r=>r.data)
       .then(data=>dispatch({type:GET_RECIPE_DETAIL,payload:data}))
       .catch(error=>alert(error.message))
   }
}

export const getDiets=()=>{
   return function(dispatch){
       return axios.get(`https://proyecto-individual-production-226b.up.railway.app/diets`)
       .then(r=>r.data)
       .then(data=>dispatch({type:GET_DIETS,payload:data}))
       .catch(error=>alert(error.message))
   }
}

export const postRecipe=({ name,image,summary,healthScore,steps,diets})=>{
 return function(dispatch){
   return axios.post('https://proyecto-individual-production-226b.up.railway.app/recipes',{name,image,summary,healthScore,steps,diets:Array.from(diets)})
   .then(r=>r.data)
   .then(data=>alert(data))
   .catch(error=>alert(`Sorry something go wrong: ${error.message}`))
 }

}

export const deleteRecipe=(id)=>{
   return function(dispatch){
     return axios.delete(`https://proyecto-individual-production-226b.up.railway.app/recipes/${id}`)
     .then(r=>r.data)
     .then(data=>alert(data))

     .catch(error=>alert(`Sorry something go wrong: ${error.message}`))
   }
  
  }



export const sendPage=(page)=>{
   return {type:SENDPAGE, payload:page}
}




