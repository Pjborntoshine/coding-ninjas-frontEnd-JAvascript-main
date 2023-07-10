var answer_box = document.getElementById('answer-box-id');
var  numAndSign = document.getElementsByClassName('num-and-sign');

var op1 = 0;
var op2 = null;
var operator = null;

function operators1(values) {
	var optr=''
	if(values == '+'||values == '*'||values == '/' ||values == '-'){
		optr = values
	}
	return optr;
}
for (var i = 0 ; i < numAndSign.length; i++) {
numAndSign[i].addEventListener('click',function(){
	var value = this.getAttribute('data-value')
	var calcop = '';
	var text = answer_box.textContent.trim();
	if(value == '+'){
	operator = '+';
	op1 = parseFloat(answer_box.textContent)
	answer_box.innerText=''
	console.log(op1)
	}
	else if(value == '-'){
	operator = '-';
	op1 = parseFloat(answer_box.textContent)
	answer_box.innerText=''
		
	}
	else if(value == '*'){
	operator = '*';
	op1 = parseFloat(answer_box.textContent)
	answer_box.innerText=''
		
	}
	else if(value == '/'){
	operator = '/';
	op1 = parseFloat(answer_box.textContent)
	
	answer_box.innerText=''
	

	}
	else if(value=='ac'){
		operator='';
		op1='';
		answer_box.innerText=''
	
	}else if(value == '.'){
		if (text.length && !text.includes('.')) {
                answer_box.textContent = text + '.';
            }
	}


	else if(value == '='){
	op2 = parseFloat(answer_box.textContent)
	if(op2 == 0 && op1>0 && operator =='/'){
		answer_box.innerText = 'value is infinite'
	}
	var res = eval(op1+'' + operator + ' ' + op2);
	
	if(res) { 
		answer_box.innerText = res
	}	
	}else{
		answer_box.innerText+=value
	}

	//answer_box.innerText += value;
	//calcop.split()

})
}

