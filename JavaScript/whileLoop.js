console.log("All numbers between -10 and 19");
var num = -10;
while(num < 20){
	console.log(num);
	num++;
}
console.log("All numbers between 10 and 40");
num = 10;
while(num < 41){
	console.log(num);
	num++;
}
console.log("All Odd numbers between 300 and 333");
num = 301;
while(num < 334){
	console.log(num);
	num += 2;
}
console.log("All numbers divisible by 5 and 3 between 5 and 50");
num = 5;
while(num < 51){
	if(num % 3 == 0 && num % 5 == 0){
		console.log(num);
	}
	num++;
}