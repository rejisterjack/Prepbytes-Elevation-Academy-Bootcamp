const dateTime = () => {
	document.getElementById("hh").innerHTML=new Date().getHours()
	document.getElementById("mm").innerHTML=new Date().getMinutes()
	document.getElementById("ss").innerHTML=new Date().getSeconds()
}
setInterval(dateTime, 1000)