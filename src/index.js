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
    defaultLayout: "main",//Definimos la plantilla por defecto que siempre será el punto de partida de las vistas
    layoutsDir: path.join(application.get("views"),"layouts"),//Le indicamos donde están los layouts a la app
    partialsDir: path.join(application.get("views"),"partials"),//Le indicamos donde están las vistas parciales a la app
    extname: ".hbs"//La extensión de archivo para que la app reconosca los archivos sin problemas
}));
application.set("view engine",".hbs");//y le decimos a express los handlebars que va a usar y sus direcciónes

//Funciones
application.use(express.urlencoded({
    extended:false
}));
application.use(override("_method")); //aquí sobreescribimos los metodos de get y post porque reviza el input con el name method y toma el valor que tiene para hacer cierta consulta en el servidor

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
application.use(express.static(path.join(__dirname,"public"))); //le decimos a express donde esta la carpeta de archivos publicos, archivos que se pueden acceder desde cualquier parte

//Servidor
application.listen(application.get("port"),()=>{ //inicializamos el servidor
    console.log(`Servidor corriendo en el puerto ${application.get("port")}`); 
});