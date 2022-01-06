import { Task } from "./task.js";
import { User } from "./user.js";
import { phrases } from "./phrases.js";

const users = [];

window.onload = () =>{
    document.getElementById("phrases").innerText = phrases[Math.floor(Math.random()*7)];
    document.getElementById("title").value = '';
    document.getElementById("description").value ='';
    document.getElementById("date").value = '';
}

document.getElementById("task-body").addEventListener("submit", (e) => {
    e.preventDefault();

    const dom_title = document.getElementById("title").value;
    const dom_description = document.getElementById("description").value;
    const dom_date = document.getElementById("date").value;
    const user = new User({
        username:"Dylank5",
        password: "Honokasubaru",
        name: "Dylan Daniel de la Rosa Yanes",
        age: 24,
    });
    const task = new Task({
       title: dom_title,
       exp_date: dom_date,
    });

    task.description = dom_description;
    if(!task._description)return;

    user.addTask(task);

    users.push(user);

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
    
});