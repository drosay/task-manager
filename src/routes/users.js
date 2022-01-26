const router = require("express").Router();
const bcrypt = require("bcryptjs/dist/bcrypt");
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
    else if(username.length<3)error.push({error:"El nombre de husuario debe tener al menos 3 caracteres"});
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

router.post("/usuario/ingreso",async(req,res)=>{
    const {username,password} = req.body;
    const error=[];
    if(await User.exists({username:username})){
        const dbUser = await User.findOne({username:username}).lean();
        const user = new User({username:dbUser.username,password:dbUser.password});
        console.log(user);
        if(user.compare(password)){
            res.render("index",{displayUser:username});
        }else error.push({error:"Contraseña incorrecta"});
    }else error.push({error:"No existe este nombre de usuario"});

    if(error.length){
        res.render("user/signin",{error,username,password});
    }
});

module.exports = router;