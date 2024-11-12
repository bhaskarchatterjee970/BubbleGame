function creatBubble() {
  let bubbleCount = " ";

  for (let i = 0; i < 168; i++) {
    let randomColor = getRandomColor(); // Generate a random color for each bubble
    let randomNumber = Math.floor(Math.random() * 10);
    bubbleCount += `<div class="bubble" style="background-color: ${randomColor};">${randomNumber}</div>`;
}
  let bubbles = document.querySelector(".pbtm");
  bubbles.innerHTML = bubbleCount;
  
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
creatBubble()


function setTimer(){
    let timer=60;
let interval=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").innerText=timer;
    }   
    else{
        clearInterval(interval);
        document.querySelector(".pbtm").innerHTML=`<h1 style="color:white;font-size:60px">GAME OVER  </h1>` 
    }
},1000)
}
setTimer()


function startGame() {
    score = 0;
    timer = 60;
    document.querySelector("#score").innerText = score;
    document.querySelector("#timer").innerText = timer;
    document.querySelector("#startButton").style.display = "none";
    document.querySelector("#finalMessage").style.display = "none";
    creatBubble();
    setTimer();
    hitVal = changeHit();
}

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
const result = incrementScore();
