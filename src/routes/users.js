const router = require("express").Router();

router.get("/usuario/registro",(req,res)=>{
    res.render("user/signup");
});

router.get("/usuario/ingreso",(req,res)=>{
    res.render("user/signin");
});

module.exports = router;