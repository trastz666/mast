//timer
let deadline = '2018-06-16';

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
			let timeInterval = setInterval(updateClock, 1000);
			

	};

	setClock('timer', deadline);

// modal window

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
		

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}); 
	close.addEventListener('click', function(){
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});




	let moreTabs = document.getElementsByClassName('description-btn');
	
		function moreMass() {

		    for(let i = 0; i < moreTabs.length; i++ ){

			moreTabs[i].addEventListener('click', function(){
				overlay.style.display = 'block';
			});
		};

	};
	moreMass();

