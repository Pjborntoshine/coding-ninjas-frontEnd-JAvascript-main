
function displayImagesFunc(data){
	console.log(data.photos[0].img_src)
	$('.data-and-getImage').css({
		'display':'none'
	});

	let newImageDic = $('<div>').addClass('newImageDivdem')
	newImageDic.appendTo('.main-cont')
	console.log(newImageDic)
	for(let i=0;i<14;i++){
	let newImageBoxDem = $('<div>').addClass('imageboxDem')
	newImageBoxDem.appendTo(newImageDic)
	let imgTag = $('<img>',{
		src:data.photos[i].img_src
	}).addClass('imageDem')
	imgTag
	imgTag.appendTo(newImageBoxDem)
	
	}

}

function fetchMarsImage(dateval){
	console.log('@dateval',dateval)
	// perfomining Ajajusing jquery
	$.ajax({
		url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
		method:'GET',
		success:displayImagesFunc,
		data:{
			api_key:'DEMO_KEY',
			sol:'1000',
			date:dateval
	
		}
	})
}

function  fetchDate() {
	var dateval = $('#dateInpVal').val()
	if(dateval==''){
		alert('please add date')
	}
	else{
//	console.log(datess)
	fetchMarsImage(dateval)
}

}
$('#getRoverImage').click(fetchDate)