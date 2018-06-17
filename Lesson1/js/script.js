let youBudget = prompt("Ваш бюджет?"),
	nameScore = prompt("Название вашего магазина?");
	shopGoods = [
		 prompt(" Какой тип товаров будем продавать?"),
		 prompt(" Какой тип товаров будем продавать?"),
		 prompt(" Какой тип товаров будем продавать?")];
	

console.log(youBudget); 
console.log(nameScore);


let mainList = {
	budget 	  : youBudget,
	nameShop  : nameScore,
	products  : shopGoods,
	employers : {},
	open: false

};

console.log(mainList);

let budgetDaysMonth  = 30,
	budgetDay        = youBudget/budgetDaysMonth;

	alert("Ваш бюджет на один день:" + budgetDay);







