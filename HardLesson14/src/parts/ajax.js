function ajax(){
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

}

export default ajax;