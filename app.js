

var time=60;
var scoree=0;
var hit=0;
function iscore(){
    scoree += 10;
    document.querySelector("#scorey").textContent=scoree;
}
function hitt(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#fckk").textContent=hit;
}
function raka(){
    var  acumate="";
    for(var i=1;i<=160;i++){
        var vr=Math.floor(Math.random()*10);
        acumate+=`<div class="bubble">${vr}</div>`;
    }
      
     document.querySelector(".btmpanel").innerHTML= acumate;
    }
function timer() {
    var timestop=setInterval(function(){
        if(time>0){
            time--;
        
        document.querySelector("#fck").textContent=time;
        }else{
            clearInterval(timestop);
            document.querySelector(".btmpanel").innerHTML=`<h1>GAME OVER</h1>`;
        }
    },1000);
}
document.querySelector(".btmpanel").addEventListener("click",function(evnt){
        var a= (Number(evnt.target.textContent));
        if(a===hit){
            iscore();
            hitt();
            raka();
        }
})
timer();
raka();
hitt(); 
