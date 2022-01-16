const phrases = [
    "No te canses, sigue adelante porque la victoria que te espera es grande.",
    "Lee poco y serás como muchos… lee mucho y serás como pocos.",
    "No te rindas nunca porque nunca sabes si el próximo intento será el que funcionará.",
    "Todos nuestros sueños se pueden hacer realidad si tenemos el coraje de perseguirlos.",
    "El éxito es la suma de pequeños esfuerzo repetidos día tras día.",
    "Los errores no son fracasos, son señal de que lo estamos intentando.",
    "El genio se hace con un 1% de talento, y un 99% de trabajo.",
    "Todo es posible en la medida que tú creas que es posible.",
    "Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber.",
    "Trabaja duro en silencio y deja que tu éxito haga todo el ruido.",
    "Cree en ti mismo y en lo que eres. Se consciente de que hay algo en tu interior que es más grande que cualquier obstáculo.",
    "Si el plan no funciona, cambia el plan, pero no cambies la meta.",
    "Continua estudiando, el cansancio es temporal, la satisfacción es para siempre.",
    "No digas que no tienes suficiente tiempo. Tienes exactamente el mismo número de horas que tuvieron Pasteur, Michelangelo, Helen Keller, Madre Teresa, Leonardo da Vinci, Thomas Jefferson y Albert Einstein.",
];
window.onload = () =>{
    document.getElementById("phrases").innerText = phrases[Math.floor(Math.random()*14)];
}
/*
import { Task } from "./task.js";
import { User } from "./user.js";

const user = new User({
    username:"Dylank5",
    password: "Honokasubaru",
    name: "Dylan Daniel de la Rosa Yanes",
    age: 24,
});

const users = [user];


document.getElementById("task-body").addEventListener("submit", (e) => {
    e.preventDefault();

    const dom_title = document.getElementById("title").value;
    const dom_description = document.getElementById("description").value;
    const dom_date = document.getElementById("date").value;
    const task = new Task({
       title: dom_title,
       exp_date: dom_date,
    });

    task.description = dom_description;
    if(!task._description)return;

    user.addTask(task);
    console.log(user);

});

document.getElementById("user_button").addEventListener("click",()=>{

    const dom_tasks = document.getElementById("tasks");
    const user = document.getElementById("user").value;
    const user_tasks = users.find(method);
    let result = "";
    
    function method(item){
        return item._username === user;
    }
    if(user_tasks){
        for(let item in user_tasks._tasks){
            result+=`
            <h2>${user_tasks._tasks[item]._title}</h2>
            <p>${user_tasks._tasks[item]._exp_date}</p>
            <p>${user_tasks._tasks[item]._description}</p>
            `;
        }
    }else result = "<p>Este usuario no tiene ninguna tarea 😐</p>";

    dom_tasks.innerHTML = result;
    
});*/