let off = true;
let display="";
let eredmeny=0;
let input="";
function toggle(){
    if(off){
        document.getElementById("calc").className="calc"
        off=false;
    }
    else{
        document.getElementById("calc").className="off"
        off=true;
    }
}
function minimize(){
    window.alert("fishie")

}
function maximize(){

}

function bezar(){ 
    document.getElementById("calc").className="off"
}
function szam(number){
    document.getElementById("input").innerHTML=input+number;
    input=input+number;
}
function muvelet(muvelet,veg){
    szamolas=parseFloat(input);
    eredmeny=parseFloat(eredmeny);

    if(muvelet=="+"){
        eredmeny=eredmeny+szamolas;
    }
    else if(muvelet=="-"){
        if(eredmeny==0){
            eredmeny=szamolas;
        }
        else{
        eredmeny=eredmeny-szamolas;
        }
    

    }
    else if(muvelet=="÷"){
        eredmeny=eredmeny / szamolas;
    }
    else if(muvelet=="×"){
        if(eredmeny==0){
            eredmeny=1;
        }
        eredmeny=eredmeny*szamolas;
    }
    if(veg){
        display=display+input

    }
    else{
        display=display+input+muvelet
    }

document.getElementById("display").innerHTML=display;
input=eredmeny
    input="";
}
function torles(){
    document.getElementById("input").innerHTML=""
    number="";
    input="";
}
function fullclear(){
    document.getElementById("display").innerHTML="";
    document.getElementById("input").innerHTML="";
    number="";
    display="";
    eredmeny=0;
    input="";
}
function sqr(){
    szamolas=parseFloat(input);
    szamolas=szamolas*szamolas
    document.getElementById("input").innerHTML=szamolas;
    input=szamolas;
}
function plusminus(){
    szamolas=parseFloat(input);
    szamolas=szamolas*-1;
    document.getElementById("input").innerHTML=szamolas;
    input=szamolas;
}

function szamol(){
    console.log(display.slice(-1))
    muvelet(display.slice(-1),true);
    console.log(eredmeny)
    document.getElementById("display").innerHTML="";
    document.getElementById("input").innerHTML=eredmeny;
    eredmeny=0;
    display="";
    
}
function tiz(){
    input=input+"."
}
function style(id,szin,origin){
    document.getElementById(id).className=szin;
    setTimeout(() => {
        document.getElementById(id).className=origin;
      }, 300);
}
       
document.onkeydown = check;
function check(e){
    if(e.keyCode==8){
        torles();
        style("c",'grid-item click','grid-item szurk');
    }
    if(e.keyCode==46){
        fullclear();
        style("ce",'grid-item click','grid-item szurk');
    }
    if(e.keyCode==96){
        szam(0);
        style("0",'grid-item click','grid-item fek')
    }
    if(e.keyCode==97){
        szam(1);
        style("1",'grid-item click','grid-item fek')
    }
    if(e.keyCode==98){
        szam(2);
        style("2",'grid-item click','grid-item fek')
    }
    if(e.keyCode==99){
        szam(3);
        style("3",'grid-item click','grid-item fek')
    }
    if(e.keyCode==100){
        szam(4);
        style("4",'grid-item click','grid-item fek')
    }
    if(e.keyCode==101){
        szam(5);
        style("5",'grid-item click','grid-item fek')
    }
    if(e.keyCode==102){
        szam(6);
        style("6",'grid-item click','grid-item fek')
    }
    if(e.keyCode==103){
        szam(7);
        style("7",'grid-item click','grid-item fek')
    }
    if(e.keyCode==104){
        szam(8);
        style("8",'grid-item click','grid-item fek')
    }
    if(e.keyCode==105){
        szam(9);
        style("9",'grid-item click','grid-item fek')
    }
    if(e.keyCode==111){
        muvelet('÷',false);
        style("div",'grid-item click','grid-item szurk');
    }
    if(e.keyCode==106){
        muvelet('×',false);
        style("mul",'grid-item click','grid-item szurk');
    }
    if(e.keyCode==109){
        muvelet('-',false);
        style("min",'grid-item click','grid-item szurk');
    }
    if(e.keyCode==107){
        muvelet('+',false);
        style("plus",'grid-item click','grid-item szurk');
    }
    if(e.keyCode==110){
        tiz();
    }
    if(e.keyCode==13){
        szamol();
        style("egyen",'grid-item egyen2','grid-item egyen')

    }
}



