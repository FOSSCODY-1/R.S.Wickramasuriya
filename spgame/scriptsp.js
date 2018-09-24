var arr=[[null,null,null],[null,null,null],[null,null,null]];
var player=false;
var winner;
var won=false,draw;
var point1=0,point2=0;

function doClick(id,i,j){
    if(won || draw){
        restart();
        return;
    }

    if(!id.innerHTML){

        
        arr[i][j]=false;
        id.innerHTML='O';

        for(var i=0;i<3;i++){
            if(arr[i][0]==player && arr[i][1]==player && arr[i][2]==player){
                winner=player;
                won=true;
            }
        }

        for(var j=0;j<3;j++){
            if(arr[0][j]==player && arr[1][j]==player && arr[2][j]==player){
                winner=player;
                won=true;
            }
        }

        if((arr[0][0]==player && arr[1][1]==player && arr[2][2]==player) || (arr[0][2]==player && arr[1][1]==player && arr[2][0]==player)){
            winner=player;
            won=true;
        }

        player=true;
        autof(id.innerHTML);
        
        for(var i=0;i<3;i++){
            if(arr[i][0]==player && arr[i][1]==player && arr[i][2]==player){
                winner=player;
                won=true;
            }
        }

        for(var j=0;j<3;j++){
            if(arr[0][j]==player && arr[1][j]==player && arr[2][j]==player){
                winner=player;
                won=true;
            }
        }

        if((arr[0][0]==player && arr[1][1]==player && arr[2][2]==player) || (arr[0][2]==player && arr[1][1]==player && arr[2][0]==player)){
            winner=player;
            won=true;
        }


    }

    if(draw){
        console.log("Draw");
    }


    if(won){
        
        if(!winner){
            console.log("Player 1 won");
            point1+=1;
            var p1=document.getElementById('point1');
            p1.innerHTML=point1;
        }else{
            console.log("Player 2 won");
            point2+=1;
            var p2=document.getElementById('point2');
            p2.innerHTML=point2;
        }
        
    }

    player = !player;
    
}

function restart(){
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            arr[i][j]=null;
        }
    }
    var b1=document.getElementById('b1');
    b1.innerHTML=null;
    var b2=document.getElementById('b2');
    b2.innerHTML=null;
    var b3=document.getElementById('b3');
    b3.innerHTML=null;
    var b4=document.getElementById('b4');
    b4.innerHTML=null;
    var b5=document.getElementById('b5');
    b5.innerHTML=null;
    var b6=document.getElementById('b6');
    b6.innerHTML=null;
    var b7=document.getElementById('b7');
    b7.innerHTML=null;
    var b8=document.getElementById('b8');
    b8.innerHTML=null;
    var b9=document.getElementById('b9');
    b9.innerHTML=null;

    won=false;
    draw=false;
}

function autof(playerid){
    var x=playerid[1];
    var y;
    var autoid;
    
    draw=true;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(arr[i][j]==null){
                draw=false;
            }
        }
    }
    
    do{
        x=Math.floor(Math.random()*9+1);
        y="b"+x;
        autoid=document.getElementById(y);
        
    }while((x==playerid[1] || autoid.innerHTML ) && !draw && !won);

    if(draw || won){
        if(won){
            draw=false;
        }
        return;
    }

    var a,b;
    if(x==1 || x==2 || x==3)
        a=0;
    else if(x==4 || x==5 || x==6)
        a=1;
    else if(x==7 || x==8 || x==9)
        a=2;

    if(x==1 || x==4 || x==7)
        b=0;
    else if(x==2 || x==5 || x==8)
        b=1;
    else if(x==3 || x==6 || x==9)
        b=2;
    
    arr[Math.floor(a)][b]=true;
    autoid.innerHTML='X';
}