const {Diet}=require('../db');


const getDiets=async()=>{
  const getDiet=await Diet.findAll({
    attributes: ['id', 'name']
  })
  return getDiet;
}

module.exports=getDiets;