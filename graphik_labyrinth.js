function Spiel() {
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


//function Spielen() {
	var player = {
    x: 0,
    y: 0
	};

	//Draw the player
	context.beginPath();
	var half = size/2;
	context.fillStyle = "blue";
    context.arc(player.x*size+half, player.y*size+half, half, 0, 2*Math.PI);
    context.fill();	
	
//};	


//Check to see if the new space is inside the board and not a wall
function canMove(x, y){
    return (y>=1) && (y<w) && (x >= 1) && (x < h) && (board[y][x] != 0);
}

//+++++++++++++++++++++++++++++++++++++++++
//     CANVVAS UTILITIEZ
//+++++++++++++++++++++++++++++++++++++++++

function rect(x,y,w,h,color){
    context.fillStyle = color;  
    context.fillRect (x,y,w,h);  
};

}


