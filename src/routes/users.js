const router = require("express").Router();

router.get("/usuario/registro",(req,res)=>{
    res.send("Formulario de registro de usuario aquí");
});

router.get("/usuario/ingreso",(req,res)=>{
    res.send("Formulario de ingreso de usuario aquí");
})
module.exports = router;