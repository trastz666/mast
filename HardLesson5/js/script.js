
/*Первое задние*/ 

/*let date = new Date(2018, 4, 30, 9,59,59);

document.write(date.toLocaleTimeString()," ", date.toLocaleDateString());*/


/*Второе задание*/ 
/*function formatDate(date) {

  let day = date.getDate();
  if (day < 10) day = '0' + day;

  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;

  let year = date.getFullYear();

  return day + '.' + month+ '.'+year ;
}

var d = new Date(2018, 5, 1); 

document.write( formatDate(d) ); */

/*третье задание*/ 


/*let d = new Date();
function day(){
	let option ={
		weekday:'long'
	}
	document.write(d.toLocaleString("ru", option));
};
day();*/

/*Четвертое задание*/ 

function calc() {
	let date1= document.getElementById('date1').value,
		date2=document.getElementById('date2').value,

		test1 = new Date (date1),
		test2 = new Date (date2),
		i = test1.getTime(),
		y = test2.getTime();
		result = (i - y) /86400000;
	let result1 =document.getElementById('result');
	result1.value = result;
	

}