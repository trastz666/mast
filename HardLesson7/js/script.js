let box = document.getElementById('box'),
	btn = document.getElementById('btn');

console.log(box)

function animate(draw, duration) {

	let start = performance.now();

requestAnimationFrame(function animate(time) {

	let timePassed = time - start;

	console.log(time, start)

	if (timePassed > duration) timePassed = duration;
		draw(timePassed);


			if (timePassed < duration) {
			requestAnimationFrame(animate);
		}

	});
}

btn.onclick = function() {
   animate(function(timePassed) {
  
   		box.style.left = timePassed / 10 + 'px';
   		box.style.top = timePassed / 10 + 'px';
		
	}, 10000);
};

