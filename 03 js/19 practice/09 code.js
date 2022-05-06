function numberOfZeros(array) {
  var zeros = [];
  var ones = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeros.push(array[i]);
    }
  }
  console.log("Numbers of zeros =" + zeros.length);
  for (var j = 0; j < array.length; j++) {
    if (array[j] === 1) {
      ones.push(array[j]);
    }
  }
  console.log("Numbers of ones =" + ones.length);
}
numberOfZeros([4, 0, 1, 5, 0]);