const { Router } = require('express');
const {addRecipe,getRecipe,getRecipebyid,getBd,getApi,deleteRecipe}=require('../controllers/controllerRecipe')
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
        
        await addRecipe(name,image,summary,healthScore,steps,diets)

        return res.status(201).send('Receta creada existosamente');
        
    } catch (error) {
        console.log(error)
        return res.status(404).send(error.message);
        
    }
})

router.get('/',async (req,res)=>{
    try {
        const {name,source}=req.query;
        
        if(name){
            const searchRecipe= await getRecipe(name)
            
            return res.status(201).send(searchRecipe)
        }
       
        if(source==="Created Recipes"){
            const recipesbd=await getBd(); 
            return res.status(201).send(recipesbd)      
        }
        if(source==="Api Recipes"){
            const recipesapi=await getApi();
            
            return res.status(201).send(recipesapi) 
        }
        const recipes= await getRecipe();
        
        return res.status(201).send(recipes)        
    } catch (error) {   
        console.log(error)     
        return res.status(404).send({error:error.message})
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

router.delete('/:id',async (req,res)=>{
try {
    const {id}=req.params;
    await deleteRecipe(id);
    return res.status(200).send('recipe successfully deleted')
} catch (error) {
    console.log(error)
    return res.status(404).send(error.message)
}
})





module.exports = router;









// router.put('/:id',async(req,res)=>{
//     try {
//         const {id}=req.params;
        
//         const {name,image,summary,healthScore,steps}=req.body
//         const recipeupdate=await updateRecipe(id,name,image,summary,healthScore,steps)
//         return res.status(201).send(recipeupdate)
        
//     } catch (error) {
//         return res.status(404).send(error.message)
//     }
// })