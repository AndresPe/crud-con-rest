const express = require('express')
const router = express.Router()

const tareaController = require("../controllers/tareasController")
const misTareas = new tareaController()

//ENRUTADOR DE TAREAS
router.get('/tareas', (req,res)=>{
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = misTareas.obtenerTareas()
    respuesta.mensaje = "Tareas consultadas"
    res.send(respuesta)
})

router.post('/tareas/', (req,res)=>{
    let tarea = req.body
    misTareas.agregarTarea(tarea)
    let respuesta = {}
    respuesta.estado = true
    respuesta.informacion = true
    respuesta.mensaje = "Tarea agregada con éxito"
    res.send(respuesta)
})

module.exports = router