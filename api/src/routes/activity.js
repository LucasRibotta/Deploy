const { Router } = require('express');
const { Activity, Country } = require('../db');
const {getCreateActivity} = require('../controllers/activities')

const router = Router();

router.get('/', async (req, res) => {
    try {
        // Buscar todas las actividades en la base de datos
       const allActivities = await Activity.findAll({
          include: Country
       })
       // Devolvemos las acitividades encontradas como respuesta
       res.status(200).json(allActivities)
    } catch (error) {
       res.status(400).json({ error: "No se encontraron actividades" })
    }
 
 });


router.post("/", async (req,res,next) => {
    try {
         // Crear una nueva actividad utilizando los datos recibidos en el cuerpo de la solicitud
        const response = await getCreateActivity(req.body);
        res.status(201).json({
            status: 'Se ha creado exitosamente'
        })
    
    } catch (error) {
        
        res.status(400).json({error: 'error en la creacion'})
        next(error)
    }
})


module.exports = router;