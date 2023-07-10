console.log('asdas')
function displayImage(data) {
	console.log(data)
	// add image dynamically here we are creating new element and passing new element and passing new value
/*1st way*/
/*	$('<img>',{
		src:data.url,
		height:'100%',
		width:'100%'
	}).appendTo('#image-container')
*/// 2nd way
$(document.createElement('img')).attr('src',data.url).appendTo('#image-container')


}
// my NASA Api 4iuIOd6pSSHSrgMNv3qjv8yjJFPwiWJTQj6YsDZF

$.ajax({
	url:'https://api.nasa.gov/planetary/apod', //** one way https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-06-05 we can also paseed this by passing in data**// &date=2018-06-05 is a query paramentr
	method:'GET',
	success:displayImage,
	data:{// this is  alternate way of '?api_key=DEMO_KEY&date=2018-06-05' in the main link
		//api_key:'DEMO_KEY',
		api_key:'4iuIOd6pSSHSrgMNv3qjv8yjJFPwiWJTQj6YsDZF',
		date:'2018-06-05',
	}	
}) ;