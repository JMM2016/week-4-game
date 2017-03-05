/**
* if no arguments returns [0-99]
* if one arg, returns [0-x)
* if two args, returns [x-y)
*/
// could add 1 if random != 0 to include the max but enh
function randomNum(x, y){
		var random;
		if (typeof x == 'undefined' && typeof x == 'undefined'){
			//console.log("it's undef");
			random = Math.floor(Math.random() * 100);
		}
		else if (typeof x != 'undefined' && typeof y == 'undefined'){
			//console.log("  max: " + x);
			random = Math.floor(Math.random() * x);
		} else {
			random = Math.floor(Math.random() * (y - x) + x);
			//console.log("min: " + x + "  max: " + y);
		}							
		return random;
}
	
$(document).ready(function(){	
	console.log("yo");	
	// crystal values between 1 - 12
	
	var game = {
		win: 0,
		loss: 0,
		score: -1,
		random: -1,		// between 19 - 120			
		c1: -1,
		c2: -1,
		c3: -1,
		c4: -1,

		run: function(){
			this.setValues();		
			this.updateRecord();
			//this.pickTotal();						
			//this.updateRandom();
		},		
		
		updateRecord: function(){
			$("#record").html("Wins: " + this.win + 
							  "<p> Losses: " + this.loss + "</p>");
			$("#match").text(this.random);
			this.updateScore(); 								
		},

		// TODO: remove below - most likely
		/* random num function
		- that takes an argument which determines the random num returned range??
		- or just make two functs, one for 1-12 and another for 19-120??
		*/
		updateRandom: function() {
			this.random = randomNum(19,121);
			$("#match").text(this.random);			
		},	
		
		// TODO: don't let them be the same nums
		assignCrystal: function(){
			this.c1 = randomNum(1,13);
			this.c2 = randomNum(1,13);
			this.c3 = randomNum(1,13);
			this.c4 = randomNum(1,13);
		},

	 	addCrystalToScore(crystal){
	 		switch(crystal) {
				case "c1":
					console.log("it's c1= " + this.c1);
					this.score += this.c1;
					break;
				case "c2":
					console.log("it's c2= " + this.c2);
					this.score += this.c2;
					break;
				case "c3":
					console.log("it's c3= " + this.c3);
					this.score += this.c3;
					break;					
				case "c4":
					console.log("it's c4= " + this.c4);
					this.score += this.c4;
					break;						
				default:
					console.log("default");
			}
	 		this.updateScore();
	 		this.isGameOver();
	 	},
		
	 	updateScore: function(){
	 		$("#score").text(this.score);
	 	},

	 	isGameOver: function(){
	 		if (this.score == this.random){
	 			this.win++;
	 			this.setValues();
	 		}
	 		else if (this.score > this.random){
	 			this.loss++;
	 			this.setValues();	
	 		}
	 		this.updateRecord();
	 		this.updateScore();
	 	},

	 	setValues: function(){
	 		this.random = randomNum(19,121);
	 		this.assignCrystal();
	 		this.score = 0;
	 		/*	 		
	 		//this.random = randomNum(19,121);
			this.assignCrystal();
			this.score = 0;
			*/
	 	}
		// assign to crystals function ? well, won't need if have separate rand functs				
	};
		
	$("img").click(function() {
		//console.log( "Handler for .click() called." );		
		var crystal = $(this).attr("id");
		//console.log("crys: " + crys.attr("id") );		// $crys.attr("c1")
		//console.log(crystal);
		game.addCrystalToScore(crystal);
		
		
	});
	
	/*$("#c1").click(function() {
		console.log("c1 was pressed");
	});*/

	game.run();
	
});	

/*function getValue(){
	$("img").click(function() {
		console.log( "Handler for .click() called." );
		
		var crys = $(this).html();	
		console.log("crys: " + crys);
		
		
	});		
}*/


/*
for (var i = 0; i < 15; i++){
	console.log(randomNum());
}*/
/*
for (var i = 0; i < 15; i++){	
	console.log("max: 45" + "  " + randomNum(45));
}

for (var i = 0; i < 15; i++){
	console.log("min: 5 max: 66" + "  " + randomNum(5,66));
}

	
var i = [];
console.log(typeof i);
*/
/**
* if no arguments returns [0-99]
* if one arg, returns [0-x)
* if two args, returns [x-y)

// could add 1 if random != 0 to include the max but enh
function randomNum(x, y){
		var random;
		if (typeof x == 'undefined' && typeof x == 'undefined'){			
			random = Math.floor(Math.random() * 100);
		}
		else if (typeof x != 'undefined' && typeof y == 'undefined'){			
			random = Math.floor(Math.random() * x);
		} else {
			random = Math.floor(Math.random() * (y - x) + x);			
		}							
		return random;
}
*/
