// const obj1 = {
//   name : "rupam",
//   age : 21
// }
// const obj2 = {
//   occupation: "student",
//   location: "malda"
// }

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// we use dom manipulation for making dynamic changes
// we can make changes by accessing and element via id's, tags and classNames
const element1 = document.getElementById("text")
console.log(element1);
element1.innerText="this is the change output";

const element2 = document.getElementsByClassName("trip")
console.log(element2[0]);
element2[0].innerText="this is the changed class output";

const element3 = document.getElementsByTagName("h1")
console.log(element3[0])
element3[0].style.color = "blue"
element3[0].style.backgroundColor = "red"

function changeText(){
  // const trying1 = document.getElementsByClassName("trip");
  // trying1[0].innerText = "Hello World"
  // trying1[0].style.color = "red"

  const btn = document.getElementsByTagName("button")
  btn[0].innerText="sign out"
}
// const button = document.getElementsByTagName("button")
// button.changeText()