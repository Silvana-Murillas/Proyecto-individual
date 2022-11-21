const e = require("express");
const { Recipe, Diet } = require("../db");
const { URL_API, API_KEY, URL_APIBYID, API_KEY1 } = process.env;
const axios = require("axios");
const { Op } = require("sequelize");

const addRecipe = async (name, image, summary, healthScore, steps, diets) => {
  if (!name || !summary) {
    throw new Error("Faltan Datos por ingresar");
  }

  try {
    const recipe = await Recipe.create({
      name,
      image,
      summary,
      healthScore,
      steps,
    });
    if (diets && diets.length) {
      await recipe.setDiets(diets);
    }
    return recipe;
  } catch (error) {
    throw error;
  }
};

const getBd = async (name) => {
  if (name) {
    const findbyName = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return findbyName;
  }
  const recipes = await Recipe.findAll({
    include: [
      {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return recipes;
};

const getApi = async (name) => {
  const getInfoApi = await axios.get(
    `${URL_API}?apiKey=${API_KEY1}&addRecipeInformation=true&number=10`
  );
  const infoapi = await getInfoApi.data.results;

  const info = infoapi.map((e) => {
    let diets = e.diets;
    if (e.vegetarian) {
      diets.push("vegetarian");
    }
    return {
      id: e.id,
      name: e.title,
      image: e.image,
      dishTypes: e.dishTypes,
      summary: e.summary,
      healthScore: e.healthScore,
      diets: diets,
      steps:
        e.analyzedInstructions.length &&
        e.analyzedInstructions[0].steps.map((e) => {
          return {
            number: e.number,
            step: e.step,
          };
        }),
    };
  });
  info.forEach((rec) =>
    rec.diets.forEach(
      async (d) => await Diet.findOrCreate({ where: { name: d } })
    )
  );
  if (name) {
    return info.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return info;
};

const getRecipe = async (name) => {
  try {
    if (name) {
      const nameApi = await getApi(name);

      const namebD = await getBd(name);

      if (!nameApi.length && !namebD.length) throw new Error("name no found");
      const nameApi_bD = nameApi.concat(namebD);
      return nameApi_bD;
    }

    const Api = await getApi();
    const bD = await getBd();
    const Api_bD = Api.concat(bD);
    return Api_bD;
  } catch (error) {
    throw error;
  }
};

const getRecipebyidfromDB = async (id) => {
  const findbyid = await Recipe.findByPk(id, {
    include: [
      {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  return findbyid;
};
const getRecipebyidfromApi = async (id) => {
  const getInfoApi = await axios.get(
    `${URL_APIBYID}${id}/information?apiKey=${API_KEY1}`
  );
  const infoapi = await getInfoApi.data;

  let diets = infoapi.diets;
  if (infoapi.vegetarian) {
    diets.push("vegetarian");
  }
  const infobyId = {
    id: infoapi.id,
    name: infoapi.title,
    image: infoapi.image,
    dishTypes: infoapi.dishTypes,
    summary: infoapi.summary,
    healthScore: infoapi.healthScore,
    diets: diets,
    steps:
      infoapi.analyzedInstructions.length &&
      infoapi.analyzedInstructions[0].steps.map((e) => {
        return {
          number: e.number,
          step: e.step,
        };
      }),
  };
  return infobyId;
};
const getRecipebyid = async (id) => {
  if (
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
      id
    )
  ) {
    try {
      const recipebyId = await getRecipebyidfromDB(id);
      return recipebyId;
    } catch (error) {
      throw error;
    }
  }
  try {
    const recipebyId = await getRecipebyidfromApi(id);
    return recipebyId;
  } catch (error) {
    throw error;
  }
};

// const updateRecipe=async(id,name,image,summary,healthScore,steps)=>{
//  try{
//   if (
//     /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)
//   ){
  
//     await Recipe.update({name,image,summary,healthScore,steps},{where:{id}})

//     return "Receta Actualizada"

//   }

//   else{throw new Error ('This recipe can not be update')}
  
//  }catch(error){
//   throw error;
//  }
  
// }

const deleteRecipe=async(id)=>{
   try{
  if (
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)
  ){
  
     const recipe=await Recipe.findByPk(id)
     if(!recipe){throw new Error ("Recipe does not exist")}
     recipe.destroy()

    return recipe;

  }

  else{throw new Error ('This recipe can not be delete')}
  
 }catch(error){
  throw error;
 }

}


module.exports = { addRecipe, getRecipe, getRecipebyid, getBd, getApi,deleteRecipe };
