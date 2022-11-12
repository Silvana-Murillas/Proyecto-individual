const { Router } = require('express');
const {addRecipe,getRecipe,getRecipebyid,getBd,getApi}=require('../controllers/controllerRecipe')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/',async(req,res)=>{
    try {
        const {name,image,summary,healthScore,steps,diets}=req.body;

        if(!name||!summary){
            throw new Error('Faltan Datos por ingresar');
        }
        console.log(req.body)
        await addRecipe(name,image,summary,healthScore,steps,diets)

        return res.status(201).send('Receta creada existosamente');
        
    } catch (error) {
        console.log(error.message)
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
router.get('/get/bd',async(req,res)=>{
    try {
        const recipesbd=await getBd();
        console.log(recipesbd);
        return res.status(201).send(recipesbd) 
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

router.get('/get/api',async(req,res)=>{
    try {
        
        const recipesapi=await getApi();
        console.log(recipesapi);
        return res.status(201).send(recipesapi) 
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
