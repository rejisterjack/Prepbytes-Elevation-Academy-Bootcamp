function student(fName, lName, birthYear) {
  this.fName = fName;
  this.lName = lName;
  this.birthYear = birthYear
}
function age(){
  return 2022-this.birthYear;
}

let student1 = new student("rupam","das", 2000);
let student2 = new student("piumita","sarkar", 2000);

let result1 = age.bind(student1)
console.log(result1());
let result2 = age.bind(student2)
console.log(result2());

////////////////////////////////////////////

const studentPrototype = {
  calcAge(){
    console.log(2022 - this.birthYear);
  },
  init(fName, lName, birthYear){
    this.fName = fName;
    this.lName = lName;
    this.birthYear = birthYear;
  }
}

const peter = Object.create(studentPrototype);
console.log(peter);

peter.fname = "peter";
peter.lname = "kirsten"
peter.birthYear = 1990

peter.calcAge();

const jarvis = Object.create(studentPrototype)
console.log(jarvis);

jarvis.init("jarvis","eaidth",2011)
console.log(jarvis);
