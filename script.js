N=1234
let sum=0;
while(N>0){
  sum+=N%10;
  N=Math.floor(N/10)
}
console.log(sum);