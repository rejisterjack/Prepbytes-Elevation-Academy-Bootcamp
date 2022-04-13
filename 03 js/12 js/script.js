//function defination: this whole function body is called function defination/declaration/statement
function a(){
  console.log("i am a");
}

// named function: functions having a name are called named functions.

//function expression: a function assigned to the variable is called function expression
let b = function(){
  console.log("i am b");
}

//since we know that functions are hoisted but it comes with an exception too.
//functin expressions are never hoisted.

// anonymous function: function which donot have any name and which are used in function expression are called as anonymous functions.

//finst class functions: the functions are treated as values which can be passed into another functions as arguments and can also be returned from another function. they are also called as first class functions.


function add(a,b){// a and b are parameters
  console.log("hellow");
}
add(3,4)// 3 and 4 are arguments

let functionD = function(a){
  console.log(a);
}
function g(){
  console.log("i am g");
}

functionD(g)

let functionDNew = function(){
  return function f(){
    console.log("hi i am f");
  }
}
console.log(functionDNew());


// HIgher order functions: the functions which can take functions as parameters or which can return functions are called as higher order functions. the functions accepting the first class functions

// the function f returned from function D is called first class functions whereas the functions D which is returning the function f is called the higher order function.

//callback function: these are those kind of functions which are called back after a certain period of time or are passed as values into another function which are in turn called as and when needed.


setTimeout(()=>{
  console.log("i am a callback function called after 2000 ms");
},2000)
// after the time executed this function will be executed.

function h(){
  console.log("i am function h");
  a()
}

h(function j(){
  console.log("i am function j");
})

const sayHi = (friend) => {
  console.log("hello my friend", friend);
}

const greeting = (friend, callbackFunction) => {
  callbackFunction(friend)
}

greeting("rupam",sayHi)
console.log(greeting("rupam",sayHi));