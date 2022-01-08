const express = require("express"); //modulo de express para hacer el servidor de manera más sencilla
const path = require("path"); //modulo path para obtener los path de los archivos
const exphbs = require("express-handlebars"); //handlebars para los templates html que se van a renderizar
const override = require("method-override"); //override es para sobreescribir los metodos de los formularios y agregarles más como put y delete
const session = require("express-session"); //session para mantener las sesiones de los usuarios y no pedir relogin

//Inicializaciones
const application = express(); //aquí inicializamos express
require("./database"); //con esta linea invocamos el archivo database que se conecta a la base de datos

//Configuración
application.set("port", process.env.PORT || 5500); //configuramos el puerto y con process.env.PORT agarramos un puerto de internet si hubiese el caso
application.set("views", path.join(__dirname,"views")); //aquí le decimos a la express donde se ubica la carpeta de vistas
//aquí configuramos los handlebars para que puedan renderizarse despues
application.engine(".hbs", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(application.get("views"),"layouts"),
    partialsDir: path.join(application.get("views"),"partials"),
    extname: ".hbs"
}));
application.set("view engine",".hbs");//y le decimos a express que tipo de habdlebars se vana a usar

//Funciones
application.use(express.urlencoded({
    extended:false
}));
application.use(override("_method")); //aquí sobreescribimos los metodos de get y post

//aqui configuramos la session en express
application.use(session({
    secret:"honokasubaru",
    resave: true,
    saveUninitialized: true
}));

//Variables Globales

//Rutas

//obtenemos las rutas exportadas de cada archivo de rutas
application.use(require("./routes/main.js"));
application.use(require("./routes/tasks.js"));
application.use(require("./routes/users.js"));

//Archivos Estaticos
application.use(express.static(path.join(__dirname,"public"))); //le decimos a express donde esta la carpeta de archivos estaticos

//Servidor
application.listen(application.get("port"),()=>{ //inicializamos el servidor
    console.log(`Servidor corriendo en el puerto ${application.get("port")}`); 
});