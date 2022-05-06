const countVowels = str => {
  let vowels = /[aeiou]/gi
  let result = str.match(vowels)
  let count = result.length
  return count
}
console.log(countVowels('abcdefghijklmnopqrstuvwxyz'));
console.log(countVowels('test'));