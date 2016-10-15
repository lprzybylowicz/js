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
//funkcja służąca do mieszania elementów tablicy
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



function start() {
    document.getElementById("playField").innerHTML = '';
    tempArray.shuffle();
    countdown = 15;
    
    for(x=0; x<30; x++) {

        if (x === 3 || x === 7 || x === 11 || x === 15 || x === 18 || x === 21 || x === 24 || x === 26 || x === 28) 
            {
                document.getElementById("playField").innerHTML += '<div id="field'+x+'" onclick="check(&quot;'+tempArray[x]+'&quot;, &quot;field'+x+'&quot;)"></div><br>';

            }

        else {
            console.log((document.getElementById("playField").innerHTML += '<div id="field'+x+'" onclick="check(&quot;'+tempArray[x]+'&quot;, &quot;field'+x+'&quot;)"></div>'));
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