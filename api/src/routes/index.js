const { Router } = require('express');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countries = require('./countries');
const activities = require('./activity');
const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/* router.get("/", (req,res) => {
    res.status(200).send("Base de datos ok")
}) */

router.use('/countries', countries);  //"countries" es el nombre del modelo
router.use('/activities', activities);  //"activity" es el nombre del modelo


module.exports = router;
