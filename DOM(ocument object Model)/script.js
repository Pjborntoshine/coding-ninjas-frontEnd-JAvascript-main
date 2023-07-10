function sayHello(){
	alert('helolo')
}
function sayHello2(){
	alert('helolo again')
}

var hellobtn = document.getElementById('btn');
		
		// hellobtn.addEventListener('click',function(){
		// 	alert('HHHello')
		// }
		// ) 
hellobtn.addEventListener('click',sayHello); //passing function we can add more then one function handler lisitner like
hellobtn.addEventListener('click',sayHello2); //  adding more tehn one even listiners