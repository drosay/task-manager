const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/task-app")
.then(db => console.log("Se ha conectado la base de datos"))
.catch(error=>console.log(error));

/*,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}*/