"use strict"
var changeColor = document.getElementById('changeColor');
var changeShape = document.getElementById('changeShape');
// function for changing the color of diagran
var cColors = function(){
	var cc = document.getElementsByClassName('circle');
	console.log('click-count')
	console.log(cc[0].style)
	if(cc[0].style.backgroundColor == ''){
		cc[0].style.backgroundColor = 'green'
	}else if(cc[0].style.backgroundColor == 'green')
	{
		cc[0].style.backgroundColor = ''
	}	
}

// function for changing the 
var cShape = function(){
	//console.log('i have clicked')
	var ss = document.getElementsByClassName('box');
	console.log(ss[0].style)
	//border-top-right-radius: 49px;
	if(ss[0].style.borderTopRightRadius==''){
		ss[0].style.borderTopRightRadius='45px';
	}else {
		ss[0].style.borderTopRightRadius='';
	}
}
changeColor.addEventListener('click',cColors)
changeShape.addEventListener('click',cShape)