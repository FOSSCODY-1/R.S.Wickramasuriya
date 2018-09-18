var arr=[[null,null,null],[null,null,null],[null,null,null]];
var player=0;
var winner;

function doClick(id,i,j){
    if(player==0){
        arr[i][j]=0;
        id.innerHTML='O';
        player=1;
    }else{
        arr[i][j]=1;
        id.innerHTML='X';
        player=0;
    }

    for(var i=0;i<=2;i++){
        if(arr[i][0]==player && arr[i][1]==player && arr[i][2]==player){
            winner=player;
        }
    }

    for(var j=0;j<=2;j++){
        if(arr[0][j]==player && arr[1][j]==player && arr[2][j]==player){
            winner=player;
        }
    }

    if((arr[0][0]==player && arr[1][1]==player && arr[2][2]==player) || (arr[0][2]==player && arr[1][1]==player && arr[2][0]==player)){
        winner=player;
    }

    if(winner==0 || winner==1){
        console.log("Winner is "+winner);
        
    }
    
}

