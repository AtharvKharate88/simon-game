let buttonColours=["red","blue","green","yellow"];
let gamePattern=[];
let userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function(event){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
})

function checkAnswer(currentLevel){
   
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success")
    }else{
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>{
            
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over ,Press Any key to restart");

        resetGame();
    }
   if(gamePattern.length===userClickedPattern.length){
    setTimeout(()=>{
        nextSequence();
    },1000)
}
}

$(".btn").click(function(event){
    var userChosenColour=event.target.id; //$(this).attr("id"); this can also be used
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});

checkanswer(level);



function nextSequence(){
    userClickedPattern = [];
    var randomnumber=Math.floor(Math.random()*4);
    randomChosenColor=buttonColours[randomnumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);;
    playsound(randomChosenColor);
    level=level+1;
    $("#level-title").text("level "+level);

}
 function playsound(name){
    const audio=new Audio("https://atharvkharate88.github.io/simon-game/sounds/" + name + ".mp3");
    audio.play();
 }
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(()=>{
        $("#"+currentColour).removeClass("pressed");
    },100);
}


function resetGame() {
    
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = false;  
} 
