$('#sub').click(function(e){
	// to fetch element which was clicked
	e.preventDefault()
	console.log('clicked')
	var rollno = $('#rollno').val();
	var name = $('#name').val();
	var  marks = $('#marks').val();

	console.log(rollno,name,marks)
	if(rollno !='' && name!=''&& marks!=''){ 
	dispalyOnRight(rollno,name,marks)
	}else{
		alert('plaese fill the missing field')
	}
})
var switchBut = false
function dispalyOnRight(rollno,name,marks){

	var newDiv = $('<div></div>').addClass('name-roll-marks')
	var paraInsede = $('<p></p>').text('Roll no '+rollno + ' name ' + name + ' marks '+marks)
	if(!switchBut){
		newDiv.css('backgroundColor','lightgrey')
		switchBut = true
	}else{
		newDiv.css('backgroundColor','white')
		switchBut = false
	}
	newDiv.append(paraInsede)
	$('#aside-main').append(newDiv)	
}