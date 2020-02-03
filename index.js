  j = "x";
var getIIF = (function(l){
	var i=0;
	return function(k){
	return i=i+j+k+l		
	}

})(2)

console.log(j)
/****/
console.log(getIIF(1));
console.log(getIIF(2));
console.log(getIIF(3));
console.log(getIIF(4));

var iifTest = (function(i){
	return i++;  
})(1)
console.log(iifTest);
console.log(iifTest);
console.log(iifTest);
function test(j){
	 j=j;
	return j;
}
console.log(test(111));
console.log(j);

