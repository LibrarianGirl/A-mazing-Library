function Game() {
	var canvas, 
		context,
		bounce = -1;
			
		canvas = document.getElementById("stage")
		context = canvas.getContext("2d"); //ermöglicht das Zeichnen von 4ecken
		var w = canvas.width;
		var h = canvas.height; 
		//d:delimiter
		var delimiter = 15;
		var size = w/delimiter;
		var player = {
			x: 0,
			y: 0
		};
	
	Maze()
	Player()
	move()

	//+++++++++++++++++++++++++++++++++++++++++
	//     	UTILITIEZ
	//+++++++++++++++++++++++++++++++++++++++++

//Labyrinth
	function Maze() { 
			var Maze = new Array(
								//  1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
						  new Array(0,0,1,1,1,1,1,1,1,1,1,1,1,1,1),//1
						  new Array(0,0,1,0,0,0,0,0,0,0,0,1,1,1,1),//2
						  new Array(1,0,1,0,1,1,1,0,0,0,0,0,0,1,1),//3
						  new Array(1,0,1,0,0,0,1,0,0,1,1,1,0,1,1),//4
						  new Array(1,0,1,1,1,0,1,1,1,1,1,1,0,0,1),//5
						  new Array(1,0,1,1,0,0,1,1,0,1,1,1,0,1,1),//6
						  new Array(1,0,1,1,0,1,1,0,0,0,0,0,0,0,0),//7
						  new Array(1,0,0,0,0,0,0,1,0,1,1,1,1,1,0),//8
						  new Array(1,1,1,1,1,0,1,1,0,0,0,0,0,1,0),//9
						  new Array(0,0,0,0,0,0,1,1,0,1,1,1,0,1,0),//A
						  new Array(0,0,1,1,1,0,0,1,0,1,0,0,0,1,0),//B
						  new Array(0,0,0,0,0,0,1,0,0,1,0,1,1,1,1),//C
						  new Array(1,1,1,1,1,1,1,1,0,1,0,0,0,0,1),//D
						  new Array(1,1,1,1,1,1,1,1,0,0,0,0,0,1,1),//E
						  new Array(1,1,1,1,1,1,1,1,1,1,1,1,0,0,2)//F
						  ); 

		function BlackOrWhite(something){
			if(something == 1){return "black";}
			if(something == 2){return "red";}
			else{return "white";};
		};

		for(var i = 0;i<15;i++){
			for(var j = 0;j<15;j++){       
				rect(size*j,size*i,size,size,BlackOrWhite((Maze[i][j])));

			};
		};
		function rect(x,y,w,h,color){
		context.fillStyle = color;  
		context.fillRect (x,y,w,h);  
		};
	};	
		
	
//Spieler	
	function Player() { //setzt Player an den Anfang
		
		
		
		//Draw the player
		context.beginPath();
		var half = size/2;
		context.fillStyle = "blue";
		context.arc(player.x*size+half, player.y*size+half, half, 0, 2*Math.PI);
		context.fill();	
	};
	
	// Figur bewegen
	function move(e){
		
		$(document).keyup(function(e){
			if(e.which == 38) //&& canMove(player.x, player.y-1))//Up arrow
				player.y--;
			else if(e.which == 40) //&& canMove(player.x, player.y+1)) // down arrow
				player.y++;
			else if(e.which == 37) //&& canMove(player.x-1, player.y))
				player.x--;
			else if(e.which == 39) //&& canMove(player.x+1, player.y))
				player.x++;
			
			Maze()
			context.beginPath();
			var half = size/2;
			context.fillStyle = "blue";
			context.arc(player.x*size+half, player.y*size+half, half, 0, 2*Math.PI);
			context.fill();
			e.preventDefault();
		});
	};
	

/*
	//Check to see if the new space is inside the board and not a wall
	function canMove(x, y){
		return (player.y>=1) && (player.y<w) && (player.x >= 1) && (player.x < h) && (new Array[player.y][player.x] != 0);
			
			
	};	*/

};







