var arr = [[null, null, null], [null, null, null], [null, null, null]];
var player = false;
var winner;
var won = false, draw;
var point1 = 0, point2 = 0;
var gpx, gpy;

function doClick(id, i, j) {
    if (won || draw) {
        restart();
        var x = document.getElementById("status");
        x.style.color = "#e2bd17";
        x.innerHTML = "Your Turn";
        return;
    }

    if (!id.innerHTML) {


        arr[i][j] = false;
        id.style.color = "#e2bd17";
        id.innerHTML = 'O';

        for (var i = 0; i < 3; i++) {
            if (arr[i][0] == player && arr[i][1] == player && arr[i][2] == player) {
                winner = player;
                won = true;
            }
        }

        for (var j = 0; j < 3; j++) {
            if (arr[0][j] == player && arr[1][j] == player && arr[2][j] == player) {
                winner = player;
                won = true;
            }
        }

        if ((arr[0][0] == player && arr[1][1] == player && arr[2][2] == player) || (arr[0][2] == player && arr[1][1] == player && arr[2][0] == player)) {
            winner = player;
            won = true;
        }

        player = true;

        var x = document.getElementById("status");
        x.style.color = "#ffffff";
        x.innerHTML = "Computer's Turn";

        autof(id.innerHTML);

        for (var i = 0; i < 3; i++) {
            if (arr[i][0] == player && arr[i][1] == player && arr[i][2] == player) {
                winner = player;
                won = true;
            }
        }

        for (var j = 0; j < 3; j++) {
            if (arr[0][j] == player && arr[1][j] == player && arr[2][j] == player) {
                winner = player;
                won = true;
            }
        }

        if ((arr[0][0] == player && arr[1][1] == player && arr[2][2] == player) || (arr[0][2] == player && arr[1][1] == player && arr[2][0] == player)) {
            winner = player;
            won = true;
        }

        if (!won) {
            var x = document.getElementById("status");
            x.style.color = "#e2bd17";
            x.innerHTML = "Your Turn";
        }

    }

    if (draw) {
        document.getElementById("status").innerHTML = "Draw"
    }


    if (won) {

        if (!winner) {
            document.getElementById("status").innerHTML = "You Won"
            point1 += 1;
            var p1 = document.getElementById('point1');
            p1.innerHTML = point1;
        } else {
            document.getElementById("status").innerHTML = "Computer Won"
            point2 += 1;
            var p2 = document.getElementById('point2');
            p2.innerHTML = point2;
        }

    }

    player = !player;

}

function restart() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            arr[i][j] = null;
        }
    }
    var b1 = document.getElementById('b1');
    b1.innerHTML = null;
    var b2 = document.getElementById('b2');
    b2.innerHTML = null;
    var b3 = document.getElementById('b3');
    b3.innerHTML = null;
    var b4 = document.getElementById('b4');
    b4.innerHTML = null;
    var b5 = document.getElementById('b5');
    b5.innerHTML = null;
    var b6 = document.getElementById('b6');
    b6.innerHTML = null;
    var b7 = document.getElementById('b7');
    b7.innerHTML = null;
    var b8 = document.getElementById('b8');
    b8.innerHTML = null;
    var b9 = document.getElementById('b9');
    b9.innerHTML = null;

    won = false;
    draw = false;

    var x = document.getElementById("status");
    x.style.color = "#e2bd17";
    x.innerHTML = "Your Turn";
}

function autof(playerid) {
    var x;
    var y;
    var autoid;

    draw = true;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[i][j] == null) {
                draw = false;
            }
        }
    }

    if (gamepoint()) {

        if (gpx == 0 && gpy == 0) {
            x = 1;
        }
        if (gpx == 0 && gpy == 1) {
            x = 2;
        }
        if (gpx == 0 && gpy == 2) {
            x = 3;
        }
        if (gpx == 1 && gpy == 0) {
            x = 4;
        }
        if (gpx == 1 && gpy == 1) {
            x = 5;
        }
        if (gpx == 1 && gpy == 2) {
            x = 6;
        }
        if (gpx == 2 && gpy == 0) {
            x = 7;
        }
        if (gpx == 2 && gpy == 1) {
            x = 8;
        }
        if (gpx == 2 && gpy == 2) {
            x = 9;
        }
        y = "b" + x;
        autoid = document.getElementById(y);
    }

    if(!gamepoint || ((x==playerid[1] || autoid.innerHTML) && !draw && !won)){
        do {
            x = Math.floor(Math.random() * 9 + 1);
            y = "b" + x;
            autoid = document.getElementById(y);
        } while ((x == playerid[1] || autoid.innerHTML) && !draw && !won);
    }


    if (draw || won) {
        if (won) {
            draw = false;
        }
        return;
    }

    var a, b;
    if (x == 1 || x == 2 || x == 3)
        a = 0;
    else if (x == 4 || x == 5 || x == 6)
        a = 1;
    else if (x == 7 || x == 8 || x == 9)
        a = 2;

    if (x == 1 || x == 4 || x == 7)
        b = 0;
    else if (x == 2 || x == 5 || x == 8)
        b = 1;
    else if (x == 3 || x == 6 || x == 9)
        b = 2;

    arr[Math.floor(a)][b] = true;
    autoid.style.color = "#ffffff";
    autoid.innerHTML = 'X';
}

function gamepoint() {

    for (var i = 0; i < 3; i++) {
        if (arr[i][0] && arr[i][1]) {
            gpx = i;
            gpy = 2;
            return 1;
        }
        if (arr[i][0] && arr[i][2]) {
            gpx = i;
            gpy = 1;
            return 1;
        }
        if (arr[i][1] && arr[i][2]) {
            gpx = i;
            gpy = 0;
            return 1;
        }
    }
    for (var j = 0; j < 3; j++) {
        if (arr[0][j] && arr[1][j]) {
            gpx = 2;
            gpy = j;
            return 1;
        }
        if (arr[0][j] && arr[2][j]) {
            gpx = 1;
            gpy = j;
            return 1;
        }
        if (arr[1][j] && arr[2][j]) {
            gpx = 0;
            gpy = j;
            return 1;
        }
    }
    if (arr[0][0] && arr[1][1]) {
        gpx = 2;
        gpx = 2;
        return 1;
    }
    if (arr[0][0] && arr[2][2]) {
        gpx = 1;
        gpx = 1;
        return 1;
    }
    if (arr[1][1] && arr[2][2]) {
        gpx = 0;
        gpx = 0;
        return 1;
    }

    if (arr[0][2] && arr[1][1]) {
        gpx = 2;
        gpx = 0;
        return 1;
    }
    if (arr[0][2] && arr[2][0]) {
        gpx = 1;
        gpx = 1;
        return 1;
    }
    if (arr[1][1] && arr[2][0]) {
        gpx = 0;
        gpx = 2;
        return 1;
    }
    return 0;
}