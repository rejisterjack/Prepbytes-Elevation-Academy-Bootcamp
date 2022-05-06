function Employee(name, age, gender, id) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.id = id;
};

function Developer(name, age, gender, id,
  specialization) {

  // Calling Employee constructor function
  Employee.call(this, name, age, gender, id);

  // Adding a new parameter
  this.specialization = specialization;
  return this.name
}
Employee("rupam", "23", "male", "rj")
Developer("python","rupam", "23", "male", "rj")

console.log(Developer());
