window.addEventListener('DOMContentLoaded', function(){

//Табы задание 7(Задание 10)

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

// modal window Задание 9 (Задание 10)

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
		statusMessage.classList.remove('status');
		
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

	//ES6
/*class Options {
	constructor(height, width, bg, fontSize, textAlign,paddingTop) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.paddingTop = paddingTop;
		
	}
	createNewDiv(text) {
		let div = document.createElement('div');
		div.textContent = text;

		div.style.cssText = `height: ${this.height};
							 width: ${this.width};
							 background-color: ${this.bg};
							 font-size: ${this.fontSize};
							 text-align: ${this.textAlign};
							 padding-top: ${this.paddingTop}`
							 
							
		document.body.appendChild(div)				
	}
}

let obj = new Options("200px", "300px", "lightgreen", "10px", "center", "150px");
obj.createNewDiv("Курс JavaScript2.0 HARD");

*/
//Form

let message = new Object();
	message.loading = " Загрузка...";
	message.successe = " Спасибо мы с вами свяжемся";
	message.failure = " Что- то пошло не так...";
let form = document.getElementsByClassName('main-form')[0],
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	    form.addEventListener('submit', function(event){
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'telegram.php')

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if(request.readyDtate < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if(request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.successe;
					
					// Добавляем контент на странице
				}
				else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				// очищаем поля ввода
			}
		});

	let contactForm = document.getElementById('form'),
		inputMail = contactForm.getElementsByTagName('input')[0],
		inputPhone = contactForm.getElementsByTagName('input')[1];

	    contactForm.addEventListener('submit', function(event){
		event.preventDefault();
		contactForm.appendChild(statusMessage);
		//AJAX
	let request = new XMLHttpRequest();

		request.open( "POST", 'telegram.php' )

		// Указываем кодировку, что бы все отображалось корректно
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		// Теперь получаем данные из инпутов! Для этого используем formData
	let formData = new FormData( contactForm );
     	// данные мы получили теперьих надо отправить
		request.send( formData );
		// Далее необходимо отследить статус нашего запроса
		request.onreadystatechange = function() {
			if ( request.readyState < 4 ) {
				statusMessage.innerHTML = message.loading;
			} else if ( request.readyState === 4 ) {
				if ( request.status == 200 && request.status < 300 ){
					statusMessage.innerHTML = message.successe;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
				inputMail.value = '';
				inputPhone.value = '';
	});

	//Slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n) {

			if (n > slides.length) {
				slideIndex = 1;
			};
			if (n < 1) {
				slideIndex = slides.length;
			};
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			}

			for (let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[slideIndex -1].style.display = 'block';
			dots[slideIndex -1].classList.add('dot-active');
		}

		function plusSlides (n) {
			showSlides(slideIndex += n)
		}

		function currentSlide(n) {
			showSlides(slideIndex = n)
		}

		prev.addEventListener('click', function() {
			plusSlides(-1);
 
		});
		next.addEventListener('click', function() {
			plusSlides(+1);

		});

		dotsWrap.addEventListener('click', function(event){
			for (let i = 0; i < dots.length + 1; i++) {
				if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
			}
		});

	// Calc
		let persons = document.getElementsByClassName('counter-block-input')[0],
		    restDay = document.getElementsByClassName('counter-block-input')[1],
		    place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
		    personsSum = 0,
		    daysSum = 0,
		    total = 0;

		    totalValue.innerHTML = 0;

		    persons.addEventListener('keyup', function(){
				let zero = 0,
					y = '';
		    	personsSum = +this.value
		    	total = (daysSum + personsSum) * 4000 *place.options[place.selectedIndex].value;
		    	if (restDay.value == '' || restDay.value <= zero || persons.value == y ){
					
					totalValue.innerHTML = 0;
					
		    	} else {
					
		    		setValue(totalValue,total, 111,1 );
		    		//totalValue.innerHTML = total;
		    		

		    	}
		    	
		    });
		     restDay.addEventListener('keyup', function(){
				let zero = 0,
					y = '';
				
		    	daysSum = +this.value
		    	total = (daysSum + personsSum) * 4000*place.options[place.selectedIndex].value;
		    	if (persons.value == '' || persons.value <= zero || restDay.value == y ){
					
					totalValue.innerHTML = 0;
					
		    	} else {
					
		    		setValue(totalValue,total, 111,1 );
		    		//totalValue.innerHTML = total;
		    		

		    	}
		    	
		    });

		    place.addEventListener('change', function() {
				let zero = 0;
		    	if (restDay.value == '' && persons.value == '' && restDay.value == zero && persons.value == zero ) {
					totalValue.innerHTML = 0;
		    	} else {
		    		let a = total;
					let b = a*this.options[this.selectedIndex].value;
		    		
		    		setValue(totalValue,b, 111,1);
		    		
		    	}

		    	
		    });
		   	persons.onkeypress = function(e) {
		   		if (e.key === '.' || e.key === '+' || e.key === 'e' || e.key === ',' || e.key === '0') {
		   			return false;
		   		}
		   	};

		   	restDay.onkeypress = function(e) {
		   		if (e.key === '.' || e.key === '+' || e.key === 'e' || e.key === ',' || e.key === '0'){
		   			return false;
		   		}
		   	}

		   	var setValue = function(elem, value, step, speed){
      		let interval = setInterval(function() {

      		if (elem.innerHTML * 1 + step >= value  ) {

        		elem.innerHTML = value;

        		clearInterval(interval);
     		} else {

        	elem.innerHTML = elem.innerHTML * 1 + step;
      			}
      				}, speed);
  			}

  		