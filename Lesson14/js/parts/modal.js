function modal() {
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

}

module.exports = modal;