const {Diet}=require('../db');


const getDiets=async()=>{
  const getDiet=await Diet.findAll()
  return getDiet;
}

module.exports=getDiets;