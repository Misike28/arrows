let rnd=0;
let started = false;
let ossz = 0;
let helyes=0;
let sec = 20;



function roll(){
    started=true;
    rnd = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    if(rnd==1){document.getElementById('szoveg').innerHTML="Up"; }
    if(rnd==2){document.getElementById('szoveg').innerHTML="Left";}
    if(rnd==3){document.getElementById('szoveg').innerHTML="Down";}
    if(rnd==4){document.getElementById('szoveg').innerHTML="Right";}
    ossz=ossz+1;
    console.log(ossz)
}
function start(){
    started=true;
    roll();
    timer();
}


document.onkeydown = check;
    
    function check(e) {
        if (e.keyCode == 13) { start();}
        if (e.keyCode == 8) { stop();}

        if(started){
            if(e.keyCode==37 || e.keyCode==38 || e.keyCode==39 || e.keyCode==40 ){

            
        let user=0;
        e = e || window;
        if (e.keyCode == 38) {
            user=1;
            document.getElementById('fel').style.backgroundColor='gray';
            setTimeout(() => {
                document.getElementById('fel').style.backgroundColor='white';
              }, 300);
        }
        else if (e.keyCode == 40) {
            user=3;
            document.getElementById('le').style.backgroundColor='gray';
            setTimeout(() => {
                document.getElementById('le').style.backgroundColor='white';
              }, 300);
        }
        else if (e.keyCode == 37) {
            user=2;
            document.getElementById('bal').style.backgroundColor='gray';
            setTimeout(() => {
                document.getElementById('bal').style.backgroundColor='white';
              }, 300);
        }
        else if (e.keyCode == 39) {
            user=4;
            document.getElementById('jobb').style.backgroundColor='gray';
            setTimeout(() => {
                document.getElementById('jobb').style.backgroundColor='white';
              }, 300);
        }
        
        if(rnd==user){
            document.getElementById('szoveg').style.backgroundColor='green';
            setTimeout(() => {
                roll();
                document.getElementById('szoveg').style.backgroundColor='white';
              }, 300);
              helyes++;
              

        }
        else{
            document.getElementById('szoveg').style.backgroundColor='red';
            setTimeout(() => {
                roll();
                document.getElementById('szoveg').style.backgroundColor='white';
              }, 300);
        }
    }
    }

}
function check2(user){
    if(rnd==user){
        document.getElementById('szoveg').style.backgroundColor='green';
        setTimeout(() => {
            roll();
            document.getElementById('szoveg').style.backgroundColor='white';
          }, 300);

    }
    else{
        document.getElementById('szoveg').style.backgroundColor='red';
        setTimeout(() => {
            roll();
            document.getElementById('szoveg').style.backgroundColor='white';
          }, 300);
    }
}
function stop(){
    ossz--;
    document.getElementById('szoveg').innerHTML=helyes+"/"+ossz;
    started=false;
    ossz = 0;
    helyes=0;
}

