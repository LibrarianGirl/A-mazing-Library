function Game() {
//Globale Programmvariablen

	var Levels = new Array(); //die verschiedenen MyMaze in einer Variable, soll Level angeben Eintrag 0 = Level 1
	
	var currentMaze; //!!wird mit jedem neuladen wieder auf 0 gesetzt
	var currentLevel =0;
	
	var MyMaze = new Array(												// Labyrinth Level 1
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
	
	var MyMaze2 = new Array( 											//Labyrinth Level 2
								//  1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
						  new Array(1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),//1
						  new Array(1,1,0,1,1,1,1,1,1,1,1,0,0,0,0),//2
						  new Array(0,1,0,1,0,0,0,1,1,1,1,1,1,0,0),//3
						  new Array(0,1,0,1,1,1,0,1,1,0,0,0,1,0,0),//4
						  new Array(0,1,0,0,0,1,0,0,0,0,0,0,1,1,0),//5
						  new Array(0,1,0,0,1,1,0,0,1,0,0,0,1,0,0),//6
						  new Array(0,1,0,0,1,0,0,1,1,1,1,1,1,1,1),//7
						  new Array(0,1,1,1,1,1,1,0,1,0,0,0,0,0,1),//8
						  new Array(0,0,0,0,0,1,0,0,1,1,1,1,1,0,1),//9
						  new Array(1,1,1,1,1,1,0,0,1,0,0,0,1,0,1),//A
						  new Array(1,1,0,0,0,1,1,0,1,0,1,1,1,0,1),//B
						  new Array(1,1,1,1,1,1,0,1,1,0,1,0,0,0,0),//C
						  new Array(0,0,0,0,0,0,0,0,1,0,1,1,1,1,0),//D
						  new Array(0,0,0,0,0,0,0,0,1,1,1,1,1,0,0),//E
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,1,1,2)//F
						  ); 
	//MyMaze... wird in Levels geschrieben
	Levels.push(MyMaze);
	Levels.push(MyMaze2);
console.log(Levels);
	
//Definiert den Canvas
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
		
//Setzt den  Player auf Position 0	
		var player = {
			x: 0,
			y: 0
		};
		
// Eigentlicher Spielablauf
	Maze();
	Player();
	move();
	

	//+++++++++++++++++++++++++++++++++++++++++
	//     	UTILITIEZ
	//+++++++++++++++++++++++++++++++++++++++++

//Zeichnet Labyrinth
	function Maze() { 
	currentMaze = Levels [currentLevel];
		function BlackOrWhite(something){
			if(something == 1){return "black";}
			if(something == 2){return "red";}
			else{return "white";};
		};

		for(var i = 0;i<15;i++){
			for(var j = 0;j<15;j++){       
				rect(size*j,size*i,size,size,BlackOrWhite((currentMaze[i][j])));

			};
		};
		function rect(x,y,w,h,color){
		context.fillStyle = color;  
		context.fillRect (x,y,w,h);  
		};
	};	
		
	
//Zeichnet den Spieler	
	function Player() { 		
		context.beginPath();
		var half = size/2;
		context.fillStyle = "blue";
		context.arc(player.x*size+half, player.y*size+half, half, 0, 2*Math.PI);
		context.fill();	
	};
	
// Figur bewegen
	function move(e){
		
		$(document).keyup(function(e){
			if((e.which == 38) && canMove(player.x, player.y-1))//Up arrow
				player.y--;
			else if((e.which == 40) && canMove(player.x, player.y+1)) // down arrow
				player.y++;
			else if((e.which == 37) && canMove(player.x-1, player.y))
				player.x--;
			else if((e.which == 39) && canMove(player.x+1, player.y))
				player.x++;
			
			Maze();
			Player();
			e.preventDefault();
		});
	};
	
//Kollisions erkennung mit Wand und Rand und Ende des Levels
	function canMove(x,y){
		if (x<0){return false;}
		else if (y<0){return false;}
		else if (x>=delimiter){return false;}
		else if (y>=delimiter){return false;}
		else if (currentMaze[y][x] ==1){return false;}
		else if (currentMaze[y][x] ==2){alert('Gewonnen!');currentLevel++;}
		else {return true;}	
	};	

};







