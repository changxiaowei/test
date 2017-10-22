//'use strict'
//function test(a1,a2){
//	console.log(arguments);
//}
//test(14,15,16,17)

//var a = [1,2,3,4];
//a[0] = 'a';
//console.log(a);
function far(x){
	if(x<=1) return 1;
	return x * arguments.callee(x-1);
}
var n = far(3);
console.log(n);
