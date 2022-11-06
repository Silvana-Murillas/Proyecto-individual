const {Diet}=require('./db');

let defaultDiets = ["Gluten Free","dairyFree","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian",
"Paleo","Primal","Low FODMAP","Whole30"];

const createDiets=async()=>{
    
    defaultDiets.forEach( async d=> await Diet.findOrCreate({where:{name:d}}))
    
}
createDiets();