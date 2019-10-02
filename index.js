const express = require('express')
const app = express()

//Recibir json por http methods (body-parser)
app.use(express.json())

app.use('/home', (req,res) => {
    res.send("CRUD TAREAS")
})

const tareasRouter = require("./routes/tareasRouter")
app.use(tareasRouter)

app.use('/', (req,res)=>{
    res.send("NOT FOUND")
})


const port = 3100

app.listen(port, () =>{
    console.log("El api está corriendo en el http://localhost:"+port);
} )
