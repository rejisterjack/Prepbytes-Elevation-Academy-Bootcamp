const obj1 = {
	name: "rupam",
	about: ["hello", "there", 45]
}
const obj2 = {
	name: "friday",
	about: ["hello", "there", 45]
}
const objectCheck = (obj1, obj2)=>{
  return JSON.stringify(obj1.about) == JSON.stringify(obj2.about)
}
console.log(objectCheck(obj1, obj2))