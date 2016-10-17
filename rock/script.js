(function init(){
    document.getElementById("circle").onmousemove = rock;
    document.getElementById("circle").onmouseover = play;
    document.getElementById("circle").onmouseout = stopPlay;
})();

var music = new Audio('testament.mp3');
var i = 0;
var rock_anim = ["frame_0_delay-0.04s", 
"frame_1_delay-0.04s", 
"frame_2_delay-0.04s", 
"frame_3_delay-0.04s", 
"frame_4_delay-0.04s", 
"frame_5_delay-0.04s", 
"frame_6_delay-0.04s", 
"frame_7_delay-0.04s", 
"frame_8_delay-0.04s", 
"frame_9_delay-0.04s", 
"frame_10_delay-0.04s", 
"frame_11_delay-0.04s", 
"frame_12_delay-0.04s", 
"frame_13_delay-0.04s", 
"frame_14_delay-0.04s", 
"frame_15_delay-0.04s", 
"frame_16_delay-0.04s", 
"frame_17_delay-0.04s", 
"frame_18_delay-0.04s", 
"frame_19_delay-0.04s", 
"frame_20_delay-0.04s", 
"frame_21_delay-0.04s", 
"frame_22_delay-0.04s", 
"frame_23_delay-0.04s", 
"frame_24_delay-0.04s", 
"frame_25_delay-0.04s", 
"frame_26_delay-0.04s", ];
    
//document.getElementById("kal").onclick = colorChange();

    
function rock() {
    document.getElementById("rockAnim").src = "anim/"+rock_anim[i]+".gif";
    i++;
    if (i == rock_anim.length) {i=0;}
}
    
    
function play() {
    music.play();
    document.getElementById("info").style.visibility = "hidden";
}
function stopPlay() {
    music.pause();
    document.getElementById("info").style.visibility = "visible";
}