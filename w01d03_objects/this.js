const introduceOneself = function() {
  console.log(this)
  console.log(`hi, my name is ${this.name}`)

}

const person = {
  name: "Jennifer",
  occupation: "front-end dev",
  sayHello: function(name){
    console.log(`hello, ${name}!`)
  },
  introduceYourself: introduceOneself
  
}

const person2 = {
  name: "James",
  occupation: "instructor",
  sayHello: function(name){
    console.log(`hello, ${name}!`)
  },
  introduceYourself: introduceOneself
  
}

person.introduceYourself()
person2.introduceYourself()

// introduceOneself()