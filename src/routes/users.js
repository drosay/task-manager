const router = require("express").Router();
const User = require("../models/user-model");

//Formulario de registro de usuario
router.get("/usuario/registro",(req,res)=>{
    res.render("user/signup");
});

//Formulario de ingreso de usuario
router.get("/usuario/ingreso",(req,res)=>{
    res.render("user/signin");
});

//Registro de usuario
router.post("/usuario/registro",async (req,res)=>{
    const {username,password,secondPass} = req.body;
    const error=[];
    if(password !== secondPass)error.push({error:"Asegurate de que las contraseñas sean iguales"});
    if(!username)error.push({error:"Necesitas ingresar un nombre de usuario"});
    else if(username.length<3)error.push({error:"Debes escribir al menos 3 caracteres"});
    else if(username.length>12)error.push({error:"El nombre de usuario no puede ser mayor a 12 caracteres"});
    else if(await User.exists({username:username}))error.push({error:"Ya existe este nombre de usuario"});
    if(error.length){
        res.render("user/signup",{error,username,password,secondPass});
    }else{
        const user = new User({username,password});
        user.password = await user.encrypt(password);
        await user.save();
        req.flash("successMsg","Usuario registrado correctamente");
        res.redirect("/usuario/ingreso");
    }

});

module.exports = router;