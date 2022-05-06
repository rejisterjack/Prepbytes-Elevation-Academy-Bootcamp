const array = [1, 2, 3, 4, 5];
let odd = 0;
let even = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i]%2===0)
    even++
  else
    odd++
}
console.log("Even =", even);
console.log("Odd = ", odd);