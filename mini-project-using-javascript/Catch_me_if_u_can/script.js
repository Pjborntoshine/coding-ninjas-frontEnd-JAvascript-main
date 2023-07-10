var main_cont = document.querySelector('.main-cont')
var catch_box = document.querySelector('.catch-me-box')

catch_box.addEventListener('mouseover',function(){

	console.log('dsad')
	var top = Math.floor((Math.random()*100) + 1);
	console.log(top)
	var botton = Math.floor((Math.random()*100) + 1);
	console.log(botton)
	var left = Math.floor((Math.random()*100) + 1);
	console.log(left)
	catch_box.style.top = top+"%";
	//catch_box.style.botton = botton+"%";	
	catch_box.style.left = left+"%";
})
// catch_box.addEventListener('mouseout',function(){
// 	console.log('dsad')})
