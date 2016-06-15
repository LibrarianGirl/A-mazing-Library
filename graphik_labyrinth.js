function Game() {
//Globale Programmvariablen

	var Levels = new Array(); //die verschiedenen MyMaze in einer Variable, soll Level angeben Eintrag 0 = Level 1
	
	var currentMaze; //!!wird mit jedem neuladen wieder auf 0 gesetzt
	var currentLevel =0;
	
	var MyMaze = new Array(												// Labyrinth Level 1
								//  1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
						  new Array(0,0,1,1,1,1,1,1,1,1,1,1,1,1,1),//1
						  new Array(2,0,1,0,0,0,0,0,0,0,0,1,1,1,1),//2
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
						  new Array(0,0,0,0,0,0,0,0,1,1,1,1,1,1,1),//1
						  new Array(1,2,1,0,1,1,1,0,0,0,0,0,0,0,0),//2
						  new Array(1,0,1,0,0,0,0,0,1,1,1,1,1,1,1),//3
						  new Array(1,0,1,1,1,1,1,0,0,0,0,0,0,0,1),//4
						  new Array(1,0,1,1,0,0,0,0,1,0,1,1,0,1,1),//5
						  new Array(1,0,1,0,0,1,0,1,1,0,1,0,0,0,1),//6
						  new Array(1,0,0,0,1,1,0,1,0,0,1,1,0,1,1),//7
						  new Array(1,1,1,1,1,0,0,1,0,1,1,0,0,1,1),//8
						  new Array(1,1,0,0,0,0,1,1,0,1,0,0,1,1,1),//9
						  new Array(1,1,0,1,1,0,1,1,0,0,0,1,1,1,1),//A
						  new Array(1,1,0,0,0,0,0,0,1,1,1,1,1,1,1),//B
						  new Array(1,1,0,1,1,0,1,0,0,0,0,0,1,1,1),//C
						  new Array(0,0,0,1,0,0,1,1,0,1,1,0,0,1,1),//D
						  new Array(1,1,1,1,0,1,1,0,0,1,1,1,0,0,0),//E
						  new Array(1,1,1,1,0,0,0,0,1,1,1,1,1,1,2)//F
						  ); 
						  
	var MyMaze3 = new Array( 											//Labyrinth Level 3
								//  1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
						  new Array(0,1,1,1,1,1,0,0,0,1,0,0,0,1,1),//1
						  new Array(0,0,0,0,0,0,0,1,0,0,0,1,0,1,1),//2
						  new Array(2,1,1,1,1,1,0,1,1,1,1,1,0,1,1),//3
						  new Array(0,1,0,0,0,1,0,1,1,0,0,0,0,1,1),//4
						  new Array(0,1,0,1,0,1,0,1,1,0,1,1,0,0,0),//5
						  new Array(0,0,0,0,0,1,0,1,1,0,1,1,1,1,0),//6
						  new Array(0,1,1,1,1,1,0,1,1,0,0,0,1,1,0),//7
						  new Array(0,0,0,0,0,0,0,1,1,1,1,0,0,0,0),//8
						  new Array(0,1,1,1,1,1,1,1,1,0,0,0,1,1,1),//9
						  new Array(0,1,0,0,0,0,0,1,1,1,1,0,0,1,1),//A
						  new Array(0,0,0,1,1,1,0,0,0,0,1,1,0,0,1),//B
						  new Array(0,1,1,1,0,1,1,1,0,0,0,1,1,0,0),//C
						  new Array(0,0,0,0,0,1,1,1,0,1,0,0,1,1,0),//D
						  new Array(1,1,1,1,0,0,1,0,0,1,1,0,0,1,0),//E
						  new Array(1,1,1,1,1,0,0,0,1,1,1,1,0,1,2)//F
						  ); 

		var MyMaze4 = new Array( 											//Labyrinth Level 4
								//  1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
						  new Array(0,0,0,0,1,1,1,0,0,0,1,1,1,1,1),//1
						  new Array(2,1,1,0,0,0,0,0,1,0,1,1,0,0,0),//2
						  new Array(0,0,1,0,1,1,1,1,1,0,1,0,0,1,0),//3
						  new Array(1,0,0,0,0,0,0,0,1,0,0,0,1,1,0),//4
						  new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,0),//5
						  new Array(1,0,0,0,1,0,0,0,0,1,1,1,0,0,0),//6
						  new Array(0,0,1,0,1,0,1,1,0,0,1,0,0,1,1),//7
						  new Array(0,1,1,0,1,0,0,0,1,0,0,0,1,1,0),//8
						  new Array(0,0,1,0,1,1,1,0,1,1,1,1,1,0,0),//9
						  new Array(1,0,1,0,0,0,0,0,1,1,0,0,0,0,1),//A
						  new Array(1,0,1,1,1,1,1,1,1,0,0,1,0,1,1),//B
						  new Array(1,0,0,0,0,0,0,0,0,0,1,1,0,0,0),//C
						  new Array(0,0,1,1,1,1,1,1,1,1,1,0,0,1,0),//D
						  new Array(1,0,0,0,1,1,1,1,1,1,0,0,1,1,0),//E
						  new Array(1,1,1,0,0,0,0,0,0,1,0,0,0,0,2)//F
						  ); 									  
						  
	//MyMaze... wird in Levels geschrieben
	Levels.push(MyMaze);
	Levels.push(MyMaze2);
	Levels.push(MyMaze3);
	Levels.push(MyMaze4)
	//console.log(currentLevel);
	
