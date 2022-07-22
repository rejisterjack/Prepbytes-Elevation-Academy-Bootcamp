const arr = [1,2,3,4,5,6,7,8,9]
let evenNum = 0
let oddNum = 0
for(let i of arr){
	if(i%2===0){
		evenNum+=1
	}else{
		oddNum+=1
	}
}
console.log(`even no: ${evenNum}, odd no: ${oddNum}`)