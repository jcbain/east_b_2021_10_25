const greetAPerson = function(name){
  console.log(`hello, ${name}!`)
}

const person = {
  name: "Jennifer",
  occupation: "front-end dev",
  sayHello: greetAPerson
  // sayHello: function(name){
  //   console.log(`hello, ${name}!`)
  
  // }
}

console.log("person.sayHello", person.sayHello)
person.sayHello("James")



console.log(console)
console.log(person)