//Definiert den Canvas
	var canvas, 
		context,
		bounce = -1;
			
		canvas = document.getElementById("stage")
		context = canvas.getContext("2d"); //ermöglicht das Zeichnen von 4ecken
		var w = canvas.width;
		var h = canvas.height; 
		//d:delimiter
		var delimiter = 15;     // ermöglicht die Einteilung des Canvas in 15 Quadrate
		var size = w/delimiter;
		
//Setzt den  Player auf Position 0	
		var player = {
			x: 0,
			y: 0
		};
		
//setzt den Bücherwagen auf Position
		var PosWagen = {
			x: 0,
			y: 0
		};
		
// Eigentlicher Spielablauf
	Maze();
	Player();
	move();
	moveWagen();

	

	//+++++++++++++++++++++++++++++++++++++++++
	//     	UTILITIEZ
	//+++++++++++++++++++++++++++++++++++++++++

//Zeichnet Labyrinth
	function Maze() { 
	currentMaze = Levels [currentLevel];
		function BlackOrWhite(something){
			//if(something == 2){return "red";}
			 if (something == 0){return "white";};
		};

		for(var i = 0;i<15;i++){
			for(var j = 0;j<15;j++){       
				if (currentMaze[i][j] == 1)	{
					context.drawImage(document.getElementById('imageWand'),size*j,size*i,size,size)	;}
				else if (currentMaze[i][j] == 2)	{
					context.drawImage(document.getElementById('imageTor'),size*j,size*i,size,size)	;}	 
				else {
				rect(size*j,size*i,size,size,BlackOrWhite((currentMaze[i][j])));
				};
			};
		};
		
	function rect(x,y,w,h,color){
		context.fillStyle = color;  
		context.fillRect (x,y,w,h); 
		
		};			
	
		//Lädt  den Bücherwagen im 2. Level
		if (currentLevel == 1) {Bücherwagen()};
	};	

	//Bücherwagen laden
	function WagenLaden (){
			if (currentLevel == 1) {PosWagen = {
									x: 5,
									y: 10
									};
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
	
//Zeichnet den Bücherwagen
		function Bücherwagen() {
			function rect(x,y,w,h,color){
				//context.fillStyle = color;  
				//context.fillRect (x,y,w,h);  
				context.drawImage(document.getElementById('imageBücherwagen'),x,y,w,h);
				
				};
			rect(PosWagen.x*size,PosWagen.y*size,size,size,"brown");
		};
	
// Figur bewegen
	function move(e){
		
		$(document).keyup(function(e){
			if((e.which == 38) && canMove(player.x, player.y-1))//Hoch
				player.y--;
			else if((e.which == 40) && canMove(player.x, player.y+1)) //Runter
				player.y++;
			else if((e.which == 37) && canMove(player.x-1, player.y)) //Links
				player.x--;
			else if((e.which == 39) && canMove(player.x+1, player.y)) //Rechts
				player.x++;
			
			Maze();
			Player();
			e.preventDefault();
			//console.log(player);
		});
	};
	
//Kollisions erkennung mit Wand, Rand und Ende des Levels
	function canMove(x,y){
		if (x<0){return false;} //erkennt den Rand
		else if (y<0){return false;}
		else if (x>=delimiter){return false;} 
		else if (y>=delimiter){return false;}
		
		else if (currentMaze[y][x] ==1){return false;} // erkennt die Wand
		
		else if ((x == PosWagen.x)&& (y==PosWagen.y)) {return false;} // erkennt den Wagen 
		
		else if (currentMaze[y][x] ==2){alert('Gewonnen!');currentLevel++; player.x=0; player.y=0;WagenLaden();} //erkennt das Tor
		else {return true;}	
		//console.log (PosWagen);
		
	};	

//Bücherwagen bewegen 
    function moveWagen(e){
	
		$(document).keyup(function(e){
		
				
				if((e.which == 38 || e.which == 40 ) && canMoveWagen(PosWagen.x-1, PosWagen.y)) //Hoch und Runter: Links
					PosWagen.x--;
				if((e.which == 37 || e.which == 39 ) && canMoveWagen(PosWagen.x+1, PosWagen.y)) //Links und Rechts: Rechts
					PosWagen.x++;
			});
		
	
		Maze();
		Player();
		
	};
	
	function canMoveWagen (x,y){
		if (currentMaze[y][x] ==1){return false;} // erkennt die Wand
	
		else {return true;}	
	};	
	
	

	
};// ende Game







