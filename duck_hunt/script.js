var shots = 3;
var points = 0;
//zarowno flagi jak i zmienne interwalowe nie moga byc globalne
var ducks = 0; //counting ducks
var pointsArr = [];

var aliveDucksArr = [];
var aliveDucks = '';
var initDucksAmt = '';
var currentDucksAmt = '';//zmienna pomocnicza
var ducksObj = [];
var release = [];
var titleScreen_sound = new Audio('sounds/01-title-screen.mp3');
var intro_sound = new Audio('sounds/02-duck-hunt-intro.mp3');
//var flapping_sound = new Audio('sounds/99-duck-flapping-sfx-.mp3');
//var quack_sound = new Audio('sounds/99-quack-sfx-.mp3');
var gotDuck_sound = new Audio('sounds/04-got-duck-s-.mp3');
var laugh_sound = new Audio('sounds/99-laugh-sfx-.mp3');
var duckFalls_sound = new Audio('sounds/99-dead-duck-falls-sfx-.mp3');
var duckLands_sound = new Audio('sounds/99-dead-duck-lands-sfx-.mp3');
var theEnd = new Audio('sounds/05-round-clear.mp3');

(function welcome() {
container.innerHTML = '<img src="img/welcome/welcomeScreen.png" id="welcomeScreen"><img src="img/welcome/game1.png" id="game1" onclick="intro(1)"><img src="img/welcome/game2.png" id="game2" onclick="intro(2)"><a href="http://behance.net/lukaszprzybylowicz" target="_blank"><img src="img/welcome/visitPix2.png" id="visit"></a><img src="img/welcome/select.png" id="select">'; 
    titleScreen_sound.play();
    
    game1.onmouseover = function() {
        select.style.display = "inline-block";
        select.style.left = '85px';
        select.style.top = '223px';
    };
    game1.onmouseout = function() {select.style.display = "none"};
    game2.onmouseover = function() {
        select.style.display = "inline-block";
        select.style.left = '85px';
        select.style.top = '254px';
    };
    game2.onmouseout = function() {select.style.display = "none"};
    visit.onmouseover = function() {
        select.style.display = "inline-block";
        select.style.left = '85px';
        select.style.top = '286px';
    };
    visit.onmouseout = function() {select.style.display = "none"};
})();

function intro(input) {
    container.innerHTML = '<img src="img/intro.gif" id="intro">';
    titleScreen_sound.pause();
    intro_sound.play();
    setTimeout(init,7400)
    //setTimeout(init,1)
   
    function init() {
        container.innerHTML = '<img src="img/bgTopCrop.gif" id="backgroundTop"><img src="img/bgBottomCrop.png" id="backgroundBottom"><img src="img/shot3.png" id="magazine"><img src="img/hit/hit.gif" id="hit"><div id="hitBg"></div><div id="dogField"></div><img src="img/points/score.gif" id="score"><div id="points"></div><div id="pointsTxt"></div><img src="img/flyAwayText.png" id="flyAwayText">';
		
		for(i=0;i<10;i++) {
			hitBg.innerHTML += '<img src="img/hit/duckHitWhite.gif" id="duckHit'+i+'" class="duckHitClass">';	
		}
		for(i=0;i<6;i++) {
			document.getElementById('points').innerHTML += '<img src="img/points/0.gif" id="point'+i+'" class="singlePoint">';
		}
    generateDucks(input);
    };
    
    function generateDucks(input) {
        initDucksAmt = input;
        currentDucksAmt = initDucksAmt;
        aliveDucks = initDucksAmt;
        for (i=0;i<input;i++) {
            ducksObj[i] = new Duck(i);
            container.innerHTML += '<img src="img/duckUp.gif" id="duck'+i+'" class="flyingDuck">';
        }
        releaseDucks();
    }
}

function releaseDucks() { //docelowo tej funkcji nie bedzie, odpalenie kaczek bedzie sie znajdowac w generateDucks
    for (i=0;i<currentDucksAmt;i++) {
    ducksObj[i].duckStart();
    }
}

