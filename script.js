function creatBubble() {
  let bubbleCount = " ";

  for (let i = 0; i < 168; i++) {
    bubbleCount += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
  }
  let bubbles = document.querySelector(".pbtm");
  bubbles.innerHTML = bubbleCount;
}
creatBubble()


function setTimer(){
    let timer=30;
let interval=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").innerText=timer;
    }   
    else{
        clearInterval(interval);
        document.querySelector(".pbtm").innerHTML=`<h1>GAME OVER</h1>`
    }
},1000)
}
setTimer()


function changeHit(){
    let hit=parseInt(Math.random()*10)
    document.querySelector("#hitVal").textContent=hit;
    return hit;
}
let hitVal=changeHit()


function incrementScore(){
    let score=0;
    document.querySelector(".pbtm").addEventListener("click",(e)=>{
        if(Number(e.target.textContent)==hitVal){
            score+=10
            document.querySelector("#score").innerText=score;
        }
        creatBubble();
        hitVal=changeHit();
        // incrementScore();
    })
}
incrementScore();