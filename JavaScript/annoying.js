// var ans;
// while(ans != "yes" && ans != "yeah"){
// 	ans = prompt("Are we there yet?");
// }
// alert("yeah!We finally made it!")

// version 2

var ans = "";
while(ans.indexOf("yes") === -1 && ans.indexOf("yeah") === -1){
	ans = prompt("Are we there yet?");
}
alert("yeah!We finally made it!")