window.addEventListener("load",timer);

function timer(){
let date = new Date(),
	hours = date.getHours(),
	minuts = date.getMinutes(),
	seconds = date.getSeconds();

	if(hours < 10) hours = '0' + hours;
	if(minuts < 10) minuts = '0' + minuts;
	if(seconds < 10) seconds = '0' + seconds;

	document.getElementById('time').textContent = hours + ':' + minuts + ':' + seconds;

}

setInterval(timer, 1000);



