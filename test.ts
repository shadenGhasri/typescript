// function getName(firstName:string) {
//     return firstName;
// }

// let  firstName="Ali";


// console.log(firstName);

// function barista(name) {
//     console.log('Peppermint Mocha Frappuccino for ' + name);
//   }
//   var customer = {
//     name: 'Todd',
//   };
//   barista(customer.name);

var person :{
    name : string ;
    hobbies : string[]
} = {
    name : "shaden",
    hobbies : ["sport","cooking"]
}
console.log(person.hobbies);


for(let e of person.hobbies){
    console.log(e.toUpperCase());
    
}

enum Role { ADMIN, READ_ONLY, AUTHOR };
var person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person2.role);

enum Cars {FORD = 8,VOLVO,BMW}
let car : Cars = Cars.VOLVO
console.log(car);



