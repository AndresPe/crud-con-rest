class Tareas{
    constructor(){
        this.listaTareas = []
    }
    agregarTarea(tarea){
        this.listaTareas.push(tarea)
    }
    modificarTarea(id, tarea){

    }
    eliminarTarea(id){

    }
    obtenerTareas(){
        return this.listaTareas
    }
}

module.exports = Tareas