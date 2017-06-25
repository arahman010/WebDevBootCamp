function isEven(num){
	if(typeof(num) != "number" || num % 2 != 0){
		return false;
	}
	return true;

}

function factorial(num){
	if(typeof(num) != "number"){
		return false;
	}
	var sum = 1;
	while(num > 1){
		sum *= num;
		num--;
	}
	return sum;
}

function kebabToSnake(input){
	if(typeof(input) != "string"){
		return false;
	} 
	var index;
	while(input.indexOf("-") !== -1){
		index = input.indexOf("-");
		input = input.substr(0,index) + "_" + input.substr(index+1);
	}
	return input;
}