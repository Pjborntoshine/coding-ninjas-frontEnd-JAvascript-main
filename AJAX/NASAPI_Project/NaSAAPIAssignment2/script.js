
function displayMarsImg(data) {

	console.log('data=>',data)
	let newImageDic = $('<div>').addClass('newImageDivdem')
	newImageDic.appendTo('.main-cont')

	for(let i=0;i<data.photos.length;i++){
	let newImageBoxDem = $('<div>').addClass('imageboxDem')
	newImageBoxDem.appendTo(newImageDic)
	let imgTag = $('<img>',{
		src:data.photos[i].img_src
	}).addClass('imageDem')
	imgTag
	imgTag.appendTo(newImageBoxDem)
	
	}


}

function fetchMarsImage(solVal,NoOfPage) {
	// using AJax call method
	$.ajax({
		url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
		method:'GET',
		success:displayMarsImg,
		data:{
			api_key:'4iuIOd6pSSHSrgMNv3qjv8yjJFPwiWJTQj6YsDZF',
			sol:solVal,
			page:NoOfPage	
		}
	})
}

function imageSolAndPage() {
	let solVal =$('#SoVal').val()
	let NoOfPage = $('#NoOfPage').val()
	fetchMarsImage(solVal,NoOfPage)
}

$('#getRoverImage').click(imageSolAndPage)