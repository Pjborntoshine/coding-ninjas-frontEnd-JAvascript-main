var colors=["red", "blue", "yellow", "lightgrey",  'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 
'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson'
]


$('button').click(function() {
	//console.log('hey man')
	
	setInterval(function(){
	var colorelect = Math.floor(Math.random()*colors.length);
	console.log(colorelect)
	console.log(colors[colorelect])
	var newDiv = $('<div></div>').addClass('ball')
	newDiv.css('backgroundColor',colors[colorelect])
	$('.bucket').append(newDiv);
	},1000)


	}
)