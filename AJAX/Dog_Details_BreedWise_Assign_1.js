// using get method of Ajax and jquery

function fetchDogImage(selectedBreed){
console.log(selectedBreed)
  $.get('https://dog.ceo/api/breed/'+selectedBreed+'/images/random',function(data){
      let image_URL = data.message
    $('#dog-image').attr('src',image_URL)		
  }).fail(function(xhr,textStatus,errorThrown){
  	alert('data load is falied')
  })
}

var selectedBreed=''
  $('select#dogList').change(function(){
 	selectedBreed = $(this).children("option:selected").val();
 	console.log('slecetd breed',selectedBreed) 	
  })

function fetchDogImage1(){
		var newselectBreed = selectedBreed.toLowerCase()
	fetchDogImage(newselectBreed)
}


// logic for next button
function nextImageOfSameBreed(){
  console.log('asda',selectedBreed)

  $.get('https://dog.ceo/api/breed/'+selectedBreed.toLowerCase()+'/images/random',function(data){
    
    let image_URL = data.message
    $('#dog-image').attr('src',image_URL)   
  }).fail(function(xhr,textStatus,errorThrown){
    alert('data load is falied')
  }) 
}


$('#getImage').click(fetchDogImage1);
$('#next').click(nextImageOfSameBreed);