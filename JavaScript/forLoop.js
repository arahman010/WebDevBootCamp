console.log("All numbers between -10 and 19");
var num;
for(num = -10; num < 20; num++){
	console.log(num);
}
console.log("All numbers between 10 and 40");
for(num = 10; num < 41; num++){
	console.log(num);
}
console.log("All Odd numbers between 300 and 333");
for(num = 301; num < 334; num +=2){
	console.log(num);
}
console.log("All numbers divisible by 5 and 3 between 5 and 50");
for(num = 5; num <= 50; num++){
	if(num % 3 == 0 && num % 5 == 0){
		console.log(num);
	}
}