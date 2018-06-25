// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;

}
sum(2,2);

// Делаем проверку

let assert = require('chai').assert

describe("sum", function(){
	it(' Сумма чисел 2+2 больше 10, это не правда', function(){
		assert.isFalse(sum(2,2))
	});
});// возвращает тру изначально функция была не правильная



// Переменная num должна быть равна 5. Проверить на соответствие.
/*
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

let assert = require('chai').assert

describe("num", function(){	
	it (' Переменная равна 5 ?', function(){
		assert.equal(num,5)
	});

});

*/



// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.
/*
var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));


var assert = require('chai').assert;
	describe("each", function(){
		it(' Тип данных массив? ', function() {
			assert.typeOf(each(arr,myFunc), 'array');
			
		});
		
		it(' У массива 5 элементов? ', function() {
			assert.lengthOf(each(arr, myFunc), 5);

		});
		
		it(' Массив выведен правильно? ', function(){
			assert.deepEqual(each(arr, myFunc), [8,7,6,5,4]);
		});
});
*/