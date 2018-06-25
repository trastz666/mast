/*const sum = require('./script.js');

test('2+2<10 это не правда' , () => {
  expect(sum(2, 2)).toBe(false);
});

*/

/*
const num = require('./script.js');

test(' Равно ли 5? ' , () => {
	expect(num).toBe(5);
});*/

const each = require('./script.js');



/*test ( ' each это массив? ' , () =>{

	expect(each.length).toEqual(5);
	});*/


test ( '  ' , () =>{

	//expect(typeof(each)).toEqual('object');
	expect(each).toEqual([8,7,6,5,4]);
	
	});