// {
//   let myName = "rupam";
//   const age = 21;
//   var isAdult = true;
//   console.log(myName);
//   console.log(age);
//   console.log(isAdult);
// }
// console.log(myName);
// console.log(age);
// console.log(isAdult);

// console.log(myAge);
// let myAge;

//var keyword variables will havedefault value as undefined if we try to access the variable even before declaring;
// console.log(myAge);//undefined
// var myAge;
// myAge = 25;
// console.log(myAge);//25

// // let keyword donot get memory in global space but lies in Temporal Dead Zone(TDZ);Javascript MDN
// // console.log(myPassion);//cannot access 'myPassion' before initialization
// let myPassion;
// myPassion = "Coding";
// console.log(myPassion);//Coding

// //const keyword donot get memory in global space but lies in Temporal Dead Zone(TDZ);Javascript MDN
// console.log(myHobby);//cannot access 'myHobby' before initialization
// const myHobby = "Dancing, Skating";
// console.log(myHobby);//Dancing, Skating


operation(3,4,5)

function operation(a,b,c){
  let result = a+b;
  let result1 = result+c;
  console.log(result1);
}