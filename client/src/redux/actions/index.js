import axios from 'axios';
 export const GET_ALL_RECIPES='GET_ALL_RECIPES';
 export const GET_ALL_RECIPES_BYNAME='GET_ALL_RECIPES_BYNAME'
 export const GET_RECIPE_DETAIL="GET_RECIPE_DETAIL";
 export const GET_DIETS="GET_DIETS"
 export const CREATE_RECIPE="CREATE_RECIPE"
 export const FILTER_AZ='FILTER_AZ'
 export const FILTER_ZA='FILTER_ZA'
 export const FILTERL_H='FILTERL_H'
 export const FILTERH_L='FILTERH_L'
 export const FILTERDIETS="FILTERDIETS"

 export const getRecipes=()=>{
    return function(dispatch){
        return axios.get('http://localhost:3001/recipes')
        .then(r=>r.data)
        .then(data=>dispatch({type:GET_ALL_RECIPES,payload:data}))
    }
 }

 export const getRecipesbyName=(name)=>{
    return function(dispatch){
        return axios.get(`http://localhost:3001/recipes?name=${name}`)
        .then(r=>r.data)
        .then(data=>dispatch({type:GET_ALL_RECIPES_BYNAME,payload:data}))
        .catch(error=>alert(error.message))
    }
 }

 export const filterAZ=()=>{
    return {type:FILTER_AZ}
 }
 export const filterZA=()=>{
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

 export const getRecipebyid=(id)=>{
   return function(dispatch){
       return axios.get(`http://localhost:3001/recipes/${id}`)
       .then(r=>r.data)
       .then(data=>dispatch({type:GET_RECIPE_DETAIL,payload:data}))
   }
}

export const getDiets=()=>{
   return function(dispatch){
       return axios.get(`http://localhost:3001/diets`)
       .then(r=>r.data)
       .then(data=>dispatch({type:GET_DIETS,payload:data}))
   }
}

export const postRecipe=({ name,image,summary,healthscore,steps,diets})=>{
 return function(dispatch){
   return axios.post('http://localhost:3001/recipes',{name,image,summary,healthscore,steps,diets:Array.from(diets)})
   .then(r=>r.data)
   .then(data=>data)
   .catch(error=>error.message)
 }

}


