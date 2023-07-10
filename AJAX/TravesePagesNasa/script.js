	var pageNo 
	var start
	var end
	let prevButt = $('#prevPage')
	let nextButt = $('#nextPage')
	prevButt.prop('disabled',true)	
	nextButt.prop('disabled',true)
function imageShow(data,start,end){

	let newImageDic = $('<div>').addClass('newImageDivdem')
	newImageDic.appendTo('body')
	let MAx_no_of_field_in_onePage = end;

	for(let i=start;i<MAx_no_of_field_in_onePage;i++){
			let newImageBoxDem = $('<div>').addClass('imageboxDem')
			newImageBoxDem.appendTo(newImageDic)
			let imgTag = $('<img>',{
				src:data.photos[i].img_src
			}).addClass('imageDem')
			imgTag
			imgTag.appendTo(newImageBoxDem)
			
		}
}

function displayMarsImg(data) {
		
	
	 let fieldsArr =data
	console.log('dasda',fieldsArr)
	//let pageNo = 0;

	console.log('data=>',data)
	/*let newImageDic = $('<div>').addClass('newImageDivdem')
	newImageDic.appendTo('body')*/

	// pagenation logic max-no of fields = 10
		if(data.photos.length==0){
			prevButt.prop('disabled',true)	
			nextButt.prop('disabled',true)
		}
	else{

		console.log('data@dd',data)
		 imageShow(fieldsArr,start,end)
		 nextButt.prop('disabled',false)
		 nextButt.click(function(){
		 	start = end;
		 	end = end+10;
		 	if(end>data.photos.length){
		 		end = data.photos.length
		 			nextButt.prop('disabled',true)
	
		 	}
		 	console.log(data.photos.length)
		 	console.log('@startNet',start)
		 	
		 	console.log('@endnext',end)
		 	
		 	imageShow(fieldsArr,start,end)
			
		 	pageNo=pageNo+1;
		 	 if(pageNo>0){
		 	prevButt.prop('disabled',false)	
		 }
 	
		 	console.log('pageNo',pageNo)

		 })

		 prevButt.click(function(){
		 	pageNo = pageNo-1
		 	console.log('pageNo',pageNo)
		 	
		 	end = start;
		 	start = start-10;
		 	console.log('start@pre',start)
		 	console.log('end@pre',end)
		 	imageShow(fieldsArr,start,end)
		 	if(pageNo==0){
				prevButt.prop('disabled',true)	
		 		nextButt.prop('disabled',false)		
				}
			

		 })

	}




}


function fetchMarsImage(solVal) {
	// using AJax call method
	pageNo = 0;
	start = 0;
	end = 10;
	$.ajax({
		url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
		method:'GET',
		success:displayMarsImg,
		data:{
			api_key:'4iuIOd6pSSHSrgMNv3qjv8yjJFPwiWJTQj6YsDZF',
			sol:solVal
			}
			
	})
}


function imageSolAndPage() {

	let solVal =$('#SoVal').val()
	fetchMarsImage(solVal)
}

$('#getRoverImage').click(imageSolAndPage)


