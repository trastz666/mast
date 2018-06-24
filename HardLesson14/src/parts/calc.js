function calc() {
	// Calc
		let persons = document.getElementsByClassName('counter-block-input')[0],
		    restDay = document.getElementsByClassName('counter-block-input')[1],
		    place = document.getElementById('select'),
		    totalValue = document.getElementById('total'),
		    personsSum = 0,
		    daysSum = 0,
		    total = 0;

		    totalValue.innerHTML = 0;

		    persons.addEventListener('change', function(){
		    	personsSum = +this.value
		    	total = (daysSum + personsSum) * 4000;
		    	if (restDay.value == ''){
		    		totalValue.innerHTML = 0;
		    	} else {
		    		setValue(totalValue,total, 111,1 );
		    		//totalValue.innerHTML = total;
		    		

		    	}
		    	
		    });
		     restDay.addEventListener('change', function(){
		    	daysSum = +this.value
		    	total = (daysSum + personsSum) * 4000;
		    	if (persons.value == ''){
		    		totalValue.innerHTML = 0;
		    	} else {
		    		setValue(totalValue,total, 111,1 );
		    		//totalValue.innerHTML = total;
		    		

		    	}
		    	
		    });

		    place.addEventListener('change', function() {
		    	if (restDay.value == '' || persons.value == '') {
		    		totalValue.innerHTML = 0;
		    	} else {
		    		let a = total;
		    		let b = a  * this.options[this.selectedIndex].value;
		    		setValue(totalValue,b, 111,1);
		    		
		    		

		    	}

		    	
		    });
		   	persons.onkeypress = function(e) {
		   		if (e.key === '.' || e.key === '+' || e.key === 'e' || e.key === ',') {
		   			return false;
		   		}
		   	};

		   	restDay.onkeypress = function(e) {
		   		if (e.key === '.' || e.key === '+' || e.key === 'e' || e.key === ','){
		   			return false;
		   		}
		   	}

		   	var setValue = function(elem, value, step, speed){
      		let interval = setInterval(function() {

      		if (elem.innerHTML * 1 + step >= value  ) {

        		elem.innerHTML = value;

        		clearInterval(interval);
     		} else {

        	elem.innerHTML = elem.innerHTML * 1 + step;
      			}
      				}, speed);
  			}

}

export default calc;