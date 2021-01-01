window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

highscore = 0;

window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
paused = false;
width = height = 370;
dimensions=20;
tr = 10
mn = 2
px=py=10;
blockSize = width/dimensions;
ax=ay=Math.floor(Math.random()*dimensions);
xv=yv=0;
tail=[];
defaultLen = 5;
tailLen = defaultLen;

function inSnake(x, y){
    for(var i = 0; i < tail.length; i++){
        if(x == tail[i].x && y == tail[i].y)return true;
    }
    return false;
}

function game() {
    if(paused == false){
        px+=xv;
        py+=yv;
        if(px<0) {
            var hs = document.getElementById('HS');
            highscore = Math.max(highscore,tailLen);
            if(highscore == defaultLen)highscore = 0;
            hs.innerHTML = "One of my first projects when I learned javascript and web development. Use the arrow keys to move, try to collect as many pink squares as possible before colliding with yourself or the walls. Press escape to pause. <br><br>  <b>High score:"  + highscore + "</b>.";
            tailLen = defaultLen;
            px= dimensions-1;
        }
        if(px>dimensions-1) {
            var hs = document.getElementById('HS');
            highscore = Math.max(highscore,tailLen);
            if(highscore == defaultLen)highscore = 0;
            hs.innerHTML = "One of my first projects when I learned javascript and web development. Use the arrow keys to move, try to collect as many pink squares as possible before colliding with yourself or the walls. Press escape to pause. <br> <br> <b>High score:"  + highscore + "</b>.";
            tailLen = defaultLen;
            px= 0;
        }
        if(py<0) {
            var hs = document.getElementById('HS');
            highscore = Math.max(highscore,tailLen);
            if(highscore == defaultLen)highscore = 0;
            hs.innerHTML = "One of my first projects when I learned javascript and web development. Use the arrow keys to move, try to collect as many pink squares as possible before colliding with yourself or the walls. Press escape to pause. <br><br>  <b>High score:"  + highscore + "</b>.";
            tailLen = defaultLen;
            py= dimensions-1;
        }
        if(py>dimensions-1) {
            var hs = document.getElementById('HS');
            highscore = Math.max(highscore,tailLen);
            if(highscore == defaultLen)highscore = 0;
            hs.innerHTML = "One of my first projects when I learned javascript and web development. Use the arrow keys to move, try to collect as many pink squares as possible before colliding with yourself or the walls. Press escape to pause. <br> <br> <b>High score:"  + highscore + "</b>.";
            tailLen = defaultLen;
            py= 0;
        }
        ctx.fillStyle= "#69787C";
        ctx.fillRect(0,0,canv.width,canv.height);
    
        ctx.fillStyle="#DDFFFF";
        ctx.fillRect(tr - mn, tr - mn, blockSize*dimensions + mn, blockSize*dimensions + mn);
        ctx.fillStyle= "#69787C";
        ctx.fillRect(tr, tr, blockSize*dimensions -mn,blockSize*dimensions-mn);
        ctx.fillStyle="#DDFFFF";
        for(var i=0;i<tail.length;i++) {
            ctx.fillRect(tail[i].x*blockSize + tr,tail[i].y*blockSize + tr,blockSize-mn,blockSize-mn);
            if(tail[i].x==px && tail[i].y==py) {
                var hs = document.getElementById('HS');
                highscore = Math.max(highscore,tailLen);
                if(highscore == defaultLen)highscore = 0;
                hs.innerHTML = "One of my first projects when I learned javascript and web development. Use the arrow keys to move, try to collect as many pink squares as possible before colliding with yourself or the walls. Press escape to pause. <br> <br> <b>High score:"  + highscore + "</b>.";
                tailLen = defaultLen;
            }
        }
        tail.push({x:px,y:py});
        while(tail.length>tailLen) {
            tail.shift();
        }
        
        if(ax==px && ay==py) {
            tailLen++;
            ax=Math.floor(Math.random()*dimensions);
            ay=Math.floor(Math.random()*dimensions);
            while(inSnake(ax, ay)){
                ax=Math.floor(Math.random()*dimensions);
                ay=Math.floor(Math.random()*dimensions);
            }
        }
        ctx.fillStyle="pink";
        ctx.fillRect(ax*blockSize + tr,ay*blockSize + tr,blockSize-mn,blockSize-mn);
    }
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            if(xv != 1){xv=-1;yv=0;}
            break;
        case 38:
            if(yv != 1){xv=0;yv=-1;}
            break;
        case 39:
            if(xv != -1){xv=1;yv=0;}
            break;
        case 40:
            if(yv != -1){xv=0;yv=1;}
            break;
        case  27:
            if(paused == true)paused = false;
            else paused = true;
            break;
    }
}