function Duck(duckNumber) {
    this.posX = '',
    this.posY = '',                          
    this.speed = '',       
    this.direction = '',
    this.flagLeft = false,
    this.flagStraight = false,
    this.flagRight = false,
    //this.flagFlyAway = false,
    this._shuffle = '',
    this._flight = '',
    this._duckEnd = '',
    this._duckAction = '',
    this._flap = '',
    this._quack = '';
    this.aliveFlag = true, //if true, duck is alive
    this.duckHitIcon = '', //tego nie resetujemy w reloadzie
    this.duckHitIconNr = '', //kiedy powstanie zmienna this.duckNUmber, to pozostanie puste, a przypisanie nastapi w funkcji ponizej 
    this.initVal = true, //tego nie resteujemy w reloadzie
    this.duckPic = '',
    this._duckNumber = duckNumber, //zmienna pomocnicza, ratuje w sytuacji, gdy zmienia się wartośc duckPic, przyjmuje wartosc z argukemntu funkcji obiektu, moze zamienić jej nazwę na duckNumber po prostu
    this.duckHitIconNr = this._duckNumber;
    
    this.duckStart = function() {
        console.log('duckPic ' + this.duckPic);
        console.log('_duckNumber ' + this._duckNumber);
		//if this is the first duck it gets its number from initial ducknumber
        if(this.initVal) {
            this.duckHitIcon = document.getElementById('duckHit'+this.duckHitIconNr);	//getting the current duck number (from the duckNumber value)
                   console.log('duckHitIconNr dla biezacej kaczki (czyli numer migacza)' + this.duckHitIconNr);

        }
        //otherwise it`s being increased by the initial amount od ducks
        else { 
            this.duckHitIconNr += initDucksAmt;
            this.duckHitIcon = document.getElementById('duckHit'+this.duckHitIconNr);
            console.log('duckHitIcon dla biezacej kaczki (czyli numer migacza)' + this.duckHitIconNr);

        }
        this.initVal = false;
        this.duckPic = document.getElementById('duck'+this._duckNumber);  //from now on duckPic value is handling the proper duckImage
        this.duckHitIcon.src = "img/hit/hunting.gif";					  //the duckHit icon starts to blink
        this.duckPic.src = 'img/duckUp.gif';                              //duck gets it`s initial shape, with the beak up
        this.direction = Math.round(Math.random()*3);       //shuffling the direction between 0 and 3; why 4 parameters? see below in shuffle function
        this.posY = 100;                                    //duck starts just below the grass edge
        this.posX = Math.random()*300+30;                   //shuffling the base position of the this between 30 and 330 px from the lefside
        this.duckPic.style.left = this.posX;                //placing the duck on a start position, picked from above shuffling between 30 and 330px (posX)
        this.speed = 0.5;                                   //initial speed
        
        this.duckPic.onclick = this.terminate.bind(this);              //duck is open for shots
        container.onclick =  this.shot.bind(this);                     //and so the container
        
        
        
    
        //have to check/interpretate the direction here, because flight function goes before shuffle function
        if (this.direction == 0) this.flagLeft = true;       
        else if (this.direction == 1) this.flagStraight = true;
        else if (this.direction == 2) this.flagRight = true;
        
        //duck stars to fly, making its move every 5ms; variable has to be global, so it can be reached by further functions; It also means that in every 5ms it will listen to events such as shuffle function output.
        this._flight = setInterval(this.flight.bind(this),5);
        this.flight.bind(this);
        
        //flapping sound
        this._flap = setInterval(flapping, 170);
        function flapping() {
            new Audio('sounds/99-duck-flapping-sfx-.mp3').play()
        };
        //quacking sound
        this._quack = setInterval(quacking, Math.random()*200 + 1100);
        function quacking() {
            new Audio('sounds/99-quack-sfx-.mp3').play()
        };
        
        //shuffling function will be executed between 1 and 2s; variable has to be global, so it can be reached by further functions
        this._shuffle = setInterval(shuffle.bind(this),Math.random()*1000 + 1000);
        function shuffle() {
            
            /*drawing random number between 0 and 3 and rounding it. (0-0,49 = 0; 0,5-1,49 = 1; 1,5-2,49 = 2; 2,5-3 = 3). 
            Because of shuffling from 0 to 3 chances are equal*/
            this.direction = Math.round(Math.random()*3);   
            this.speed = Math.random() * 0.8 + 0.8;         //random speed between 0.8 and 1.6
            
           /* console.log('speeeeed       ' + this.speed);
            console.log('direction       ' + this.direction);
            console.log('posX       ' + this.posX);*/
            
            if (this.direction === 0 || this.direction == 3) this.flagLeft = true;
            else if (this.direction === 1) this.flagStraight = true;
            else if (this.direction === 2) this.flagRight = true;

            return this.direction;  //flight function is listening in every 5ms for that output; the duck can fly left, right or straight
        };       
        
    }
}     

