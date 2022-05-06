
async function f(){
  console.log("calling");
  let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("done!")
    },2000)
  })
  let result = await promise
  console.log(result);
}
f()

