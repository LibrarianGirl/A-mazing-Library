function Game() {
//Globale Programmvariablen

	var Levels = new Array(); //die verschiedenen MyMaze in einer Variable, soll Level angeben Eintrag 0 = Level 1
	
	var currentMaze; 
	var currentLevel =0;
	
	var MyMaze = new Array(												// Labyrinth Level 1
								//  0,1,2,3,4,5,6,7,8,9,A,B,C,D,E
						  new Array(0,0,1,1,1,1,1,1,1,1,1,1,1,1,1),//0
						  new Array(2,0,1,0,0,0,0,0,0,0,0,1,1,1,1),//1
						  new Array(1,0,1,0,1,1,1,1,0,0,0,0,0,1,1),//2
						  new Array(1,0,1,0,0,0,1,0,0,1,1,1,0,1,1),//3
						  new Array(1,0,1,1,1,0,1,1,1,1,1,1,0,0,1),//4
						  new Array(1,0,1,1,0,0,1,1,0,1,1,1,0,1,1),//5
						  new Array(1,0,1,1,0,1,1,0,0,0,0,0,0,0,0),//6
						  new Array(1,0,0,0,0,0,0,1,0,1,1,1,1,1,0),//7
						  new Array(1,1,1,1,1,0,1,1,0,0,0,0,0,1,0),//8
						  new Array(0,0,0,0,0,0,1,1,0,1,1,1,0,1,0),//9
						  new Array(0,1,1,1,1,0,0,1,0,1,0,0,0,1,0),//A
						  new Array(0,0,0,0,0,0,1,0,0,1,0,1,1,1,1),//B
						  new Array(1,1,1,1,1,1,1,1,0,1,0,0,0,0,1),//C
						  new Array(1,1,1,1,1,1,1,1,0,0,0,0,0,1,1),//D
						  new Array(1,1,1,1,1,1,1,1,1,1,1,1,0,0,2)//E
						  ); 
	
						  
		var MyMaze2 = new Array( 											//Labyrinth Level 2
								//  0,1,2,3,4,5,6,7,8,9,A,B,C,D,E
						  new Array(0,0,0,0,0,0,0,0,1,1,1,1,1,1,1),//0
						  new Array(2,1,1,0,1,1,1,0,0,0,0,0,0,0,0),//1
						  new Array(1,0,1,0,0,0,0,0,1,1,1,1,1,1,1),//2
						  new Array(1,0,1,1,1,1,1,0,0,0,0,0,0,0,1),//3
						  new Array(1,0,1,1,0,0,0,0,1,0,1,1,0,1,1),//4
						  new Array(1,0,1,0,0,1,0,1,1,0,1,0,0,0,1),//5
						  new Array(1,0,0,0,1,1,0,1,0,0,1,1,0,1,1),//6
						  new Array(1,1,1,1,1,0,0,1,0,1,1,0,0,1,1),//7
						  new Array(1,1,0,0,0,0,1,1,0,1,0,0,1,1,1),//8
						  new Array(1,1,0,1,1,0,1,1,0,0,0,1,1,1,1),//9
						  new Array(1,1,0,0,0,0,0,0,1,1,1,1,1,1,1),//A
						  new Array(1,1,0,1,1,0,1,0,0,0,0,0,1,1,1),//B
						  new Array(0,0,0,1,0,0,1,1,0,1,1,0,0,1,1),//C
						  new Array(1,1,1,1,0,1,1,0,0,1,1,1,0,0,0),//D
						  new Array(1,1,1,1,0,0,0,0,1,1,1,1,1,1,2)//E
						  ); 
						  
	var MyMaze3 = new Array( 											//Labyrinth Level 3
								//  0,1,2,3,4,5,6,7,8,9,A,B,C,D,E
						  new Array(0,2,1,1,1,1,0,0,0,1,0,0,0,1,1),//0
						  new Array(0,0,0,0,0,0,0,1,0,0,0,1,0,1,1),//1
						  new Array(0,1,1,1,1,1,0,1,1,1,1,1,0,1,1),//2
						  new Array(0,1,0,0,0,1,0,1,1,0,0,0,0,1,1),//3
						  new Array(0,1,0,1,0,1,0,1,1,0,1,1,0,0,0),//4
						  new Array(0,0,0,0,0,1,0,1,1,0,1,1,1,1,0),//5
						  new Array(1,1,1,1,1,1,0,1,1,0,0,0,1,1,0),//6
						  new Array(0,0,0,0,0,0,0,1,1,1,1,0,0,0,0),//7
						  new Array(0,1,1,1,1,1,1,1,1,0,0,0,1,1,1),//8
						  new Array(0,1,0,0,0,0,0,1,1,1,1,0,0,1,1),//9
						  new Array(0,0,0,1,1,1,0,0,0,0,1,1,0,0,1),//A
						  new Array(0,1,1,1,0,1,1,1,0,0,0,1,1,0,0),//B
						  new Array(0,0,0,0,0,1,1,1,0,1,0,0,1,1,0),//C
						  new Array(1,1,1,1,0,0,1,0,0,1,1,0,0,1,0),//D
						  new Array(1,1,1,1,1,0,0,0,1,1,1,1,0,1,2)//E
						  ); 

		var MyMaze4 = new Array( 											//Labyrinth Level 4
								//  0,1,2,3,4,5,6,7,8,9,A,B,C,D,E
						  new Array(0,0,0,0,1,1,1,0,0,0,1,1,1,1,1),//0
						  new Array(2,1,1,0,0,0,0,0,1,0,1,1,0,0,0),//1
						  new Array(0,0,1,1,1,1,1,1,1,0,1,0,0,1,0),//2
						  new Array(1,0,0,0,0,0,0,0,0,0,0,0,1,1,0),//3
						  new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,0),//4
						  new Array(1,0,0,0,1,0,0,0,0,0,1,1,0,0,0),//5
						  new Array(0,0,1,0,1,0,1,1,1,0,1,0,0,1,1),//6
						  new Array(0,1,1,0,1,0,0,0,0,0,0,0,1,1,0),//7
						  new Array(0,0,1,0,1,1,1,0,1,1,1,1,1,0,0),//8
						  new Array(1,0,1,0,0,0,0,0,1,1,0,0,0,0,1),//9
						  new Array(1,0,1,1,1,1,1,1,1,0,0,1,0,1,1),//A
						  new Array(1,0,0,0,0,0,0,0,0,0,1,1,0,0,0),//B
						  new Array(0,0,1,1,1,1,1,1,1,1,1,0,0,1,0),//C
						  new Array(1,0,0,0,1,1,1,1,1,1,0,0,1,1,0),//D
						  new Array(1,1,1,0,0,0,0,0,0,1,0,0,0,0,2)//E
						  ); 
		var Ende = new Array ( 												//Ende
								//  0,1,2,3,4,5,6,7,8,9,A,B,C,D,E
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//0
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//1
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//2
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//3
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//4
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//5
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//6
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//7
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//8
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//9
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//A
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//B
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//C
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),//D
						  new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)//E
							);
						  
	//MyMaze... wird in Levels geschrieben
	Levels.push(MyMaze);
	Levels.push(MyMaze2);
	Levels.push(MyMaze3);
	Levels.push(MyMaze4);
	Levels.push(Ende);
	