Duck.prototype.flight = function() {  
    
        //if the duck reach the top, you lose, and the dog laughs
        if (this.posY > 450) {
            clearInterval(this._flight);
            clearInterval(this._shuffle);
            clearInterval(this._flap);
            clearInterval(this._quack);
            console.log('currentDucksAmt' +currentDucksAmt);
            currentDucksAmt--;
            console.log('currentDucksAmt' +currentDucksAmt);
           this.duckHitIcon.src = "img/hit/duckHitWhite.gif";	//and duck hit remains white
            //if there are no ducks but all of them are alive, dog laughs
            if(currentDucksAmt === 0 && aliveDucks === initDucksAmt) {
                this.theDog.call(this,'laughingone', laugh_sound, 'laugh');
            }
            else if(currentDucksAmt === 0 && aliveDucks > 0) {
                this.theDog.call(this,'success1dog', gotDuck_sound);
            }
            else return;
        }
       //duck changes its direction if it reaches the left border
        else if (this.posX < 0) {
            this.speed = -this.speed;
            this.duckPic.src = "img/duckRight.gif";
        }
        //duck changes its direction if it reaches the right border
        else if (this.posX > 350) {    
            this.speed = -this.speed;
            this.duckPic.src = "img/duckLeft.gif";
        }
        
        //FLY LEFT
        if (this.direction === 0 || this.direction === 3) {
            //because of the flag set in the shuffle function above, the condition below will be executed only once, until the shuffle function will draw the flagLeft again
            if (this.flagLeft === true) {    
                this.speed = -Math.abs(this.speed); //flying left is decreasing the posX parameter; using the negative absolut value prevet from unwanted direction change in case of drawing the flagLeft again
                //console.log('speed ' + this.speed);
                this.duckPic.src = "img/duckLeft.gif";  
                this.flagLeft = false;   //as said above, flag value of false prevent of repeating the condition while repeating flight function
            }
        //duck just flying in its direction
        this.posX += this.speed;     //the posX increases in every loop by the speed shuffled in the shuffle function
        this.duckPic.style.left = this.posX + 'px'; //and so the duck flies
        this.posY += 0.3; //the height is increaing in every loop by constant value 0.3
        this.duckPic.style.bottom = this.posY + 'px';   //and so the duck slowly flies up
            
        }
            
        //FLY STRAIGHT
        else if (this.direction === 1) {
            //will be executed once because of the flag set                
            if (this.flagStraight == true) {
                this.duckPic.style.left = this.posX + 'px';  
                this.speed = Math.abs(this.speed);  //duck speed value must be positive, so the duck can fly up
                //console.log('speed ' + this.speed);
                this.duckPic.src = "img/duckUp.gif";
                this.flagStraight = false;
            }
        this.posY += this.speed; //duck speeds up, because vertical speed is now shuffled from higher values (in shuffle function)
        this.duckPic.style.bottom = this.posY + 'px';
        }
        
        //FLY RIGHT
        else if (this.direction === 2) {
            //will be executed once because of the flag set
            if (this.flagRight === true) {
                this.speed = Math.abs(this.speed);
                //console.log('speed ' + this.speed);
                this.duckPic.src = "img/duckRight.gif";
                this.flagRight = false;
            }
        this.posX += this.speed;     
        this.duckPic.style.left = this.posX + 'px';
        this.posY += 0.3;
        this.duckPic.style.bottom = this.posY + 'px';
        }       
}

Duck.prototype.shot = function() {
    //sound is needed
        
    //you`re losing your shots
    shots--;
    magazine.src = 'img/shot'+ shots +'.png';
    
    //variable that allows to play the same sound over and over, almost simultaneously
    var gunShot_sound = new Audio('sounds/99-gunshot-sfx-.mp3').play();
    
        //when you`re out of shots
        if (shots === 0 && aliveDucks > 0) { //if NOT all duck has been shot, the last missed duck flyes away
            container.onclick = null;       //can't shoot the screen anymore
            if (aliveDucks === currentDucksAmt) { 
                document.getElementById('backgroundTop').src = "img/bgTopFlyAway.png"; 
                container.style.backgroundColor = "#fabaaf";
                flyAwayText.style.display = "inline-block";
             
            }
            for (i=0;i<currentDucksAmt;i++) {  //pętla idzie po wszystkich obiektach, bo brak strzałów/ucieczka dotyczy wszsytkich kaczek
                if (ducksObj[i].aliveFlag == true) { //if duck still has an aliveFlag, it can fly away
                        clearInterval(ducksObj[i]._flight);       //duck stops flying
                        clearInterval(ducksObj[i]._shuffle);      //and so the shuffling
                        ducksObj[i].duckPic.onclick = null;    //you can't shoot it anymore
                        ducksObj[i].duckEnd.call(ducksObj[i],0.7);
                        //duck just flies away, going higher and higher...
                } 
            }
        }
}   

