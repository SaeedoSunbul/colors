var Clicking =[]
var generator = []


$(".btn").click(function(){
    
    var buttonInnerHTML = this.id;
    Clicking.push(buttonInnerHTML);
    console.log(Clicking)
    
    animatePress(buttonInnerHTML)
    playSound(buttonInnerHTML)
    truechecker()
   
   

})



function truechecker(){
    
    for(var i = Clicking.length-1 ; i <= generator.length ; i++){
        var itr = i
        var lengthclick = Clicking.length
        var vlkarr = generator.length
        var clkarr = Clicking[i]
        var cglkarr = generator[i]
        
        if(Clicking[i] === generator[i]){
            console.log("good")
            correctclick()
            correctSound()
            setTimeout(correctclickremove, 500);
            setTimeout(animateattay, 1000,i);
            break;

        
        }
        if (lengthclick === 10){

        document.querySelector("body").innerHTML = "Refresh the page"


        }
        else{
            console.log("you lost")
            falseclick()
            falseSound()
            setTimeout(falseclickremove, 500);
            reset()
            break;
        }
    
   }
  
}
function correctclick(){
    $("body").addClass("correct");
}
function correctclickremove(){
    $("body").removeClass("correct");
}
function falseclickremove(){
    $("body").removeClass("false");
}
function falseclick(){
    $("body").addClass("false");
}
    
}
function reset(){
    
    Clicking =[]
    generator = []
}



function animateattay(i){
    
    $("#" + generator[i+1]).fadeIn(100).fadeOut(100).fadeIn(100);
}
 

function generate(){
    Clicking =[]
    generator = []

    var color = ['green', 'red', 'yellow', 'blue']

    for(var i = 1 ; i <= 10 ; i++) {  

        var random = Math.floor(Math.random() * 4)
        var savecolor= color[random]
        generator.push(savecolor)
       }
    
    
       
    console.log(generator) 
    document.getElementById("startwith").innerHTML = "starts with "  + generator[0] ;
}
function correctSound(){
    var audioyes = new Audio("Talking Ben Saying Yes Sound Effect (Free to use).mp3");
    audioyes.play() ;
    audioyes.volume = 0.5;

}
function falseSound(){
    var audiono = new Audio("Talking Ben Saying No Sound Effect (Free to use).mp3");
    audiono.play() ;
    audiono.volume = 0.5;
}

function animatePress(buttonInnerHTML) {
    $("#" + buttonInnerHTML).addClass("pressed");
    setTimeout(function () {
      $("#" + buttonInnerHTML).removeClass("pressed");
    }, 100);
  }

  function playSound(buttonInnerHTML) {
    if ( buttonInnerHTML === "green"){
        var audio1 = new Audio("crash.mp3");
        audio1.play() ;
        audio1.volume = 0.5;
      } 
      if ( buttonInnerHTML === "red"){
        var audio2 = new Audio("Slap oh Sound effect [TubeRipper.com].mp3");
        audio2.play() ;
        audio2.volume = 0.5;
      }  
      if ( buttonInnerHTML === "yellow"){
        var audio3 = new Audio("snare.mp3");
        audio3.play() ;
        audio3.volume = 0.5;
      } 
      if ( buttonInnerHTML === "blue"){
        var audio4 = new Audio("kick-bass.mp3");
        audio4.play() ;
        audio4.volume = 0.5;
      } 
  }
