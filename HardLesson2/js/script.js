

let week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];

for(let i = 0; i < 7; i++){
 if(i == 4){
 	document.write('<i>'+week[i]+'</i><br>');
 }else if(i == 5 || i == 6){
 	document.write('<b>'+week[i]+'</b><br>');
 }else{
 	document.write(week[i]+'<br>');
 }
}


let arr = ['356', '48734','56334', '89443', '7213','9004','3323'];

for (let i = 0; i<arr.length; i++){
	for(let y = 0; y < 1; y++){
		if(arr[i][y] == '7' || arr[i][y] == '3'){
			console.log(arr[i]);
		}
	}
		
}
