let money,
	name,
	time,
	price; //++ 

function start() {
	money = prompt("Ваш бюджет?");


	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
};

start();

 let mainList = {
 	budget: money,
 	shopName: name,
 	shopGoods: [],
 	employers: {},
 	open: false,
 	discount: false,
 	chooseGoods: function chooseGoods() {
			 for (let i = 0; i < 5; i++) {
		 	let a = prompt("Какой тип товаров будем продавать?", "");

		 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		 		console.log("Всё верно");
		 		mainList.shopGoods[i] = a;
		 	} else {
		 		i = i - 1;
		 	}
		 }
	},
	workTime:function workTime(time) {
				if (time < 0 ) {
					console.log('Такого не может быть!');
				} else if (time > 8 && time < 20) {
					console.log('Время работать!');
				  }	else if (time < 24) {
						console.log('Уже слишком поздно!')
					}	else {
							console.log('В сутках только 24 часа!');
						}
			},

	dayBudget:function dayBudget() {
					alert("Ежедневный бюджет " + mainList.budget / 30); 
				},

	makeDiscount:function makeDiscount() {
				if (mainList.discount == true) {
					price = (price/100)*80;
				}
			}, //DZ
	hireEmployers:function hireEmployers() {
			for (let i = 1; i < 4; i++) {
				let name = prompt("Имя сотрудника");
				mainList.employers[i] = name;
			}
		},
	chooseShopItems: function chooseShopItems() {
		for(i = 0; i<1; i++) {
			let items = prompt(" Перечислите через запятую товары", "");
			if((typeof(items)) === 'string' && (typeof(items)) !== null && items != ''){
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt(" Подождите, еще ", ""));
				mainList.shopItems.sort();
				console.log('верно');
		} else {
			i = i-1;
		}
		
	}

 },
    assortShopItems: function assortShopItems() {
  	document.write(" У нас вы можете купить:" + "<br>");

  	mainList.shopItems.forEach(function(empty, i ){
				document.write((i+1)+ ")"  + empty + "<br>");
				});
  }	

}

let consolMass = console.log('Наш магазин включает в себя:');
	 for(let prop in mainList) {
	 console.log( prop)/* + " " + mainList[prop] );*/ // больше нравится так !
 }




mainList.chooseShopItems()
mainList.assortShopItems()
	


console.log(mainList);









