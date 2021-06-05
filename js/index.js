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

// Bonus 1

let par1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut justo quis risus efficitur dignissim at et turpis. Maecenas eget volutpat lectus, id tristique lacus. Quisque in justo augue. Suspendisse enim dui, blandit ac nisl in, bibendum dapibus mi. Vestibulum sit amet est lorem. Sed condimentum laoreet elementum. Aliquam erat volutpat. Sed convallis placerat justo vitae imperdiet. Quisque porttitor viverra magna, sed dignissim diam porttitor nec. Vivamus diam magna, rutrum ut interdum ac, vehicula et felis. Nullam quis quam posuere, porta tellus non, tincidunt massa. Sed sed ipsum metus. Suspendisse euismod nulla vitae rhoncus tincidunt. Suspendisse feugiat, risus in lobortis consequat, arcu tellus varius risus, sed varius ipsum diam a arcu."

let par2 ="Sed massa lectus, molestie sed felis et, aliquet vulputate leo. Donec congue pulvinar mi nec consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in iaculis ipsum. Sed ipsum orci, porttitor in metus ut, euismod ultricies risus. Sed lobortis odio pretium sollicitudin maximus. Pellentesque hendrerit laoreet faucibus. Nulla in leo sem. Etiam dignissim sit amet neque in ultricies. Ut eget felis ac felis pellentesque volutpat non a urna. Suspendisse at blandit sapien. Suspendisse congue, ipsum eu ultrices aliquam, felis justo egestas velit, non consequat mauris sem sed urna.";

let par3 ="Morbi bibendum massa non mauris faucibus, non sodales augue rhoncus. Quisque posuere tempus nulla ac sollicitudin. Donec vitae nisi odio. Morbi venenatis posuere metus eu efficitur. Maecenas auctor nibh et pulvinar consectetur. Ut orci nulla, mattis eu pretium in, vulputate sed nibh. In malesuada felis vel magna vestibulum venenatis. Etiam non elit id ex placerat dictum non sed nulla. Pellentesque facilisis iaculis metus nec condimentum.";

let par1Length =par1.length;
let par2Length =par2.length;
let par3Length =par3.length;

console.log(`The first paragraph is ${par1Length}, the second paragraph is ${par2Length}, the third paragraph is ${par3Length}`)