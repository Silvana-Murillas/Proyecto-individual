const { Router } = require('express');
const {addRecipe,getRecipe,getRecipebyid}=require('../controllers/controllerRecipe')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/',async(req,res)=>{
    try {
        const {name,image,summary,healthScore,steps,diets}=req.body;

        if(!name||!summary||!diets){
            throw new Error('Faltan Datos por ingresar');
        }
        
        const recipe=await addRecipe(name,image,summary,healthScore,steps,diets)

        return res.status(201).send(recipe);
        
    } catch (error) {
        return res.status(404).send(error.message);
        
    }
})

router.get('/',async (req,res)=>{
    try {
        const {name}=req.query;
        if(name){
            const searchRecipe= await getRecipe(name)
            return res.status(201).send(searchRecipe)
        }
        const recipes= await getRecipe();
        return res.status(201).send(recipes)        
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        if(id===null)throw new Error ('Id is null')
         const recipebyId=await getRecipebyid(id)
         return res.status(201).send(recipebyId) 
    } catch (error) {
        console.log(error)
         return res.status(404).send(error.message)
    }
})


module.exports = router;
