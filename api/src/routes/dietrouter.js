const { Router } = require('express');
const getDiets=require('../controllers/controllerdiet')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/',async (req,res)=>{
    try {  
        const searchDiets= await getDiets()
        return res.status(201).send(searchDiets)
             
    } catch (error) {
        return res.status(404).send(error.message)
    }
})


module.exports = router;