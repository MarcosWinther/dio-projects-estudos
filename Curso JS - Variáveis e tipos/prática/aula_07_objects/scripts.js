let objeto = {};

objeto.name = 'Pedro';

console.log(objeto);

objeto.age = 20;

console.log(objeto);

console.log(Object.values(objeto));

console.log(Object.keys(objeto));

let person = {
    name: "Julia",
    age: 20,
    adress: "Rua 2"
};

console.log(person);

console.log(person.name);

console.log(person["name"]);

person["numberOfSiblings"] = 2;

console.log(person);

let mom = "nameOfMon";

person[mom] = "Celina"; // [] -> normalmente usado para colocar uma variável dentro

console.log(person);