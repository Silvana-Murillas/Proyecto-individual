import { GET_ALL_RECIPES,GET_RECIPE_DETAIL,GET_DIETS,GET_ALL_RECIPES_BYQUERY,FILTER_AZ,FILTER_ZA,FILTERL_H,FILTERH_L,FILTERDIETS,SENDPAGE,TYPE_FILTER } from "../actions";

const initialState={
  recipes:[],
  staticrecipes:[],
  recipesdetail:{},
  diets:[],
  page:1,
  order:""
}

const rootReducer=(state=initialState,action)=>{
  
  switch (action.type){
    case GET_ALL_RECIPES:
        
        return({...state,recipes:action.payload,staticrecipes:action.payload});

    case GET_ALL_RECIPES_BYQUERY:
      console.log(action.payload)
        return ({...state,recipes:action.payload});
    
    case FILTER_AZ:
      let result=[...state.recipes]
       result=result.sort(
        function(a, b){
          if (a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
          }
          return 0;
        })
      
      return ({...state,recipes:result});
      
    case FILTER_ZA:
      console.log('Im the filteer')

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
      console.log(action.payload)
      return ({...state,recipesdetail:action.payload});
    
    case FILTERL_H:
      let filterltoh=[...state.recipes]

      filterltoh=filterltoh.sort(
        function(a, b){
          if (a.healthScore > b.healthScore){
            return 1
          }
          if (a.healthScore  <  b.healthScore){
            return -1
          }
          return 0
        })

        return ({...state,recipes:filterltoh});

    case FILTERH_L:
      let filterhtol=[...state.recipes]

      filterhtol=filterhtol.sort(
        function(a, b){
          if (a.healthScore < b.healthScore){
            return 1
          }
          if (a.healthScore  >  b.healthScore){
            return -1
          }
          return 0
        })

        return ({...state,recipes:filterhtol});

    case GET_DIETS:
      return ({...state,diets:action.payload});

    case FILTERDIETS:
      console.log (action.payload)
      return ({...state,recipes:state.staticrecipes.filter(r=>{
         return r.diets.filter(d=>
          {
             return d.hasOwnProperty('name')?d.name===action.payload:d===action.payload
        }).length?true:false
       
      })});

    case SENDPAGE:

      return ({...state,page:action.payload});


    case TYPE_FILTER:
      console.log(action.payload)
      return ({...state, order:action.payload})
        
    
    default: return {...state}  
  }
  
}
export default rootReducer;