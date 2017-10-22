var scope = 'global scope'
function checkscope(){
	var scope = 'local scope';
	function f() {return scope;}
	return f;
}
console.log(checkscope()()); //local scope

//function counter(n){
//	return{
//		get:count(){return n++;},
//		set:count(m){
//			if(m>=n) n=m;
//			else throw Error('值错误')
//		}
//	}
//}
//var c = counter(1000);
//console.log(c.count())
function constfuncs(){
	var funcs = [];
	for(var i=0;i<10;i++){
		funcs[i] = function(){return i;};
	}
	return funcs;
}
var funs = constfuncs();
console.log(funs[5]());

console.log('bind方法************************')
function f(y) {return this.x + y};
var o = {x:1};
var g = f.bind(o);
console.log(g(2));