Duck.prototype.terminate = function() { //this what happens when you shot the duck
        
        this.duckPic.onclick = null;    //you can`t shoot it anymore
        //container.onclick = null;       //neither the screen
        
        this.duckPic.src = "img/duck1score.gif";    //duck turns a weird duck for a while
        this.duckHitIcon.src = "img/hit/duckHitRed.gif";		//and the duck hit turns red
        clearInterval(this._flight);             //duck stops flying
        clearInterval(this._shuffle);            //and so the shuffling
        clearInterval(this._flap);                      //the sound stops too
        clearInterval(this._quack);
        
        (aliveDucks < initDucksAmt) ? points += 1000 : points += 500;  //oh, and you gained some points/ it`s just a ternary if statement/if the current amount of aliveduck are lower than initial ducks value, shot is worth 1000, otherwise - 500
        this.ptsCount.call(this,points);
        this.showPts.call(this);
        aliveDucks--;                            //another dead duck
        this.aliveFlag = false;                  //black flag is raised
        
        setTimeout(_duckEnd.bind(this), 800);          //function duckEnd will be executed in 800ms (so the weird looking duck will lasts for a while)
        function _duckEnd() {
            this.duckEnd.call(this,-0.7);
        };
}

Duck.prototype.duckEnd = function(operator) {
        console.log('DUCK END');
   
        //duck is changing image
        if (operator === -0.7) {
            duckFalls_sound.play();
            this.duckPic.src = "img/duck1fall.gif";
            
        }
        else if (operator === 0.7) {
            this.duckPic.src = "img/duckUp.gif";   
			
        }
        
        var _duckAction = setInterval(duckAction.bind(this),5);     //function 'down' will be looping ever 5ms, variable was made to make possible clearing the interval later
        
		function duckAction() {
            
            if(this.posY < 1 || this.posY > 450) {
                if (this.posY < 1) {duckFalls_sound.pause(); duckLands_sound.play();} //stops the falling sound, and play land sound
                currentDucksAmt--;
                clearInterval(_duckAction);
                clearInterval(this._flight);
                clearInterval(this._shuffle);
                clearInterval(this._flap);
                clearInterval(this._quack);
                var bodyCount = 0;
                    //loop over ducksObj to check how many ducks are dead != alive
                    for(i=0; i<ducksObj.length; i++) {
                        bodyCount += (!ducksObj[i].aliveFlag);
                    }
                if (this.aliveFlag == true) { this.duckHitIcon.src = "img/hit/duckHitWhite.gif"; }
                //when there are no duck left, it`s time to raise the dog
                if (currentDucksAmt === 0 && bodyCount > 0) {
                    //and that`s affects the dog look
                    this.theDog.call(this,'success'+bodyCount+'dog', gotDuck_sound);
                    return;
                }
                else if (currentDucksAmt === 0 && bodyCount === 0) {
//                    this.duckHitIcon.src = "img/hit/duckHitWhite.gif"; //duck hit remains white
                    this.theDog.call(this,'laughingone', laugh_sound, 'laugh');    //starting the dog action with the laughing parameters
                    return;
                }
                else return; //if currentDucksAmt != it means that it`s not the last duck; it has to wait for another one to finish action
            }
                    
            //duck is keep on falling, 1px down by 5ms
            else {  
                    
                this.posY += operator; 
                this.duckPic.style.bottom = this.posY + 'px';
            }
        }
    }

//action of the dog
Duck.prototype.theDog = function(behaviour, sound, laugh){
        console.log('THE DOG')
        //setting the appriopriate dog look
        dogField.innerHTML += '<img src="img/'+behaviour+'.png" id="dogPic">';	//dog plays at the dog field
        sound.play();
        var theDoggy = document.getElementById('dogPic');
        //it`s high enough to be visible behind the grass
        var z = 50;
        theDoggy.style.bottom = z + 'px';
        
        //if function was started by missing the duck, laughing dog is placed in the middle (170px)
        if(laugh) {
            theDoggy.style.left = '170px';
        }
        //if you`ve shot the duck, dog is placed where the bird falls
        else {
            theDoggy.style.left = this.posX + 'px';
        }
        
        var _dogAction = setInterval(dogAction.bind(this),120);  
        var flag = true; //just a flag for laughLoop
        
        function dogAction() {
                 
            //when dog reaches 110px high, begins to hide; and because of the flag, only this condition will be executed
            if (z > 110 || flag === false)
            {
                    flag = false;
                    z -= 15;
                    theDoggy.style.bottom = z + 'px';
                    //when dog reaches 51px successLoop stops, and the Duck.reload function is going to be executed
                    if(z < 51) {
                        this.reload.call(this);
                        clearInterval(_dogAction);
                        return;
                    }
            }
            //dog is moving up (and partially stays behing the graas because of z-index) by 10px in every 120ms
            else if (z <= 110 && flag === true) 
            {
                z += 10;
                theDoggy.style.bottom = z + 'px';
            }                
        }
    }

