/**
* if no arguments returns [0-99]
* if one arg, returns [0-x)
* if two args, returns [x-y)
*/
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
	
$(document).ready(function(){		
	
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
		},		
		
		updateRecord: function(){
			$("#record").html("Wins: " + this.win + 
							  "<p> Losses: " + this.loss + "</p>");
			$("#match").text(this.random);
			this.updateScore(); 								
		},				
		
		assignCrystal: function(){
			this.c1 = randomNum(1,13);
			this.c2 = randomNum(1,13);
			this.c3 = randomNum(1,13);
			this.c4 = randomNum(1,13);
		},

	 	addCrystalToScore(crystal){
	 		switch(crystal) {
				case "c1":					
					this.score += this.c1;
					break;
				case "c2":					
					this.score += this.c2;
					break;
				case "c3":					
					this.score += this.c3;
					break;					
				case "c4":					
					this.score += this.c4;
					break;										
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
			this.updateRandom();
			this.assignCrystal();
	 		this.score = 0;	 		
	 	},

		updateRandom(){
			var temp = this.random;
			this.random = randomNum(19,121);
			while(temp == this.random){
				this.random = randomNum(19,121);
			}
		}
		
	};
		
	$("img").click(function() {		
		var crystal = $(this).attr("id");		
		game.addCrystalToScore(crystal);				
	});	

	game.run();
	
});	