/*
El metodo bind() crea un nueva funcion que cuando manda a llamar tiene un contexto "this" asignado por nosostros
crea una nueva funcion y pasa el scope que se requiere
*/

var x = 9;

var module = {
    x: 85,
    getX: function(){
        return this.x;
    }
}

module.getX();

var retriveX = module.getX;

retriveX();

var context = {
    x: 55
};

var bindGetX = retriveX.bind(context);
bindGetX();

/*-- otro ejemplo--*/

var fullname = "Carlos Sanatana";

var person = {
    other: {
        fullname: "Miguel abuelo",
    },
    fullname : "Francisco Villa",
    getFullname: function(){
        return this.fullname
    }
};

var getFullname = person.getFullname.bind(person.other);

console.log(getFullname());
