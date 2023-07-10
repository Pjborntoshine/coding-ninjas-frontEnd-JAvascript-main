function fetchRandonDogImage(){
/* Using method 1 or without  Jquery method
*/ 
	var xhrRequest =new XMLHttpRequest(); // for making request
	// onload is the function which is called once the request is recived
	xhrRequest.onload = function(){
		console.log('dasd=>',xhrRequest.response) // response from the server
		// converting String to JSON Object
		var responseJSON = JSON.parse(xhrRequest.response)
		// and to convert JSON to String the we must use JSON.stringfy
		console.log(responseJSON)
		//  getting imageURL
		var imageURL = responseJSON.message
		console.log('imageURL=>',imageURL)
		// here we are setting the result
		$('#dog-image').attr('src',imageURL)
	};
	xhrRequest.onerror = function(){
	console.log('Request Failed @ without Jquery method');
	};
	// to init the request
	xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true) // passing ,the api to get the random image of dogs
	//xhrRequest.open it can also take a 3rd argument boolen i.e true or false
	// true is for Async call and false is for synchoronous calll

	//making the request to the server
	xhrRequest.send('')


	
/*************************************** */

/* using Jquery i.e AJAX Using jquery
this is method 2 or Ajax Method*/
/*************************************** */
/*
$.ajax({
	url:'https://dog.ceo/api/breeds/image/random12',
	method:'GET',
	success:function(data){ //data will get here in function
		//var responseJSON = JSON.parse(xhrRequest.response)
		// here the data will get converted into JSON
		var imageURL = data.message
		console.log('imageURL=>',imageURL)
		$('#dog-image').attr('src',imageURL)
	}
}).fail(function() {
	console.log('error @ ajax method')
})
*/
/*************************************** */
/* 3rd methods i.e get method
*/
/*************************************** */

/*
$.get('https://dog.ceo/api/breeds/image/random',
		function(data){ //data will get here in function
		var imageURL = data.message
		console.log('imageURL=>',imageURL)
		$('#dog-image').attr('src',imageURL)
	}).fail(function(xhr,textStatus,errorThrown){ // for handling error 
		console.log('Request Failed')
	});
*/

/*************************************** */

}


$('#fetct-dog-image-button').click(fetchRandonDogImage);