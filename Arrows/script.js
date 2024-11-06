function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function start(rnd){
    if(rnd==1){document.getElementById('szoveg').innerHTML="Up";}
    if(rnd==2){document.getElementById('szoveg').innerHTML="Left";}
    if(rnd==3){document.getElementById('szoveg').innerHTML="Down";}
    if(rnd==4){document.getElementById('szoveg').innerHTML="Right";}
}
function check(rnd,user){
    if (keyPressed.keyCode == 38) {user=1}
    if(rnd==user){
        document.getElementById('szoveg').style.color='green';
    }
}
