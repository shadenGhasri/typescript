export
const cards = [
    { id: 1, name: "aurelia", image: aurelia },
    { id: 3, name: "angular", image: angular },
    { id: 4, name: "angular", image: angular },
    { id: 6, name: "ember", image: ember },
    { id: 7, name: "vue", image: vue },
    { id: 8, name: "vue", image: vue },
    { id: 9, name: "backbone", image: backbone },
    { id: 10, name: "backbone", image: backbone },
    { id: 11, name: "react", image: react },
    { id: 12, name: "react", image: react },
    { id: 13, name: "react", image: react },
  ];

  const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
  }
   
  console.log(user.name)

  interface Account {
    id: number
    displayName: string
    version: 1
  }
   
  function welcome(user: Account) {
    console.log(user.id)
  }

  type Result = "pass" | "fail"
 
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}

function verify(result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
 
const anExampleVariable = "Hello World"
console.log(anExampleVariable)

type Result = "pass" | "fail"
 
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
 
  
  export const cardsData = cards.map((card) => ({
    ...card,
    order: Math.floor(Math.random() * 12),
    isFlipped: false,
  }));

//   ارای تجربه کاری در استفاده از Web Serviceها (REST, JSON and APIs)
  

/** @type {number} */
var x;
 
x = 0; // OK
x = false; // OK?!

// @ts-check
/** @type {number} */
var x;

x = 0; // OK
// @ts-expect-error
x = false; // Not OK