import { GET_ALL_RECIPES,GET_RECIPE_DETAIL,GET_DIETS,CREATE_RECIPE,GET_ALL_RECIPES_BYNAME,FILTER_AZ,FILTER_ZA } from "../actions";

const initialState={
  recipes:[],
  recipesdetail:{}
}

const rootReducer=(state=initialState,action)=>{
  
  switch (action.type){
    case GET_ALL_RECIPES:
        
        return({...state,recipes:action.payload});

    case GET_ALL_RECIPES_BYNAME:
        return ({...state,recipes:action.payload});
    
    case FILTER_AZ:

      let result=state.recipes.sort(
        function(a, b){
          if (a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
          }
          return 0;
        })
      
      return ({...state,recipes:Array.from(result, x => x)});
      
    case FILTER_ZA:

      let filter=[...state.recipes]

      filter=filter.sort(
        function(a, b){
          if (a.name.toLowerCase() < b.name.toLowerCase()){
            return 1
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()){
            return -1
          }
          return 0
        })

        return ({...state,recipes:filter});

        case GET_RECIPE_DETAIL:
          return ({...state,recipesdetail:action.payload});
      

    
    default: return {...state}  
  }
  
}
export default rootReducer;