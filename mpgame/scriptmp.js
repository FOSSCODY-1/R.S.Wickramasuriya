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

        if(player==0){
            arr[i][j]=false;
            id.style.color="#e2bd17";
            id.innerHTML='O';
            
        }else{
            arr[i][j]=true;
            id.style.color="#ffffff";
            id.innerHTML='X';
            
        }

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
    }else{
        return;
    }

    draw=true;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(arr[i][j]==null){
                draw=false;
            }
        }
    }

    if(draw){
        console.log("Draw");
    }

    if(won){
        
        if(!winner){
            console.log("Winner is Player 1");
            point1+=1;
            var p1=document.getElementById('point1');
            p1.innerHTML=point1;
        }else{
            console.log("Winner is Player 2");
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

