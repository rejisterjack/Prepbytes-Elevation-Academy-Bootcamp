// function outerFunction(){
//   var outerVariable = 100;
//   function innerFunction(){
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }
// var innerFunc = outerFunction()
// innerFunc()


function outerFunction(){
  var outerVariable = 100;
  function innerFunction(){
    console.log(outerVariable);
  }
  return innerFunction()
}
var innerFunc = outerFunction()
innerFunc()
