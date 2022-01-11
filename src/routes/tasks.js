const router = require("express").Router();
const Task = require("../models/task-model");

router.get("/tareas",(req,res)=>{
    res.render("task/taskform");
});

router.get("/tareas/buscar",(req,res)=>{
    res.render("task/find");
});



router.post("/tareas/nuevo", async (req,res)=>{
    const {title,description,deadline} = req.body;
    const error=[];
    if(!title)error.push({error:"No ingresó un título"});
    if(!description)error.push({error:"No ingresó una descripción"});
    if(!deadline)error.push({error:"No ingresó una fecha límite"});
    if(!error.length){
        const newTask = new Task({title,description,deadline});
        await newTask.save();
        res.send("todo gud");
    }else res.render("task/taskform",{error,title,description,deadline}); //Le enviamos un objeto con las constantes que tenemos, cuando renderizamos para que se puedan llenar los datos ó manejar los errores
});

module.exports = router;