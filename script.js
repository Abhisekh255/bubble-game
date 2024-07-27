 function makebubble(){
 var store ="";
 for( var i=1;i<=154;i++){
    var b=Math.floor(Math.random()*10)
    store +=`<div class="bubble">${b}</div>`;
}
  document.querySelector("#pannel").innerHTML=store;
  
}

 var timerval=60;
function runtimer(){
 var timerint=setInterval(function(){
  if(timerval>0){
  timerval--;
  document.querySelector("#timer").textContent=timerval;
  }
  else{
    clearInterval("timerint");

 
    document.querySelector("#pannel").innerHTML=`<h1>Game Over</h1> <h2 class="abhi">Score= ${score} </h2>`;
    document.querySelector("#scoreval").textContent=score;
    document.querySelector("#last").innerHTML=score;

  }
},1000)
}

var b=0
function getnewhit(){
  b= Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent=b;

}

 var score=0;
function getscore(){

document.querySelector("#scoreval").textContent=score;
// score = score+10
}
function incrementScore(){
score = score+10
document.querySelector("#scoreval").textContent=score;
}
function clickbubble(){
  document.querySelector("#pannel")
  .addEventListener("click",function(dets){
    var clickednumber=(Number(dets.target.textContent))
    if(clickednumber===b){
      // getscore();
      incrementScore();
      getnewhit();
      makebubble();
    }
  });

}

makebubble();
runtimer();
getnewhit();
getscore();
clickbubble();
