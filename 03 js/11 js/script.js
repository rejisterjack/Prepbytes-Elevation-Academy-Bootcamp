

function changeDirection() {
  let container = document.getElementsByClassName("flex-container");
  container[0].style.flexDirection = "column";
}
function changeImage() {
  let imageBox = document.getElementsByTagName('img');
  imageBox[0].src='./image2.png';
}

const element1 = document.getElementById("text");
element1.innerHTML = "<div>i am chilling!!</div>"

let element4 = document.createElement("div");
element4.className= "divClass";
element4.id = "divId"
element4.innerText = "hello there"
element4.setAttribute("name","rupam")
// document.querySelector("div.trip").appendChild(element4)
let element5 = document.querySelector("div.trip")
element5.appendChild(element4)
console.log(element4);