//Definiert den Canvas
	var canvas, 
		context,
		bounce = -1;
			
		canvas = document.getElementById("stage")
		context = canvas.getContext("2d"); 
		var w = canvas.width;
		var h = canvas.height; 
		var delimiter = 15;     // ermöglicht die Einteilung des Canvas in 15 Quadrate
		var size = w/delimiter; //legt die Größe der Quadrate fest
		
//Setzt den  Player auf Position 0	
		var player = {
			x: 0,
			y: 0
		};
		
//setzt den Bücherwagen auf Position 0
		var PosWagen = {
			x: 0,
			y: 0
		};
		
//setzt den Knopf auf Position 0
		var PosKnopf = {
			x: 0,
			x: 0
		};
		
//setzt den Blockade auf Position 0
		var PosBlockade = {
			x: 0,
			x: 0
		};

//setzt die Sprechblase auf Position 0	
		var PosBubble ={
			x:0,
			y:0
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
			 if (something == 0){return "white";};
		};

		for(var i = 0;i<15;i++){
			for(var j = 0;j<15;j++){       
				if (currentMaze[i][j] == 1)	{
					context.drawImage(document.getElementById('imageWand'),size*j,size*i,size,size)	;} //Zeichnet Wand
				else if (currentMaze[i][j] == 2)	{
					context.drawImage(document.getElementById('imageTor'),size*j,size*i,size,size)	;} //Zeichnet Tor
				else {
				rect(size*j,size*i,size,size,BlackOrWhite((currentMaze[i][j]))); 					   //Zeichnet Weg
				};
			};
		};
		
		//Ermöglicht das Zeichnen eines Vierecks	
		function rect(x,y,w,h,color){ 
			context.fillStyle = color;  
			context.fillRect (x,y,w,h); 
		};			
	
		//Lädt den Bücherwagen im 2. Level
		if (currentLevel == 1) {Bücherwagen()};
		
		//Lädt den Knopf und Blockade im 3. Level
		if (currentLevel == 2) {Knopf(); Blockade()};
		
		//Lädt den Zusatz im 4. Level
		if (currentLevel == 3) {Bücherwagen(); Knopf(); Blockade()};
		
		//Lädt die Sprechblase am Ende
		if (currentLevel == 4) {Bubble()};
	};	
	

