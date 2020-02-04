"use strict"
var nameiify;
(function(){
	
	var obj = {
		x : 10,
		y : 20
	}
	nameiify = "Test iify"
	console.log(obj);
	console.log(nameiify);
})()

	try{
	console.log(obj);		
	}catch(err){
		console.log(err.message);
	}
try{
	console.log(nameiify);		
	}catch(err){
		console.log(err.message);
	}
	//console.log();
var	namefunc;
function test(){
	 namefunc = "Pankaj";
	return namefunc
}	

console.log(test())

console.log(namefunc);