function dateTime(){
  let time = new Date().toLocaleTimeString()
  document.getElementById("demo").innerText = time
}
setInterval(dateTime,1000)

function hideMe(){
  document.getElementById("new").style.display="none"
}