const router = require("express").Router();

router.get("/tareas", (req,res)=>{
    res.send("Las tareas se verán aqui");
})

module.exports = router;