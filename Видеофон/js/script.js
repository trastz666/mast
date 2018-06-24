let open = document.getElementById("open-btn"),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item'),
	discount_card = document.getElementsByClassName('discount-card')[0];


choose_item.disabled = true;
goods_item[0].disabled = true;
goods_item[1].disabled = true;
goods_item[2].disabled = true;
goods_item[3].disabled = true;
hire_employers_item[0].disabled = true;
hire_employers_item[1].disabled = true;
hire_employers_item[2].disabled = true;
time_value.disabled = true;	
count_budget_value.setAttribute("readonly", "readonly");
budget_btn.disabled = true;
goods_btn.disabled = true;
employers_btn.disabled = true;
discount_card.disabled = true;



for (let i = 0; i < hire_employers_item.length; i++) {
    hire_employers_item[i].addEventListener('change', () => {

        if (hire_employers_item[i].value != '') {
            employers_btn.disabled = false;
        }else {
        	employers_btn.disabled = true;
        }

    });
};


for (let i = 0; i <goods_item.length; i++) {
    goods_item[i].addEventListener('change', () => {

        if (goods_item[i].value != '') {
           goods_btn.disabled = false;
        
        }else {
        	goods_btn.disabled = true;
        	
        }

    });
};


let money,
	price; //++ 



let mainList = {
 	budget: money,
 	shopName: name,
 	shopGoods: [],
 	employers: {},
 	open: false,
 	discount: true,


	
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


open.addEventListener('click' , () =>{
		if (mainList.open == true) {
		open.textContent = "Открыть магазин";
		choose_item.disabled = true;
		goods_item[0].disabled = true;
		goods_item[1].disabled = true;
		goods_item[2].disabled = true;
		goods_item[3].disabled = true;
		hire_employers_item[0].disabled = true;
		hire_employers_item[1].disabled = true;
		hire_employers_item[2].disabled = true;
		discount_card.disabled = true;
		time_value.disabled = true;	
		mainList.open = true;

	}else {
		money = prompt("Ваш бюджет?");


	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет?");
	}
	budget_value.textContent = money;

	name_value.textContent = prompt("Название вашего магазина?").toUpperCase();
		
		choose_item.disabled = false;
		goods_item[0].disabled = false;
		goods_item[1].disabled = false;
		goods_item[2].disabled = false;
		goods_item[3].disabled = false;
		hire_employers_item[0].disabled = false;
		hire_employers_item[1].disabled = false;
		hire_employers_item[2].disabled = false;
		discount_card.disabled = false;
		time_value.disabled = false;	
		mainList.open = true;
		open.textContent = "Закрыть магазин";
	}
});






goods_btn.addEventListener('click' , () => {

 for (let i = 0; i < goods_item.length; i++) {
		 	let a = goods_item[i].value

		 	if ((typeof(a)) === 'string' && (typeof(a)) != null  &&  a.length < 50 ) {
		 		console.log("Всё верно");
		 		mainList.shopGoods[i] = a
		 		goods_value.textContent = mainList.shopGoods;
		 	} else {
		 		i = i - 1;
		 	}
		 }
});


choose_item.addEventListener('change', () =>{
			let items = choose_item.value;

			if(isNaN(items) || items != ''){
				mainList.shopItems = items.split(',');
				mainList.shopItems.sort();


				items_value.textContent = mainList.shopItems;
			
		} 
			
});
	
time_value.addEventListener('change' , () =>{
	let time = time_value.value;

		if (time < 0 ) {
					console.log('Такого не может быть!');
					mainList.open = false;
				} else if (time >= 8 && time <= 20) {
					console.log('Время работать!');
					mainList.open = true;
				  }	else if (time < 24) {
						console.log('Уже слишком поздно!')
							mainList.open = false;
					}	else {
							console.log('В сутках только 24 часа!');
								mainList.open = false;
						}

						if (mainList.open == true) {
							isopen_value.style.backgroundColor = 'green'
						}
						else {
							isopen_value.style.backgroundColor = 'red'
						}


});


budget_btn.addEventListener('click', ()=>{
	count_budget_value.value = money/30;
});



employers_btn.addEventListener('click' , () => {
		mainList.employers = {}
			employers_value.textContent = '';
			for (let i = 0; i < hire_employers_item.length ; i++) {
				let name = hire_employers_item[i].value;
				mainList.employers[i] = name;

				employers_value.textContent += mainList.employers[i] + ', ';

			} 

});


discount_card.textContent = ' Оформить скидочная карту'
discount_card.addEventListener('click', ()=>{
		//mainList.discount = true;
		//if (mainList.discount == true) {
					//price = (price/100)*80;
					if (mainList.discount == true){
						discount_value.style.backgroundColor = 'green';
						discount_card.textContent = ' Убрать карту'
						mainList.discount = false
				}else  {
						discount_value.style.backgroundColor = 'red';
						discount_card.textContent = ' Оформить скидочную карту'
						mainList.discount = true
				}
				});
			



















