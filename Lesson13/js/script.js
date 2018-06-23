$(document).ready(function(){

//Получить консультацию
	$('.main_btn:eq(0)').on('click', function(){
		$('.overlay').animate (
		{
			opacity:'toggle'
			
		});
		$('.modal').slideDown(1000)
		$('.modal').animate({
			opacity: "0.8"
		})
	});

// Выбрать тур
	$('.main_btna:eq(0)').on('click', function(){
		$('.overlay').animate (
		{
			opacity:'toggle'
		});
		// Вторая анимация для кнопки Выбрать тур
		//$('.modal').delay(100).hide(300).delay(100).show(500)
		$('.modal').animate(
		{
			
			opacity:'toggle',
			width:'400px',
			
			

		},2500);
	});

	$('span:first').on('click', function(){
		$('.modal').slideUp(1000)
		
		$('.overlay').animate(
		{
			opacity:'toggle'
		});
	});

//Расписание туров
	 $('li:nth-child(2)').on('click', function(){
		
		$('.overlay').animate (
		{
			opacity:'toggle'
		});
		$('.modal').slideDown(1000)
	});
	
$('.contactform_select').submit(function(event){
	event.preventDefault();
	console.log($(this).serialize())
	$.ajax({
		url: "mailer/mailer/smart.php",
		type: "POST",
		data: $(this).serialize()
	}).done(function(){
		debugger
		alert(' Спасибо за заявку')
	});
	});
});







