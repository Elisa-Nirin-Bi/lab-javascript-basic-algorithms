// Iteration 1: Names and Input
let hacker1 = "Paul";
let hacker2 = "Harold"


console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if(hacker1Length > hacker2Length){
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`)
}else if(hacker2Length > hacker1Length){
console.log(`The navigator has the longest name, it has ${hacker2Length} characters`)
}else{
  console.log(`Wow, you both have equally long names, ${hacker2Length} characters!`)
}

console.log(hacker1.split("").reverse());
console.log(hacker2.split("").reverse())

// Iteration 3: Loops

let comparison = hacker1.localeCompare(hacker2);

if( comparison === -1){
  console.log("The driver's name goes first.")
}else if(comparison === 1){
  console.log('Yo, the navigator goes first definitely.')
}else{
  console.log('What?! You both have the same name?')
}

// Iteration 3: Loops