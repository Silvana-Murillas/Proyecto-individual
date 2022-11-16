case 'ORDEN_ALFA':
            
            const Recipes = state.recipes
           
           let  ordenamiendo = action.payload === 'ascendent' ?
            Recipes.sort(function(a, b){
                if (a.name > b.name){
                    return 1
                }
                if (a.name < b.name){
                    return -1
                }
                return 0;
            }) :
            Recipes.sort(function(a, b){
                if (a.name < b.name){
                  return 1
                }
                if (a.name > b.name){
                    return -1
                }
                return 0
            }) 
            
            return {
                ...state, allRecipes: ordenamiendo
            }