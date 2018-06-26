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
let deadline = '2018-06-30';

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
					let timeInterval = setInterval(updateClock, 1000);
				};	

			}

			updateClock();
			
			

	};

	setClock('timer', deadline);




//Модальное окно 
let tabsBtn = document.querySelectorAll('.description-btn'), 
	moreBtn = document.querySelector('.more'), 
	overlay = document.querySelector('.overlay'), 
	closeBtn = document.querySelector('.popup-close'), 
	popup = document.querySelector('.popup'); 



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
		console.log('Мы с телефона'); 
		overlay.classList.remove('fade') 
} else if( /Trident|Edge/i.test(navigator.userAgent) ) { 

		 
} else { 


for(let i = 0; i < 4; i++){ 
	tabsBtn[i].addEventListener('click', function() { 
		popup.style.top = '-305px'; 
		event.preventDefault() 
		this.classList.add('more-splash'); 
		modalWindowOpen (); 
	}); 
}; 

moreBtn.addEventListener('click', function(event){ 
		popup.style.top = '-305px'; 
		event.preventDefault() 
		this.classList.add('more-splash'); 
		modalWindowOpen (); 
}); 
function modalWindowOpen (){ 
		overlay.style.display = 'block'; 
		overlay.classList.remove('fade');
		setTimeout(function(){ 
		popup.style.top = '150px'; 
		}, 200) 
document.body.style.overflow = 'hidden'; 
}; 
	closeBtn.addEventListener('click', function(event){ 
		event.preventDefault() 
		this.classList.remove('more-splash'); 
		modalWindowClose(); 
}); 
function modalWindowClose(){ 
	popup.style.top = '-305px'; 
		setTimeout(function(){ 
			overlay.style.display = 'none'; 
			}, 500); 
document.body.style.overflow = ''; 
}; 

}