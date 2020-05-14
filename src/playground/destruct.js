console.log("destructuring");

// const person = {
//   name: "arie",
//   age: 20,
//   type: "large",
// };

// const { name, age, type = "small" } = person;

// console.log(name, age, type);

//array destructuring

const address = ["1299 s junpier steet", "philadelphia", "4234324"];

const [street, city, zipcode] = address;

// console.log(`my details: ${address[1]}, ${address[2]}, ${address[3]} `);

console.log(`my details: ${street}, ${city} , ${zipcode} `);
