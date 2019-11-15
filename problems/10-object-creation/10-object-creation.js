/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Object Literal
const car = {
    make: 'Acura',
    model: 'Integra',
    age: 24,
    horsePower: 140,
    torque: 128
}

//Constructor Function
function car(make, model, age, horsePower, torque){
    this.make = make,
    this.model = model,
    this.age = age,
    this.horsePower = horsePower,
    this.torque = torque,
    name = make + model
}

//ES6 CLass
class car{
    make
    model
    age
    horsePower
    torque
    constructor(make, model, age, horsePower, torque){
        this.make = make,
        this.model = model,
        this.age = age,
        this.horsePower = horsePower,
        this.torque = torque
    }
}