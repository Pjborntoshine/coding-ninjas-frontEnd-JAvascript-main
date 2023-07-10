var clickButton = document.getElementById('start-counter');
var inputText=document.getElementById('inputId'); 
clickButton.addEventListener('click',clonting)
function clonting() {
	inputText.setAttribute('inp-value',inputText.value)
	let firstValue= inputText.getAttribute('inp-value')
	setCounter(firstValue)
}
function setCounter(lastCounter){
	var firstDivClass = document.querySelector('.first-div')
	var secondDivClass = document.querySelector('.second-div')
	let className = firstDivClass.getAttribute('class')
	let secClassNema =secondDivClass.getAttribute('class') 
	let cn = className.split(' ')[1]
	console.log(cn)
	let cn2 = secClassNema.split(' ')[0]
	let i=0
	let dispclass = cn;
	let switch1 = true;	
	//lastCounter	=lastCounter+3;
	let Interval = setInterval(function(){
			
			console.log(i)
			if(switch1==true){
			firstDivClass.innerText = i
			firstDivClass.classList.remove('comm-div')	
			secondDivClass.classList.add('comm-div')	
			console.log('@ 1st class',i);
			switch1=false
			i++;
			}else if(switch1==false){
			secondDivClass.innerText = i  	
			console.log('@ 2nd class',i);
			secondDivClass.classList.remove('comm-div')	
			firstDivClass.classList.add('comm-div')	
			switch1=true;
			i++;
			}
			
			if(i>=lastCounter){
				clearInterval(Interval)
				return;
			}
			
	
},2000)
}