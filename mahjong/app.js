var music = new Audio("sounds/music.mp3");
(function() {
    music.play();
})(); 

var click = new Audio("sounds/click.mp3");

var flag = 0;
var tempField = 0;
var countdown = 15;

function reset() {
    document.getElementById("playField").innerHTML = '<p class="reset" onclick="start()">Play again</p>';
};


function check(val, number) {
    
    
    console.log("flag before "+flag);
    
    // zaznaczenie karty
    if (flag === 0) {
        
        value = val;
        tempField = number;
        
       
        document.getElementById(number).style.boxSizing = "border-box";
        document.getElementById(number).style.border = "1px solid #990000";
        document.getElementById(number).style.margin = "1px";
        flag = 1;
        console.log('------------');
        console.log("flag "+flag);
        console.log("val "+val);
        console.log("value "+value);
        console.log("tempField "+tempField);
        console.log("number "+number);
        
        
        
    }
    // karty pasują do siebie
    else if (flag === 1 && val == value && number != tempField) {
        
        click.play();
        document.getElementById(number).style.transition = "visibility .1s";
        document.getElementById(number).style.visibility = "hidden";
        document.getElementById(tempField).style.transition = "visibility .1s";
        document.getElementById(tempField).style.visibility = "hidden";
        
        tempField = '';
        flag = 0;
      
        countdown--;
        if (countdown === 0) {
            reset();
        }
        console.log('------------');
        console.log("flag after"+flag);
        console.log("tempField "+tempField);
        console.log("number "+number);
        console.log("val "+val);
        console.log("value "+value);
        
    }
    
    // niepasujące karty
    else if (flag === 1 && val != value) {
        
        
        
        document.getElementById(number).style.boxSizing = "content-box";
        document.getElementById(number).style.border = "1px solid black";   
        document.getElementById(tempField).style.boxSizing = "content-box";
        document.getElementById(tempField).style.border = "1px solid black";   
        document.getElementById(number).style.margin = "0px";
        document.getElementById(tempField).style.margin = "0px";
		tempField = '';
        flag = 0;
        console.log('------------');
        console.log("flag after"+flag);
        console.log("val "+val);
        console.log("value "+value);
        console.log("tempField "+tempField);
        console.log("number "+number);
        
    }
    
    // dwukrotne kliknięcie karty
    else if ( number === tempField) {
        document.getElementById(number).style.boxSizing = "content-box";
        document.getElementById(number).style.border = "1px solid black";   
        document.getElementById(tempField).style.boxSizing = "content-box";
        document.getElementById(tempField).style.border = "1px solid black"; 
        document.getElementById(number).style.margin = "0px";
        document.getElementById(tempField).style.margin = "0px";
        tempField = '';
        flag = 0;
        console.log('------------');
        console.log("flag after"+flag);
        console.log("val "+val);
        console.log("value "+value);
        console.log("tempField "+tempField);
        console.log("number "+number);
        
    }
    
    
}

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
 
var tempArray = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l', 'm', 'm', 'n', 'n', 'o', 'o']

console.log(tempArray);

var a = 'a';
var b = 'b';
var c = 'c';
var d = 'd';
var e = 'e';
var f = 'f';
var g = 'g';
var h = 'h';
var i = 'i';
var j = 'j';
var k = 'k';
var l = 'l';
var m = 'm';
var n = 'n';
var o = 'o';

var field0 = 'field0';
var field1 = 'field1';
var field2 = 'field2';
var field3 = 'field3';
var field4 = 'field4';
var field5 = 'field5';
var field6 = 'field6';
var field7 = 'field7';
var field8 = 'field8';
var field9 = 'field9';
var field10 = 'field10';
var field11 = 'field11';
var field12 = 'field12';
var field13 = 'field13';
var field14 = 'field14';
var field15 = 'field15';
var field16 = 'field16';
var field17 = 'field17';
var field18 = 'field18';
var field19 = 'field19';
var field20 = 'field20';
var field21 = 'field21';
var field22 = 'field22';
var field23 = 'field23';
var field24 = 'field24';
var field25 = 'field25';
var field26 = 'field26';
var field27 = 'field27';
var field28 = 'field28';
var field29 = 'field29';


function start() {
    document.getElementById("playField").innerHTML = '';
    tempArray.shuffle();
    countdown = 15;
    
    for(x=0; x<30; x++) {

        if (x === 3 || x === 7 || x === 11 || x === 15 || x === 18 || x === 21 || x === 24 || x === 26 || x === 28) 
            {
                document.getElementById("playField").innerHTML += '<div id="field'+x+'" onclick="check('+tempArray[x]+', field'+x+')"></div><br>';

            }

        else {
            console.log((document.getElementById("playField").innerHTML += '<div id="field'+x+'" onclick="check('+tempArray[x]+', field'+x+')"></div>'));
        }

                document.getElementById("field"+x+"").style.backgroundImage = "url('img/"+tempArray[x]+".jpg')"; 


        if (x<16) document.getElementById("field"+x+"").classList.add('first'); 
        else if (x>=16 && x<25) document.getElementById("field"+x+"").classList.add('second');
        else if (x>=25 && x<29) document.getElementById("field"+x+"").classList.add('third');
        else if (x=29) document.getElementById("field"+x+"").classList.add('fourth');

    }    
    
};

(function load() {
    start();
})();