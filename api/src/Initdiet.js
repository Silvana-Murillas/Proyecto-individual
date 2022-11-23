const {Diet}=require('./db');

let defaultDiets = ["gluten free","dairy free","ketogenic","vegetarian","lacto vegetarian","ovo vegetarian","vegan","pescatarian",
"paleo","primal","low fodmap","whole 30","lacto ovo vegetarian","paleolithic"];

const createDiets=async()=>{
    
    defaultDiets.forEach( async d=> await Diet.findOrCreate({where:{name:d}}))
    
}
createDiets();