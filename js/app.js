//OBJECT

var person = {
  name: "Jenny",
  age: 23,
  friends: ['Susan', 'Anna', 'Maggie'],
 
  address: {
      number: 123,
      street: 'Main St',
      city: 'London'
  },
  sayhello: function () {
     console.log("Hello!");
  }
};

console.info(person.name);
console.info(person.age);
console.log(person.friends[1]);
console.log(person.address.city);
person.sayhello();

//CAR

var car = {
  manufacturer: 'Jaguar',
  model: 'XJ220',
  year: '1994',
  colour: ['silver', 'green'],
  owner: {
      name: 'Jaguar Land Rover',
      city: 'Birmingham',
  },
  slogan: function(){
      console.log('Performance, Luxury, Reliable!');
  }
};

console.info(car.manufacturer);
console.info(car.model);
console.info(car.colour[1]);
console.info(car.owner.name);
car.slogan();