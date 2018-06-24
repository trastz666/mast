function timer() {
	//timer задание 8 (Задание 10)
let deadline = '2018-06-22';

function addZero(num) {
	if (num >=0 && num < 10) {
		return '0' + num;
	} else {
		return num;
	}
};

function getTimeRemainig (endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds =addZero( Math.floor ( (t/1000) % 60 )),
		minutes = addZero(Math.floor ( (t/1000/60 ) % 60)),
		hours = addZero(Math.floor ( (t/(1000*60*60)) ));

	return {
		'total' : t,
		'hours' : hours,
		'minutes': minutes,
		'seconds' : seconds
	};
	
};

function setClock(id, endtime) {

	let timer = document.getElementById(id),
		hours = timer.querySelector(".hours"),
		minutes = timer.querySelector(".minutes"),
		seconds = timer.querySelector(".seconds");
		let timeInterval = setInterval(updateClock, 1000);
		function updateClock() {

			let t = getTimeRemainig(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0) {
					hours.innerHTML = 0+'0';
				    minutes.innerHTML = 0+'0';
				    seconds.innerHTML = 0+'0';

					clearInterval(timeInterval);
					
				};	

			}
			updateClock();
			
	};

	setClock('timer', deadline);
}

module.exports = timer;