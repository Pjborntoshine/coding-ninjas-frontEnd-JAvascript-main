//var  = document.querySelectorAll('.rod')
var main_Contain = document.querySelector('.main-div')
var upperRod = document.querySelector('.upper-rod');
var lowerOd  = document.querySelector('.lower-rod');
//console.log(rodDiv)
var addleft=0;
var addRight = 0;
// ligoc for left and right
	document.addEventListener('keypress',function(event){
		console.log('pageoffset',main_Contain.offsetLeft)
		//console.log(event.keyCode)
		if(event.keyCode == 100 || event.keyCode == 68){
			
			upperRod.style.left =addleft+'%'; 			
			
			lowerOd.style.left = addleft+'%';
			console.log(upperRod.style.left)
				addleft = addleft+10;
			if(upperRod.style.left == 90+'%'){
				addleft = 90;
				lowerOd.style.left = addleft+'%';
				upperRod.style.left=addleft+'%' 						
				}
		}
		 if(event.keyCode == 97 || event.keyCode == 65){
			lowerOd.style.left = addleft+'%';
			upperRod.style.left=addleft+'%' 			
			addleft = addleft-10;	
			console.log(upperRod.style.left)
				if(upperRod.style.left == 0+'%'){
					console.log('zero')
					addleft = 0;
					lowerOd.style.left = addleft+'%';
					upperRod.style.left=addleft+'%' 					
				}
			

		}

})