Duck.prototype.ptsCount = function(pts) {
        pointsArr = pts.toString().split('');
        console.log(pointsArr);
        var j = 5; //slots for single points in score field
        for(i=pointsArr.length-1;i>-1;i--) {
            document.getElementById("point"+j+"").src = "img/points/"+pointsArr[i]+".gif";
            j--;
        }
}

Duck.prototype.showPts = function() {
        ///////////////////PUNKTY NA EKRANIE/////////////////
        var posX = this.posX + 14;
        var posY = this.posY + 25;
        pointsTxt.style.left = posX+ "px";
        pointsTxt.style.bottom = posY+ "px";
        pointsTxt.innerHTML = '<div id="_pointsTxt"></div>';
        
        _pointsTxt.style.display = "inline-block";
        (aliveDucks < initDucksAmt) ? _pointsTxt.innerHTML = '1000' : _pointsTxt.innerHTML = '500';
        setTimeout(ptsHide,1600);
        function ptsHide() {
            _pointsTxt.style.display = "none";
        };
        
    }
Duck.prototype.reload = function() {  //reload
                
        console.log('_duckNumber ' + this._duckNumber);
        if(ducks === 10) {
            outro();
            function outro() {
                theEnd.play();
                container.innerHTML = '<img src="img/outro/outroScreen.png" id="outroScreen"><div id="points"></div><img src="img/outro/playAgain.png" id="playAgain" onclick="location.reload()"><a href="http://behance.net/lukaszprzybylowicz" target="_blank"><img src="img/outro/visit.png" id="visitOutro"></a>';
                playAgain.onmouseover = function() {
                    playAgain.src = "img/outro/playAgainHover.png"
                };
                playAgain.onmouseout = function() {
                    playAgain.src = "img/outro/playAgain.png"
                };
                visitOutro.onmouseover = function() {
                    visitOutro.src = "img/outro/visitHover.png"
                };
                visitOutro.onmouseout = function() {
                    visitOutro.src = "img/outro/visit.png"
                };

                document.getElementById('points').style.left = "186px";
                document.getElementById('points').style.bottom = "155px";
                document.getElementById('points').style.zIndex = "4";
              
                for(i=0;i<6;i++) {
                    document.getElementById('points').innerHTML += '<img src="img/points/0.gif" id="point'+i+'" class="singlePoint">';
                }
                var j = 5; //slots for single points in score field
                for(i=pointsArr.length-1;i>-1;i--) {
                    document.getElementById("point"+j+"").src = "img/points/"+pointsArr[i]+".gif";
                    j--;
                }
            }    
        }
    //wstawienie nowej kaczki i magazynku, odnowienie strzełów
        else {
            
            ducks += initDucksAmt; //next ducks to hit
            console.log('ducks ' +ducks);
            currentDucksAmt = initDucksAmt;
            aliveDucks = initDucksAmt;
            shots = 3;
            magazine.src = "img/shot3.png";
            //this.duckPic.src = "img/duckUp.gif";
            dogField.innerHTML = '';	//the dog field needs to be cleared, so the dog won`t multiply
            document.getElementById('backgroundTop').src = "img/bgTopCrop.gif";
            container.style.backgroundColor = "#50a2ec";
            flyAwayText.style.display = "none";

    //konfiguracja nowej kaczki // czy clear intervals nie sa zbedne??
            clearInterval(this._flight);
            clearInterval(this._shuffle);
            for (i=0;i<currentDucksAmt;i++) {  //bringing ducks back to live
                ducksObj[i].aliveFlag = true;
            }
            releaseDucks(); //kaczka, ktora robi reloada odpala wszsytkie kaczki; musi tez przekazac dane - nie resetujemy initval ani duckHitIcon
        }
};
        
