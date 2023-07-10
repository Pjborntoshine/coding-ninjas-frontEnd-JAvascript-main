// here we are propaget form inner div

// here we are handling click on inner div
// var innerDiv = document.getElementById('inner');
// innerDiv.addEventListener('click',function(){
// 	console.log('click inner Div')
// })
// var outerDiv = document.getElementById('outer');
// outerDiv.addEventListener('click',function(){
// 	console.log('click outer Div')
// })
// document.addEventListener('click',function(){
// 	console.log('clicke document')
// })
//since inner div is the part of outer div there for if we click on inner div then it will also get clicke by outer div 
// when ever we clicked on inner div it will propagate the outer div
// to stop propagation we have to recive the event that has happened and call event.stopPropagation @ inner div


		// var innerDiv = document.getElementById('inner');
		// innerDiv.addEventListener('click',function(event){
		// 	console.log('click inner Div')
		// 	event.stopPropagation()
		// })
		// var outerDiv = document.getElementById('outer');
		// outerDiv.addEventListener('click',function(){
		// 	console.log('click outer Div')

		// })

		// document.addEventListener('click',function(){
		// 	console.log('clicke document')
		// })
