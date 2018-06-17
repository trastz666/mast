let youBudget, 
	nameScore ,
	time ,
	price
	
function start() {
	 youBudget = prompt("Ваш бюджет?");

	 while (isNaN(youBudget) || youBudget == "" || youBudget == null) {
	 	youBudget = prompt("Ваш бюджет?");
	 }

	 nameScore = prompt("Название вашего магазина?").toUpperCase();

	 time = 8;
}
start()

console.log(youBudget); 
console.log(nameScore);


let mainList = {
	budget 	  : youBudget,
	nameShop  : nameScore,
	shopGoods :[],
	employers : {},
	open: false,
	discount: true

};

function chooseGoods() {
	for(let i = 0; i < 5; i++){

	let a = prompt("Какой тип товара будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;

	} else {
		--i;
	}
} 
}
chooseGoods();

function workTime(time) {
if (time < 0) {
	console.log('Этого не может быть!');
} else if (time  >=  8 && time <= 20) {
	console.log('Пора работать');
	}	else if (time < 24) {
			console.log('Магазин закрыт');
		}		else if (time > 24) {
			console.log("В сутках 24 часа");
			}
}
workTime(1);

console.log(mainList);

let budgetDaysMonth = 30;
budgetDay = function(youBudget,budgetDaysMonth) {
	return youBudget/budgetDaysMonth;
}
alert("Ваш дневной бюджет из расчета 30 дней:" + budgetDay(youBudget, budgetDaysMonth));

function discontSystem(price) {
	if (mainList.discount === true) {
		alert("Цена со скидкой" + price*80/100); 
	}else if (mainList.discount === false) {
		alert("Цена без скидки" + price);
	}
}
discontSystem(5000);

function employers() {
	for(let i = 0; i < 4; i++ )	{
		let name = prompt("Введите имя сотрудника?");
		mainList.employers[i] = name;
	}
}
employers();






