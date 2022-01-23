const router = require("express").Router();
const Task = require("../models/task-model");

//Nueva tarea
router.get("/tarea", (req,res)=>{
    res.render("task/taskform");
});

//Crear tarea
router.post("/tareas/nuevo", async (req,res)=>{
    const {title,description,deadline} = req.body;
    const error=[];
    if(!title)error.push({error:"No ingresó un título"});
    if(!description)error.push({error:"No ingresó una descripción"});
    if(!deadline)error.push({error:"No ingresó una fecha límite"});
    if(!error.length){
        const newTask = new Task({title,description,deadline});
        await newTask.save();
        req.flash("successMsg","Creado correctamente");
        res.redirect("/tareas");
    }else {
        req.flash("errorMsg", "No se ha podido crear");
        res.render("task/taskform",{error,title,description,deadline}); //Le enviamos un objeto con las constantes que tenemos, cuando renderizamos para que se puedan llenar los datos ó manejar los errores
        }
});

//Buscar tareas
router.get("/tareas/buscar",(req,res)=>{
    res.render("task/find");
});

//Editar tarea
router.get("/tareas/editar/:id", async (req,res)=>{
    const task = await Task.findById(req.params.id).lean();
    res.render("task/edit",{task});
});

//Actualizar tarea
router.put("/tareas/editar-tarea/:id", async (req,res)=>{
    const {title,description,deadline} = req.body;
    const date = new Date();
    await Task.findByIdAndUpdate(req.params.id,{title,description,deadline,date});
    req.flash("successMsg", "Actualizado correctamente");
    res.redirect("/tareas");    
});

//Borrar tarea
router.delete("/tareas/borrar/:id", async (req,res)=>{
    // await Task.deleteOne({"_id": ObjectId(`${req.params.id}`)});
    await Task.findByIdAndDelete(req.params.id);
    req.flash("errorMsg", "Eliminado correctamente");
    res.redirect("/tareas");
});

//Todas las tareas
router.get("/tareas", async (req,res)=>{
    const task = await Task.find().sort({date:"-1"}).lean();
    res.render("task/tasks",{task});
});

module.exports = router;