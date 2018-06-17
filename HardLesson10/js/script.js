let input = document.getElementById('tel');

input.addEventListener('focus', tene => {
	if(!/^\+\d*$/.test(input.value))
		input.value = '+7';
});

input.addEventListener('keypress', ns =>{

	if(!/\d/.test(ns.key))
		ns.preventDefault();

});