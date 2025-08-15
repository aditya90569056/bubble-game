
score=0;
const audio = new Audio('\sound.wav');
function playAudio() {
    audio.play().then(function() {
        console.log('Audio is playing');
    }).catch(function(error) {
        console.error('Error playing audio:', error);
    });
}
function makbuble(){
    var clutter = "";
for(var i=1;i<=102;i++){
    var elo = Math.random()*10;
    var elo= Math.floor(elo);
   clutter += `<div class="buble">${elo}</div>`;
}
document.querySelector(".pbot").innerHTML = clutter;
}
var timer = 60;
function runtime(){
    var tumerint = setInterval(function(){
        if(timer>0){
        timer--;
        
        document.querySelector("#tim").innerHTML=timer;
        }
        else{
            clearInterval(tumerint);
            document.querySelector(".pbot").innerHTML = "";
        }
        
    },1000);

}
var rn = 0;
function abcd(){
    score+=10;
    document.querySelector("#soc").textContent = score;
}
function getnewhit(){
  rn = Math.floor(Math.random()*10) 
   document.querySelector("#hitval").textContent = rn;
}
document.querySelector(".pbot").addEventListener("click",
    function(det){
        playAudio();
     var clickno = Number(det.target.textContent);
     if(clickno===rn){
        abcd();
        makbuble();
       getnewhit();
      
     }


    }

)

getnewhit();
runtime();
makbuble();