//Setzt Zusatz auf Position
	function ZusatzLaden (){
		
		if (currentLevel == 1) {PosWagen = {
									x: 5,
									y: 10
									};
		};
		if (currentLevel == 2) {PosKnopf = {
									x: 6,
									y: 14
									};
								PosBlockade = {
									x: 12,
									y: 10
									};
		};
		if (currentLevel == 3) {PosWagen = {
									x: 8,
									y: 7
								};
								PosKnopf = {
									x: 0,
									y: 2
									};
								PosBlockade = {
									x: 5,
									y: 11
									};								
		};	
		if (currentLevel == 4) {player ={
									x: 6,
									y: 7
								};
								PosBubble ={
									x:7,
									y:2
								};
									
		};	
							
	};
	
	
//Zeichnet den Spieler	
	function Player() { 
		function draw(x,y,w,h){ 
				context.drawImage(document.getElementById('imagePlayer'),x,y,w,h);
		};
	draw(player.x*size,player.y*size,size,size);
	};	
		
	
//Zeichnet den Bücherwagen
	function Bücherwagen() {
		function draw(x,y,w,h){ 
				context.drawImage(document.getElementById('imageBücherwagen'),x,y,w,h);
		};
	draw(PosWagen.x*size,PosWagen.y*size,size,size);
	};
		
//Zeichnet den Knopf
	function Knopf() { 			
		function draw(x,y,w,h){ 
			context.drawImage(document.getElementById('imageKnopf'),x,y,w,h);
		};
	draw(PosKnopf.x*size,PosKnopf.y*size,size,size);
	};

//Zeichnet die Blockade		
	function Blockade() {
		function draw(x,y,w,h){ 
			context.drawImage(document.getElementById('imageWand'),x,y,w,h);
		};
	draw(PosBlockade.x*size,PosBlockade.y*size,size,size);
	};
		
// Zeichnet die Sprechblase		
	function Bubble () {
		function draw(x,y,w,h){ 
			context.drawImage(document.getElementById('imageEnde'),x,y,200,200);
		};
	draw(PosBubble.x*size,PosBubble.y*size,200,200);
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
		});
	};
	
//Kollisions erkennung mit Wand, Rand und Tor
	function canMove(x,y){
		if (x<0){return false;} //erkennt den Rand
		else if (y<0){return false;}
		else if (x>=delimiter){return false;} 
		else if (y>=delimiter){return false;}
		
		else if (currentMaze[y][x] ==1){return false;} // erkennt die Wand
		
		else if ((x == PosWagen.x)&& (y==PosWagen.y)) {return false;} // erkennt den Wagen

		else if ((x == PosBlockade.x)&& (y==PosBlockade.y)) {return false;} // erkennt die Blockade
		
		else if ((x == PosKnopf.x)&& (y==PosKnopf.y)) {PosBlockade.x=15; PosBlockade.y=15; return true;} // erkennt den Knopf und setzt Blockade aus dem Feld
		
		else if (currentMaze[y][x] ==2){alert('Gewonnen!');currentLevel++; player.x=0; player.y=0; PosWagen.x=0; PosWagen.y=0; ZusatzLaden();} //erkennt das Tor und bereitet nächstes Level vor
		
		else {return true;}	
	};	

//Bücherwagen bewegen und Kollisionserkennung 
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
		if (currentMaze[y][x] ==1){return false;}		// erkennt die Wand
		
		else if ((x == player.x)&& (y==player.y)) {return false;} // erkennt den Player
		
		else {return true;}	
	};	
		
};//Game over 