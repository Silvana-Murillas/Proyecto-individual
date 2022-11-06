const {Diet}=require('./db');

const createDiets=async()=>{
    await Diet.create({name:"vegan"})
}

createDiets();