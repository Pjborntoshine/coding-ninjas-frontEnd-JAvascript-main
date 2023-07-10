// A $( document ).ready() block.
function fetctTheCourseFunction() {
	let mcCont = $('.fetxh-course-and-title');
	mcCont.css({
		'display':'none'
	})
	// ajax method and jquery
	$.ajax({
		url:'https://codingninjas.in/api/v3/courses',
		method:'GET',
		success:function(data){
			console.log(data.data.courses)
			let mainDiv = $('<div></div>').addClass('main-div')
			$('.main-cont').append(mainDiv)
			for(let i=0;i<data.data.courses.length;i++){
				console.log(data.data.courses[i])
				let imageURL = data.data.courses[i].classroom_icon_url 
				let newDiv = $('<div></div>').addClass('newDiv')
				let Imagedesc = $('<div></div>').addClass('Imagedesc')
				newDiv.append(Imagedesc);
				let imageDem = $('<img></img>').addClass('imageDem')
				
				let courseDesc =$('<div></div>').addClass('courseDesc') 
				let courseName =$('<p></p>').text(data.data.courses[i].title)
				let courseLevel =$('<p></p>').text(data.data.courses[i].level) 
				imageDem.attr('src',imageURL)
				courseDesc.append(courseName)
				courseDesc.append(courseLevel)
				Imagedesc.append(imageDem)
				Imagedesc.append(courseDesc)
				mainDiv.append(newDiv)	
			}
			
		}
	})

}

$('#fetchCourse').click(fetctTheCourseFunction)