const router = require("express").Router();

router.get("/tareas",(req,res)=>{
    res.render("task/taskform");
});

router.get("/tareas/buscar", (req,res)=>{
    res.render("task/find");
});

module.exports = router;