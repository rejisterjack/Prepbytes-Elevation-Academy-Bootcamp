// what is an Object?
// objects consists of properties and methods. these properties can be of anytype but the compiler conberts them into string type only. values can be of any type.
// methods are actions/behaviours performed or function definations.

// creating an Object
// properties order are not preserved.Object
const mobile = {
  brand: "mi",
  weight: 200,
  isWorking: true,
  11 : "android version",
  displayInfo : function(){
    console.log(`the brand is ${this.brand} and the weight is ${this.weight} and is working status is ${this.isWorking} and android version is ${this[11]}`);
  }
}
mobile.camera = "32px" // method to add a property
mobile["newCamera"] = "108px"
console.log(mobile);
mobile.displayInfo()

const mobile1 = {};
mobile1.brand = "Apple",
mobile1.weight = "200";

//this pointing to something depends on the invocation/calling of the this keyword
//function constructor
function newMobile(brand,weight,camera){
  this.brand = brand;
  this.weight = weight;
  this.camera = camera;
}
const apple = new newMobile("Apple",190,"16px");
const mi = new newMobile("mi",210,"48px");

console.log(this); //pointing to window object
console.log(mobile.displayInfo);

//spread operator
let arr1 = ["name1", "name2"]
let arr2 = ["name3", "name4"]
let arr3 = [...arr1,...arr2]
console.log(arr3);

const keys = Object.keys(mobile) //return an array of keys
const values = Object.values(mobile) // return of array of values

for(let [keys,values] of Object.entries(mobile)){
  console.log(keys,":",values);
}

console.log(mobile.weight*2)