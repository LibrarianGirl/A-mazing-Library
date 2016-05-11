 var canvas, 
        context,
        bounce = -1;
        
    canvas = $("#canvas")[0]; //Canvas 0
    context = canvas.getContext("2d"); //ermöglicht das Zeichnen von 4ecken
    var w = canvas.width;
    var h = canvas.height; 
//d:delimiter
var delimiter = 10;
var size = w/delimiter;

 var Maze = new Array(
                      new Array(1,1,1,1,1,1,1,1,1,1),
                      new Array(1,0,0,0,1,1,1,0,0,0),
                      new Array(1,1,1,0,0,0,0,0,1,1),
                      new Array(1,0,0,0,1,1,1,0,1,1),
                      new Array(1,0,1,2,1,1,0,1,1,1),
                      new Array(1,0,0,1,1,1,0,0,0,1),
                      new Array(1,1,0,0,0,1,0,1,0,1),
                      new Array(1,1,1,1,0,1,0,1,0,1),
                      new Array(1,0,0,0,0,0,0,1,0,1),
                      new Array(2,0,1,1,1,1,1,1,1,1)
                      ); 


function BlackOrWhite(something){
    if(something == 1){return "black";}
    if(something == 2){return "red";}
    else{return "white";};
};

for(var i = 0;i<10;i++){
        for(var j = 0;j<10;j++){       
            rect(size*j,size*i,size,size,BlackOrWhite((Maze[i][j])));

    };
};

//+++++++++++++++++++++++++++++++++++++++++
//     CANVVAS UTILITIEZ
//+++++++++++++++++++++++++++++++++++++++++

function rect(x,y,w,h,color){
    context.fillStyle = color;  
    context.fillRect (x,y,w,h);  
};

