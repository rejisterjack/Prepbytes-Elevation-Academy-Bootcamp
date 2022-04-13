// function student(fname, lname, gender, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.gender = gender;
//   this.age = age;
// }
// const student_one = new student("rupam","das","male",21)
// const student_two = new student("piumita","sarkar","female",20)

// console.log(student_one);

let obj1 = {
  fname : "rupam",
  lname: "das",
  showDetails: function(){
    console.log(this.fname + " " + this.lname);
  }
}
obj1.showDetails()

let obj2 = {
  fname: "piumita"
}
obj2.__proto__ = obj1

let person = {
  fname: "raghu",
  lname: "singh",
  showDetails: function(gender, age){
    return this.fname+" "+this.lname+" "+gender+" "+age
  }
}

let person1 = {
  fname: "rupam",
  lname: "das",
}

person.showDetails.call(person1) //function borrowing

person.showDetails.call(person1,"male",21)
// apply method takes arguments as arrays
person.showDetails.apply(person1,["male",21])
//bind never takes arguments, it only takes object names and gets a function in return
//the arguments are also passed individually only and not in form of array.
let result1 = showDetails.bind(person1)
console.log(result1);
result1("male",21)