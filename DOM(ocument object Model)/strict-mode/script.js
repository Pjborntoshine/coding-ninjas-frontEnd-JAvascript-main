"use strict"
// this is used to catch an throw the exception 
// we can use strict mode @ methods
var btn = document.getElementById('btn');
var para  = document.getElementById('para')
var incNum = document.getElementById('incNum')
var counter = 1;
var func = function clicked() {
	//alert('cli')
	console.log('i have clicked')
	counter++;
	if(counter ==5){
	incNum.innerText = counter;
	//para.innerText = 'hi'
}
}

btn.addEventListener('click',func);