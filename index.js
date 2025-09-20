//function scope
var num1=20, num2=3, name="arun";

function multiply(){
  return num1*num2;
}

var a=9;
 var fun = function(){
  console.log("printing", a);
  var a=10;
 }
 fun();

 function square(num1, num2){
  console.log("S")
 }
console.log(multiply()); //60

//block scope
function getScore(){
  var num1=2, num2=3;
  function add(){
    return name+ "scored" + (num1 + num2);
  }
  return add();
}
// console.log(getScore()); //arun scored 5



