window.addEventListener('DOMContentLoaded', function(){

//Табы задание 7

let tab = document.getElementsByClassName('info-header-tab'),
	tabContent = document.getElementsByClassName('info-tabcontent'),
	info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}
	}

	hideTabContent(1)

function showTabContent(b) {
	if( tabContent[b].classList.contains('hide')) {
		hideTabContent(0);
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');

	}
}

	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab' ) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});
});





//timer задание 8 
let deadline = '2018-06-19';

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

// modal window Задание 9 

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
//Плавная прокрутка
function animate(draw, duration) {
	let start = performance.now();

	requestAnimationFrame(function animate( time ){
		let timePassed = time - start;


		if(timePassed > duration) {
			timePassed = duration;
		}
		draw(timePassed);

		if(timePassed < duration) {
			requestAnimationFrame( animate );
		}
	})
}

let navigation = document.getElementsByTagName('nav')[0];

navigation.addEventListener('click', function(event){
	event.preventDefault();

	animate(function (timePassed){
        let target = event.target;


        let section = document.getElementById(target.getAttribute('href').slice(1));


        window.scrollBy(0, section.getBoundingClientRect().top/20-3);
      

	}, 1500)

});
