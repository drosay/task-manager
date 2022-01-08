export class Task{
    constructor({
        title,
        description,
        exp_date,
    }){
        this._title = title;
        this._description = description;
        this._exp_date = exp_date;
    }

    get title(){
        return this._title;
    }

    set title(new_title){
        new_title === this._title ? alert("No puedes colocar el mismo titulo") : this._title = new_title;
    }

    get description(){
        return this._description;
    }

    set description(new_description){
        new_description.length < 40 ? alert("No puedes colocar una descripción menor a 40 caracteres") : new_description === this._description ? alert("No tiene sentido que coloques a misma descripción. . .") : this._description =  new_description;
    }

    get exp_date(){
        return this._exp_date;
    }

    set exp_date({new_exp_date,today}){
        new_exp_date === today ? console.log("La fecha no puede ser la misma") : this._exp_date = new_exp_date;
    }
}