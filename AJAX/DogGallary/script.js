//displayingDogWithSunBreed

   		

let arrs = []
function displayingDogWithSunBreed(selected_Sub_Breed) {
			

	console.log('@@@=>',selected_Sub_Breed)
	
	$('.dog-with-breed').remove();
			

	$.get('https://dog.ceo/api/breed/hound/'+selected_Sub_Breed+'/images',function(data){
		console.log('==>',data)
		let newBreedImg = $('<div>').addClass('dog-with-breed')
	newBreedImg.appendTo('.main-cont')
	for(let i=0;i<10;i++){
		let newImgBreeDiv = $('<div>').addClass('dogbreedListDem')
		newImgBreeDiv.appendTo(newBreedImg);
		let newbreedImg = $('<img>',{
			src:data.message[i]
		}).addClass('dogbreedImgDem')
		newbreedImg.appendTo(newImgBreeDiv)
	}
		
	})

}

// logic for dog with display breed and sun breeed
function fetchDogImage(newselectBreed){//images/random
	
	//console.log(selectedBreed) //'+selectedBreed.toLowerCase()+'
  $.get('https://dog.ceo/api/breed/'+newselectBreed.toLowerCase()+'/list',function(data){
      console.log('1st',data)
      
      let image_URL = data.message
   		console.log(data.message.length,'dadalen')
   		if(data.message.length ==0 ){
   			console.log('$$@37')
   			$('.breedOptions').css({
					'display':'none'
				});


  			$.get('https://dog.ceo/api/breed/'+newselectBreed.toLowerCase()+'/images',function(data){
  			console.log('dsada',data)
   			let newImageDic = $('<div>').addClass('newImageDivdem')
			newImageDic.appendTo('.main-cont')
			for(let i=0;i<15;i++){
			 let newImageBoxDem = $('<div>').addClass('imageboxDem')
			newImageBoxDem.appendTo(newImageDic)
			let imgTag = $('<img>',{
				src:data.message[i]
			}).addClass('imageDem')
		
			imgTag.appendTo(newImageBoxDem)
				
			}
   			})

   			}else {	
   	// 			$('.breedOptions').css({
				// 	'display':'none'
				// });
				$('.newImageDivdem').css({
					'display':'none'
				});

				
   				var newSelectList = ''
   				newSelectList = $('<select>').addClass('breedOptions').attr('id','dog_sub_list')
   				newSelectList.appendTo('.datearea')
 	  				for(let i=0;i<data.message.length;i++){
   					let newOption = $('<option>')
   					newOption.text(data.message[i])
   					newOption.appendTo(newSelectList)
   				}
   				var selected_Sub_Breed=''
   				selected_Sub_Breed=$('#dog_sub_list').val()
   				console.log(selected_Sub_Breed)
   				arrs.push(selected_Sub_Breed)
   				console.log(arrs)
   				// the below one is for removing all duplicate except the first one
   				$(".breedOptions:not(:first)").remove();	
   				

   				


   				displayingDogWithSunBreed(selected_Sub_Breed)	
				   				
   		}		
  }).fail(function(xhr,textStatus,errorThrown){
  	alert('data load is falied')
  })
}


	
function fetchTheDogss(){
			

			var selectedBreed=''

			selectedBreed=$('select#dogList').val()
   		console.log(selectedBreed)
		
		var newselectBreed = selectedBreed.toLowerCase()
		fetchDogImage(newselectBreed)
}

$('#getRoverImage').click(fetchTheDogss)