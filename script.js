var arr=[[null,null,null],[null,null,null],[null,null,null]];
var player=0;

function doClick(id,i,j){
    if(player==0){
        arr[i][j]=0;
        id.innerHTML='O';
    }else{
        arr[i][j]=1;
        id.innerHTML='X';
    }
    
}

