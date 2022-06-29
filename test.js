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
var person = {
    name: "shaden",
    hobbies: ["sport", "cooking"]
};
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var e = _a[_i];
    console.log(e.toUpperCase());
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person2.role);
var Cars;
(function (Cars) {
    Cars[Cars["FORD"] = 8] = "FORD";
    Cars[Cars["VOLVO"] = 9] = "VOLVO";
    Cars[Cars["BMW"] = 10] = "BMW";
})(Cars || (Cars = {}));
var car = Cars.VOLVO;
console.log(car);
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(2, 5));
