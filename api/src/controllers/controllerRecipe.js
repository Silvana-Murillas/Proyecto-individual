const e = require('express');
const {Recipe,Diet}=require('../db');
const {URL_API,API_KEY}=process.env;
const axios = require('axios')


const addRecipe=async (name,image,summary,healthScore,steps,diets)=>{
    console.log(diets)

    if(!name||!summary||!diets){
        throw new Error('Faltan Datos por ingresar');
    }

    try{          
        const recipe=await Recipe.create({name,image,summary,healthScore,steps});
        await recipe.setDiets(diets)
        return recipe;
    }catch(error){
        throw new Error('Id diet invalid')
    }   
    
}

const getBd=async(name)=>{
    if(name){
        const findbyName=await Recipe.findAll({
                where:{
                    name
                },
                include:{
                    model:Diet,
                    attributes:['name']
                }
        });
        return findbyName;        
    }
    const recipes=await Recipe.findAll({
        include:
        [
            {
                model:Diet,
                attributes:['name'],
                through:{
                            attributes:[]
                        }
            }
        ]
    });
    return recipes;
}

const getApi=async(name)=>{
     
    const getInfoApi= await axios.get(`${URL_API}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    const infoapi= await getInfoApi.data.results;

    const info=infoapi.map(e=>{

        let diets = e.diets;
        if (e.vegetarian){
            diets.push('vegetarian');
        }
        return{
                id:e.id,
                name:e.title,
                image:e.image,
                dishTypes:e.dishTypes,
                summary:e.summary,
                healthScore:e.healthScore,
                diets:diets,
                steps:e.analyzedInstructions.length&&e.analyzedInstructions[0].steps.map(e=>
                {
                    return {
                        number:e.number,
                        step:e.step
                    }
                })
            }
    })

    if(name){
        return info.filter(e=>e.name=name);        
    }

    return info;

}

const getRecipe=async(name)=>{
    if(name){
        const nameApi=await getApi(name);
        const namebD=await getBd(name);
        if(!nameApi.length&&!namebD.length)throw new Error('name no found')
        const nameApi_bD=nameApi.concat(namebD)
        return nameApi_bD;
    }

    const Api= await getApi();
    const bD= await getBd();    
    const Api_bD=Api.concat(bD);
    return Api_bD;
}

module.exports={addRecipe,getRecipe};