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





function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
console.log(combine(2,5));



