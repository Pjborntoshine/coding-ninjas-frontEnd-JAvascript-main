// $('#main').click(function(){
// 	console.log('afafda')
// })
var toggled=false
$('#toggel').click(function(){
	console.log('afafda')
	if(!toggled){
	$('#toggel').css({
		left:'70%'
	})
	$('.toggle-main').css({
		backgroundColor:'white',
		color:'black'
	})
	toggled = true
}else if(toggled){
	$('#toggel').css({
		left:'0%'
	})
	$('.toggle-main').css({
		backgroundColor:'black',
		color:'white'
	})
	toggled = false
}

})