const router = require("express").Router(); //aquí nos valemos del modulo router de express trayendolo
const path = require("path"); //y el de path tambien

router.get("/", (req,res) =>{ //con el modulo router creamos una ruta para la página principal

    res.render("index");
});
router.get("/contacto", (req,res) =>{

    res.send(`contacto`);
});

module.exports = router; //exportamos el modulo de router para utilizarlo en la app