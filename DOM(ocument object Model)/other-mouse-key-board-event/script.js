var outerDiv = document.getElementById('outer');
outer.addEventListener('mouseover',function(){
	console.log('hey man')
})
outer.addEventListener('mouseout',function(){
	console.log('mouse out')
})
// key press event only @ input box
// var searchInput = document.getElementById('search')
// searchInput.addEventListener('keypress',function(){
// 	console.log('key press')
// })

// key press event any where @ screen
// document.addEventListener('keypress',function() {
// 	console.log('key is press @ screen')
// })

// for up,down,left and right key press
// document.addEventListener('keydown',function(){
// 	console.log('key is pressed')
// })
// to detect which key is press
document.addEventListener('keydown',function(event){ // collecting the event by mouse press ans key press
	console.log('key down',event.keyCode)
	})