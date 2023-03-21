const prompt = require('prompt-sync')();
let mark = prompt('input student marks');
let a=mark;
function grade(){

if(a >= 80 && a <= 100){
console.log("A");
}
else if(a >= 60 && a <= 79){
console.log("B");
}
else if(a >= 50 && a <=59){
console.log("C");
} 
else if(a >=40 && a <= 49){
console.log("D");
}
else if(a <= 39){
console.log("E");

}
else {
console.log("INVALID MARKS");
}
}
grade() 