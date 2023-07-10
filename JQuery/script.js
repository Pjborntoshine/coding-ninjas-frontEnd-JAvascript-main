console.log('adfdaf')
//$('#para1').html('welcom')
/*
$() ->it is a function
function $(query){
	return document.querySelector(query)
}
## jquery return j query object
*/
//ex
// var p=$('para2')
// console.log(p)
//$('#para1').text('welcom')
//$('#para1').hide();
//learn .jquery.om
//$('#para1').width(); // act as getter and setter
// $('p').html('welcom')
// var paras = $('p')
// console.log(paras)
// paras.html('changed') // this will 
// // for getting paricular index
// var p1 = paras.eq(0); // this will return jquery object
// console.log(p1)
// p1.html('para1')
// var pss = paras[0] // this will return dom object
// console.log(pss )

// manipulating csss

$('#para1').css('color','red')
$('p').css('color','red')
$('p').css('font-size','30px')
$('p').css({
	fontSize:'100px',
	color:'blue'
})

$('div').css({
	width:"100px",
	height:"100px",
	backgroundColor:"cyan"
})

// handling events using jquery
$('div').click(function(){
	// to fetch element which was clicked
	var element = $(this);
	console.log(element)
	element.width(element.width() + 10+"px")
	//alert('clicked')
})
/***************/
// $('div').on('click',function(event){ like keybord,mouse click
	
// 	

// 	alert('clickec')
// })


//*************/
$('a').on('click',function (event) {
	event.preventDefault()
	alert('i have clicked')
})
