	///////////////////////////FLAGS///////////////////////////
	
	//initial all OFF
	var scaleToggle = 0;
	var modeToggle = 0;
	var randomScaleModeToggle = 0;
	var startNoteToggle = 0;
	var qtyToggle = 0;
	var startNoteCustomField = 0;
	var startNoteCustomScale = 0;
	var scaleTemp = '';
	
	
	
	///////////////////////////FIELDS BUILD///////////////////////////
	
	var scale = '';
	var mode = '';
	var randomScaleMode = ''
	var startNote = '';
	var qty = '';
	
	function buildScaleField()
	{
		document.getElementById("scaleField").innerHTML += '<div id="scFieldScreen"><div id="scaleFieldScreen" class="fieldCover"><h1 id="scaleFieldScreenH1"></h1><h2 id="scaleFieldScreenH2"></h2></div></div>';
		
		document.getElementById("scaleFieldScreenH1").innerHTML = "Scale";
		
		for(i=0; i<12; i++)
		{
			document.getElementById("scaleField").innerHTML += '<div onclick="getScale('+i+')" id="scaleButton'+i+'" class="button">'+sounds_list[i]+'</div>';
			if(i == 2 || i == 5 || i == 8) document.getElementById("scaleField").innerHTML += '<br>';
		}	

	}	
		
	function buildRandomScaleModeField()
	{
		document.getElementById("randomField").innerHTML += '<div onclick="getRandomScaleMode(12)" id="randomScaleModeButton1" class="buttonWideRandom">random all notes</div>'; 
		document.getElementById("randomField").innerHTML += '<div onclick="getRandomScaleMode(7)" id="randomScaleModeButton0" class="buttonWideRandom">random scale</div>';
	}
	
	
	var modeButtonValue = ['ion', 'dor', 'phr', 'lyd', 'mix', 'aeol', 'loc'];
	var modesNames = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
		
	function buildModeField()
	{
		document.getElementById("modeField").innerHTML += '<div id="mdFieldScreen"><div id="modeFieldScreen" class="fieldCover"><h1 id="modeFieldScreenH1"></h1><h2 id="modeFieldScreenH2"></h2></div></div>';
		
		document.getElementById("modeFieldScreenH1").innerHTML = "Mode";

		for(i=0; i<7; i++)
		{
		document.getElementById("modeField").innerHTML += '<div onclick="getMode('+i+')" id="modeButton'+i+'" class="button">'+modeButtonValue[i]+'</div>';
		if(i == 2 || i == 5 || i == 8) document.getElementById("modeField").innerHTML += '<br>';
		}

	}	
			
	function buildStartNoteField()
	{
		document.getElementById("startNoteField").innerHTML += '<div id="stNoteFieldScreen"><div id="startNoteFieldScreen" class="fieldCover"><h1 id="startNoteFieldScreenH1"></h1><h2 id="startNoteFieldScreenH2"></h2></div></div>';
		document.getElementById("startNoteFieldScreenH1").innerHTML = "Start note";

		for(i=0; i<24; i++)
		{
		document.getElementById("startNoteField").innerHTML += '<div onclick="getStartNote('+i+')" id="startNoteButton'+i+'" class="buttonSmall">'+sounds_list[i]+'</div>';
		if(i == 3 || i == 7 || i == 11 || i == 15 || i == 19) document.getElementById("startNoteField").innerHTML += '<br>';
		}
		document.getElementById("startNoteField").innerHTML += '<div onclick="getStartNote(100)" id="startNoteButton'+i+'" class="buttonWideSmall">random</div>'; //100 jest wartoscia robocza, wolałbytm tutaj nazwe 
		
	}
	
	function buildQuantityField()
	{
		document.getElementById("quantityField").innerHTML += '<div id="quantityFieldScreen"><div id="qtyFieldScreen" class="fieldCover"><h1 id="qtyFieldScreenH1"></h1><h2 id="qtyFieldScreenH2"></h2></div></div>';
		
		document.getElementById("qtyFieldScreenH1").innerHTML = "Quantity";

		var _i=2; //zmienna, która sprawia, że tworzymy QuantityField od numeru "2"
		for(i=0; i<11; i++)
		{
			document.getElementById("quantityField").innerHTML += '<div onclick="getQuantity('+_i+')" id="quantityButton'+i+'" class="button">'+_i+'</div>'; //scaleButtonValue czy sounds_list?
			if(i == 2 || i == 5 || i == 8) document.getElementById("quantityField").innerHTML += '<br>';
			_i++;
		}
		document.getElementById("quantityField").innerHTML += '<div onclick="getQuantity(100)" id="quantityButton'+i+'" class="buttonWide">random</div>';
	}
	
	function buildFreePlayKeyboard()
	{
		/*document.getElementById("scaleKeyboard").innerHTML = '';*/
		document.getElementById("scaleKeyboard").innerHTML += '<ul id="set"><li class="white c" onclick="freePlay(0)"><div class="noteWhite">C</div></li><li class="black cis" onclick="freePlay(1)"><div class="noteBlack">C#</div></li><li class="white d" onclick="freePlay(2)"><div class="noteWhite">D</div></li><li class="black dis" onclick="freePlay(3)"><div class="noteBlack">D#</div></li><li class="white e" onclick="freePlay(4)"><div class="noteWhite">E</div></li><li class="white f" onclick="freePlay(5)"><div class="noteWhite">F</div></li><li class="black fis" onclick="freePlay(6)"><div class="noteBlack">F#</div></li><li class="white g" onclick="freePlay(7)"><div class="noteWhite">G</div></li><li class="black gis" onclick="freePlay(8)"><div class="noteBlack">G#</div></li><li class="white a" onclick="freePlay(9)"><div class="noteWhite">A</div></li><li class="black bb" onclick="freePlay(10)"><div class="noteBlack">Bb</div></li><li class="white b" onclick="freePlay(11)"><div class="noteWhite">B</div></li><li class="white c1" onclick="freePlay(12)"><div class="noteWhite">C1</div></li><li class="black cis1" onclick="freePlay(13)"><div class="noteBlack">C#1</div></li><li class="white d1" onclick="freePlay(14)"><div class="noteWhite">D1</div></li><li class="black dis" onclick="freePlay(15)"><div class="noteBlack">D#1</div></li><li class="white e" onclick="freePlay(16)"><div class="noteWhite">E1</div></li><li class="white f" onclick="freePlay(17)"><div class="noteWhite">F1</div></li><li class="black fis" onclick="freePlay(18)"><div class="noteBlack">F#1</div></li><li class="white g" onclick="freePlay(19)"><div class="noteWhite">G1</div></li><li class="black gis" onclick="freePlay(20)"><div class="noteBlack">G#1</div></li><li class="white a" onclick="freePlay(21)"><div class="noteWhite">A1</div></li><li class="black bb" onclick="freePlay(22)"><div class="noteBlack">Bb1</div></li><li class="white b" onclick="freePlay(23)"><div class="noteWhite">B1</div></li><li class="white c2" onclick="freePlay(24)"><div class="noteWhite">C2</div></li></ul>';
	}
	
	//////////////////////GET VALUES//////////////////////////
	
	function getScale(scaleVar)
	{
		scale = scaleVar;
		console.log("scale = scaleVar "+scale);
		randomScaleModeToggle = 0; 
		randomScaleMode = 0;
		RandomScaleModeFieldReset();
		startNoteFieldColorsReset();
		startNoteToggle = 0; 
		
		scaleFieldColorsReset();
		document.getElementById('scaleButton'+scaleVar+'').className = "buttonActive";
		scaleToggle = 1;
		
		if(startNoteCustomField == 1) //jeśli pole jest wyszarzone (bo przed chwilą było RANDOM), to budujemy je od nowa.
		{
			startNoteFieldColorsReset();
			document.getElementById("startNoteField").innerHTML = ''; buildStartNoteField(); 
			startNoteCustomField = 0;
			
		}
				
		if(modeToggle == 0) 
		{
			startNoteToggle = 0; 
		}
		else if(modeToggle == 1) startNoteCustomFieldBuild(); //jeśli mamy zdefiniowany tryb, to budujemy gamę a potem startNoteCustomField()
		startNoteCustomField = 0;
		coverFieldCheck();
	}
	
	function getMode(modeVar)
	{
		
		
		mode = modeVar;
		console.log("mode = modeVar "+mode);
		
		randomScaleModeToggle = 0; 
		randomScaleMode = 0;
		RandomScaleModeFieldReset();
		startNoteFieldColorsReset();
		startNoteToggle = 0; 
		
		modeFieldColorsReset();
		document.getElementById('modeButton'+modeVar+'').className = "buttonActive";		
		modeToggle = 1;
		
		if(startNoteCustomField == 1) 
		{
			startNoteFieldColorsReset();
			document.getElementById("startNoteField").innerHTML = ''; buildStartNoteField(); //jeśli pole jest wyszarzone (bo przed chwilą było RANDOM), to budujemy je od nowa.
			startNoteCustomField = 0;
		}
		
		if(scaleToggle == 0) 
		{
			startNoteToggle = 0; 
		}
		else if(scaleToggle == 1) startNoteCustomFieldBuild(); //jeśli mamy zdefiniowanyą tonikę, to budujemy gamę a potem startNoteCustomField()
		
	
		startNoteCustomField = 0;
		coverFieldCheck();
				
	}
	
	function getRandomScaleMode(option)
	{
		scale = ''; mode = '';
		RandomScaleModeFieldReset();
				
		if(option == "7") 
		{		
			randomScaleModeToggle = 1;
			randomScaleMode = 7; //ta wartosc przechodzi do fukncji budujGameVar
			document.getElementById('randomScaleModeButton0').className = "buttonWideRandomActive";
			
			scaleToggle = 0;
			scaleFieldColorsReset();
			
			modeToggle = 0;
			modeFieldColorsReset();			
			
			if(startNoteCustomScale == 1) { document.getElementById("startNoteField").innerHTML = ''; buildStartNoteField(); startNoteCustomScale = 0; } //ew. resetuje startNoteField, jesli są na nim jakies zmiany (dokonane przez getScale i getMode)
			
			startNoteToggle = 1;
//			startNoteFieldColorsReset(); to już nie jest potrzebne, bo i tak wyszarzamy zaraz pola
			document.getElementById('startNoteButton24').className = "";
			document.getElementById('startNoteButton24').className = "buttonWideActiveSmall";
			document.getElementById('startNoteButton24').setAttribute("onclick",";");
			startNoteCustomField = 1; //czyli RANDOM
			
			//blokujemy dostęp do startNoteField wyszarzając pola
			
			for(i=0; i<24; i++)
			{
				document.getElementById('startNoteButton'+i+'').className = "";
				document.getElementById('startNoteButton'+i+'').className = "buttonUnactiveSmall";
				document.getElementById('startNoteButton'+i+'').setAttribute("onclick",";");
			}		
			
			startNote = 100; //czyli random
			
			coverFieldCheck();
			console.log("randomScaleMode "+randomScaleMode);
		}
		//RANDOM ALL 12 NOTES
		else if(option == "12") 
		{
			randomScaleModeToggle = 1;
			randomScaleMode = 12; //ta wartosc przechodzi do fukncji budujGameVar
			document.getElementById('randomScaleModeButton1').className = "buttonWideRandomActive";
			
			scaleToggle = 0;
			scaleFieldColorsReset();
			
			modeToggle = 0;
			modeFieldColorsReset();	
			
			if(startNoteCustomScale == 1) {document.getElementById("startNoteField").innerHTML = ''; buildStartNoteField(); startNoteCustomScale = 0; startNoteToggle = 0; startNote = '';} //ew. resetujemy startNotefield
			
			if(startNoteCustomField == 1) //jeśli pole jest wyszarzone (bo przed chwilą było RANDOM), to budujemy je od nowa.
			{
				document.getElementById("startNoteField").innerHTML = ''; buildStartNoteField(); 
				startNoteCustomField = 1;
				document.getElementById('startNoteButton24').className = "";
				document.getElementById('startNoteButton24').className = "buttonWideActiveSmall";
				
			}
			
			coverFieldCheck();
			console.log("randomScaleMode "+randomScaleMode);
		}	
	}

	function getStartNote(startNoteVar)
	{
		//jeśli RANDOM, to zaznaczemy 
		if(startNoteVar == 100 && startNoteCustomScale == 1) { startNoteCustomFieldBuild(); document.getElementById('startNoteButton24').className = "buttonWideActiveSmall"; }
		
		else if(startNoteVar == 100 && startNoteCustomScale == 0)	{ startNoteFieldColorsReset(); document.getElementById('startNoteButton24').className = "buttonWideActiveSmall"; }
		
		else if(startNoteCustomScale == 1)
		{
			startNoteCustomFieldBuild();
			document.getElementById('startNoteButton'+startNoteVar+'').className = "buttonActiveSmall";		
			
		}
		
		else
		{
			startNoteFieldColorsReset();
			
			document.getElementById('startNoteButton'+startNoteVar+'').className = "buttonActiveSmall";		
			
		}
		
		startNote = startNoteVar;
		console.log("startNote = startNoteVar "+startNote);
		startNoteToggle = 1;
		coverFieldCheck();
	}
	
	function getQuantity(quantityVar)
	{
		var i = quantityVar - 2; //tutaj musimy użyć innej zmiennej, niż przekazywanej w argumencie funkcji, bo artgument nie zaczyna się od 0
		
		if(quantityVar == 100) { quantityFieldColorsReset(); document.getElementById('quantityButton11').className = " buttonWideActive"; }
		
		
		
		else 
		{
			quantityFieldColorsReset();
			document.getElementById('quantityButton'+i+'').className = " buttonActive";
		}
		
		qty = quantityVar;
		console.log("qty = quantityVar "+qty);
		qtyToggle = 1;
		coverFieldCheck();
	}
	
	////////////////////////FIELDS COVERS AND VALIDATION///////////////////////
	
	function coverFieldCheck()
	{
		

		if(scaleToggle == 0 && randomScaleModeToggle == 0) { document.getElementById("scaleFieldScreenH1").innerHTML = "Root note"; document.getElementById("scaleFieldScreenH2").innerHTML = "choose"; }
		else if(scaleToggle == 1) document.getElementById("scaleFieldScreenH2").innerHTML = sounds_list[scale];
		
		if(modeToggle == 0 && randomScaleModeToggle == 0) { document.getElementById("modeFieldScreenH1").innerHTML = "Mode"; document.getElementById("modeFieldScreenH2").innerHTML = "choose"; }
		else if(modeToggle == 1) document.getElementById("modeFieldScreenH2").innerHTML = modesNames[mode];
		
		if(randomScaleModeToggle == 1) 
		{
			if(randomScaleMode == 7)
			{
				document.getElementById("scaleFieldScreenH2").innerHTML = "random";
				document.getElementById("modeFieldScreenH2").innerHTML = "random";
			}
			else if(randomScaleMode == 12)
			{
				document.getElementById("scaleFieldScreenH2").innerHTML = "random";
				document.getElementById("modeFieldScreenH2").innerHTML = "-";
			}
		}			
		
		if(startNoteToggle == 0) { document.getElementById("startNoteFieldScreenH1").innerHTML = "Start note"; document.getElementById("startNoteFieldScreenH2").innerHTML = "choose"; }
		
		if(startNoteToggle == 1 && scaleToggle == 0 && modeToggle == 1) document.getElementById("startNoteFieldScreenH2").innerHTML = sounds_list[startNote];
		else if(startNoteToggle == 1 && startNote == 100) document.getElementById("startNoteFieldScreenH2").innerHTML = "random";
		else if(startNoteToggle == 1 && startNote != 100 && modeToggle == 0 ) document.getElementById("startNoteFieldScreenH2").innerHTML = sounds_list[startNote];
		else if(startNoteToggle == 1 && startNote != 100 && modeToggle == 1 ) document.getElementById("startNoteFieldScreenH2").innerHTML = chosenScale[startNote];
		
		
		
		if(qtyToggle == 0) { document.getElementById("qtyFieldScreenH1").innerHTML = "Quantity"; document.getElementById("qtyFieldScreenH2").innerHTML = "choose";  }
		else if(qtyToggle == 1 && qty != 100) document.getElementById("qtyFieldScreenH2").innerHTML = qty;
		else if(qtyToggle == 1 && qty == 100) document.getElementById("qtyFieldScreenH2").innerHTML = "random";


	}
	
	function fieldsValidation()
	{
		if(((scaleToggle == 1 && modeToggle == 1) || randomScaleModeToggle == 1) && startNoteToggle == 1 && qtyToggle == 1) 
		{
			
			
			if(randomScaleMode == 7)
			{
			//RANDOM SCALE_MODE
					scale = Math.floor(Math.random() * 12);
						console.log("randomowy scale "+scale);
					mode = Math.floor(Math.random() * 7);
						console.log("randomowy mode "+mode);
						console.log("randomowy mode "+mode);
					budujGameVar();
			}
			//RANDOM ALL
			else if(randomScaleMode == 12) budujGameVar(); 
			else budujGameVar();
		}
		
		else 
		{	document.getElementById("validationAlert").style.display = '';
			document.getElementById("validationAlert").style.display = "initial";	
			
			document.getElementById("validationAlertContenth2").innerHTML = "Please choose: ";
			document.getElementById("validationAlertContenth3").innerHTML = "";
			
			if(scaleToggle == 0 && randomScaleModeToggle == 0) document.getElementById("validationAlertContenth3").innerHTML += "Root note <br>";
			
			if(modeToggle == 0 && randomScaleModeToggle == 0) document.getElementById("validationAlertContenth3").innerHTML += "Mode <br>";

			if(startNoteToggle == 0) document.getElementById("validationAlertContenth3").innerHTML += "Start note<br>";
			
			if(qtyToggle == 0) document.getElementById("validationAlertContenth3").innerHTML += "Quantity<br>";
			
		}
		
	}	

	//////////////////////////////////////////SCALE BUILD////////////////////////////////////////
	
	var sounds_list = ["C", "Cis", "D", "Dis", "E", "F", "Fis", "G", "Gis", "A", "Bb", "B", "C1", "Cis1", "D1", "Dis1", "E1", "F1", "Fis1", "G1", "Gis1", "A1", "Bb1", "B1", "C2"];
		var Cmajor =   ["C", "D", "E", "F", "G", "A", "B"];
	var chosenScale = [];
	var chosenScaleNumber = []; 
	var xx = 0;
	var z = 7;
	function startNoteCustomFieldBuild()
	{	
		z = 7;
		startNoteCustomScale = 1;
		setScale();
			
		document.getElementById("startNoteField").innerHTML = ''; //reset pola
		document.getElementById("startNoteField").innerHTML += '<div id="stNoteFieldScreen"><div id="startNoteFieldScreen" class="fieldCover"><h1 id="startNoteFieldScreenH1"></h1><h2 id="startNoteFieldScreenH2"></h2></div></div>';
		document.getElementById("startNoteFieldScreenH1").innerHTML = "Start note";

		j=0;
		var noteFlag = "false"; //zmienna pozwalająca sprawdzić czy dzwieki sobie odpowiadają		
		xx = 0;
			
		for(i=0; i<24; i++) //budujemy startNoteCustomField()
		{
			noteFlag = "false";
				
			for(j=0; j<7; j++)
			{
				if(sounds_list[i] == chosenScale[j]) { noteFlag = "true"; xx = j;} //numer, który pasuje przypisujemy do zmiennej xx, bo j leci w pętli do 7. nam chodzi o stan j kiedy jest zgodny z nutą z sounds_list
			}
			if(noteFlag == "true")
			{
				document.getElementById("startNoteField").innerHTML += '<div onclick="getStartNote('+xx+')" id="startNoteButton'+xx+'" class="buttonSmall">'+sounds_list[i]+'</div>'; console.log("xx "+xx);
			}
				
			else if(noteFlag == "false")
			{	i; console.log("z "+z+" i "+i); //musimy wykorzystać zmienną z, której wartością startową jest 7. A zatem jej początkiem jest koniec zmiennej xx (0-6). Zmienna z ma warotsci (7,11), w sumie zatem obie zmienne mają 12 elementów. Zmienna i idzie niezaleznie od 0 do 11 i służy do numerowania pól, które widzi użytkownik
				document.getElementById("startNoteField").innerHTML += '<div onclick="getStartNote('+z+')" id="startNoteButton'+z+'" class="buttonSmall">'+sounds_list[i]+'</div>';
				document.getElementById('startNoteButton'+z+'').className = "";
				document.getElementById('startNoteButton'+z+'').className = "buttonUnactiveSmall";
				document.getElementById('startNoteButton'+z+'').setAttribute("onclick",";");
				z++; 
			}
				
				if(i == 3 || i == 7 || i == 11 || i == 15 || i == 19) document.getElementById("startNoteField").innerHTML += '<br>';
				
		}
		document.getElementById("startNoteField").innerHTML += '<div onclick="getStartNote(100)" id="startNoteButton'+i+'" class="buttonWideSmall">random</div>'; //100 jest wartoscia robocza, wolałbytm tutaj nazwe 	

		

	coverFieldCheck();		
	}
	
	
	function budujGameVar() //najpierw budujemy game, potem losujemy dzwieki na podst. paramatrow (w funkcji losujOd())
	{

		chosenScale = [];
		reset(); 
		scaleTemp = scale; //zmienna pomocnicza, żeby nie psuć zmiennej scale, jest odświeżana po każdym wybraniu funkcji//?  
		setScale();
		
		
		
		wstawGame(chosenScale); //ta fukncja ma też wyszarzyć klawisze niedostępne i uaktywnić klawisze w danej gamie
		losujOd();
		checkReset();
		buildhiddenFieldContainer();
	}
	
	function setScale()
	{
		scaleTemp = scale;
		chosenScale = [];
		
		//RANDOM ALL
		if(randomScaleMode == 12) //mode nas nie interesuje, jak również tonika; budujemy od 0, a i jest nasza zmienna
		{
			for(i=0; i<25; i++) 
			{
				chosenScale.push(sounds_list[i])
				console.log("chosen scale: "+chosenScale);
				console.log("scaleTemp "+scaleTemp);
			}
		}
		
		//GAMA JOŃSKA - MAJ
		else if(mode == 0) 
		{
			for(i=0; i<7; i++) 
			{
				chosenScale.push(sounds_list[scaleTemp]) //tutaj nastęuje przypisanie pierwszego dźwięku i w tym momencie ustalenie GAMY
				console.log("chosen scale: "+chosenScale);
						
				if(i == 2) { scaleTemp ++;}
				else { scaleTemp ++; scaleTemp ++; }
					
				
					
					console.log("scaleTemp "+scaleTemp);
			}
		}
		
		//GAMA DORYCKA
		else if(mode == 1) 
		{
			for(i=0; i<7; i++) 
			{
				chosenScale.push(sounds_list[scaleTemp])
				console.log("chosen scale: "+chosenScale);
						
				if(i == 1 || i == 5) { scaleTemp ++;}
				else { scaleTemp ++; scaleTemp ++; }
					
				
					
					console.log("scaleTemp "+scaleTemp);
			}
		}
		
		//GAMA FRYGIJSKA
		else if(mode == 2) 
		{
			for(i=0; i<7; i++) 
			{
				chosenScale.push(sounds_list[scaleTemp])
				console.log("chosen scale: "+chosenScale);
						
				if(i == 0 || i == 4) { scaleTemp ++;}
				else { scaleTemp ++; scaleTemp ++; }
					
				
					
					console.log("scaleTemp "+scaleTemp);
			}
		}
		
		//GAMA LIDYJSKA
		else if(mode == 3) 
		{
			for(i=0; i<7; i++) 
			{
				chosenScale.push(sounds_list[scaleTemp])
				console.log("chosen scale: "+chosenScale);
						
				if(i == 3) { scaleTemp ++;}
				else { scaleTemp ++; scaleTemp ++; }
					
				
					
					console.log("scaleTemp "+scaleTemp);
			}
		}
		
		//GAMA MIKSOLIDYJSKA
		else if(mode == 4) 
		{
			for(i=0; i<7; i++) 
			{
				chosenScale.push(sounds_list[scaleTemp])
				console.log("chosen scale: "+chosenScale);
						
				if(i == 2 || i == 5) { scaleTemp ++;}
				else { scaleTemp ++; scaleTemp ++; }
					
				
					
					console.log("scaleTemp "+scaleTemp);
			}
		}
		//GAMA EOLSKA - MIN
		else if(mode == 5) 
		{
			for(i=0; i<7; i++) 
			{		
				chosenScale.push(sounds_list[scaleTemp])
				console.log("chosen scale: "+chosenScale);
						
				if(i == 1 || i == 4) { scaleTemp ++;}
				else { scaleTemp ++; scaleTemp ++; }
					
				
					console.log("scaleTemp "+scaleTemp);
			}
				
		}
		
		//GAMA LOKRYCKA - MIN
		else if(mode == 6) 
		{
			for(i=0; i<7; i++) 
			{		
				chosenScale.push(sounds_list[scaleTemp])
				console.log("chosen scale: "+chosenScale);
						
				if(i == 0 || i == 3) { scaleTemp ++;}
				else { scaleTemp ++; scaleTemp ++; }
					
				
					console.log("scaleTemp "+scaleTemp);
			}
				
		}
		console.log("chosen scale - czyli zakres dzwiekow do wyboru "+chosenScale);
	}
		var doSprawdzenia = [''];
		
	function wstawGame(gama) //to będzie używane do wstawienia klawiatury dla danej gamy
	{
		
		for(i=0; i<chosenScale.length; i++)
		{
			for(j=0; j<25; j++) 
			{
				
				if(chosenScale[i] == sounds_list[j]) doSprawdzenia[i] = j;
			}
			console.log(" doSprawdzenia"+doSprawdzenia);
		}
	
	
		
		
		
		
		if(randomScaleMode == 12)
		{
			document.getElementById("scaleKeyboard").innerHTML = '';
			document.getElementById("scaleKeyboard").innerHTML += '<ul class="set"><li class="white c" onclick="sprawdz(0)"><div class="noteWhite">C</div></li><li class="black cis" onclick="sprawdz(1)"><div class="noteBlack">C#</div></li><li class="white d" onclick="sprawdz(2)"><div class="noteWhite">D</div></li><li class="black dis" onclick="sprawdz(3)"><div class="noteBlack">D#</div></li><li class="white e" onclick="sprawdz(4)"><div class="noteWhite">E</div></li><li class="white f" onclick="sprawdz(5)"><div class="noteWhite">F</div></li><li class="black fis" onclick="sprawdz(6)"><div class="noteBlack">F#</div></li><li class="white g" onclick="sprawdz(7)"><div class="noteWhite">G</div></li><li class="black gis" onclick="sprawdz(8)"><div class="noteBlack">G#</div></li><li class="white a" onclick="sprawdz(9)"><div class="noteWhite">A</div></li><li class="black bb" onclick="sprawdz(10)"><div class="noteBlack">Bb</div></li><li class="white b" onclick="sprawdz(11)"><div class="noteWhite">B</div></li><li class="white c1" onclick="sprawdz(12)"><div class="noteWhite">C1</div></li><li class="black cis1" onclick="sprawdz(13)"><div class="noteBlack">C#1</div></li><li class="white d1" onclick="sprawdz(14)"><div class="noteWhite">D1</div></li><li class="black dis" onclick="sprawdz(15)"><div class="noteBlack">D#1</div></li><li class="white e" onclick="sprawdz(16)"><div class="noteWhite">E1</div></li><li class="white f" onclick="sprawdz(17)"><div class="noteWhite">F1</div></li><li class="black fis" onclick="sprawdz(18)"><div class="noteBlack">F#1</div></li><li class="white g" onclick="sprawdz(19)"><div class="noteWhite">G1</div></li><li class="black gis" onclick="sprawdz(20)"><div class="noteBlack">G#1</div></li><li class="white a" onclick="sprawdz(21)"><div class="noteWhite">A1</div></li><li class="black bb" onclick="sprawdz(22)"><div class="noteBlack">Bb1</div></li><li class="white b" onclick="sprawdz(23)"><div class="noteWhite">B1</div></li><li class="white c2" onclick="sprawdz(24)"><div class="noteWhite">C2</div></li></ul>';
			
			/*for(i=0; i<12; i++)
			{
				document.getElementById("scaleKeyboard").innerHTML += '<button onclick="sprawdz('+i+')" class="button">'+sounds_list[i]+'</button>';
			}*/
		}	
		else
		{	
	
			var flag = "false";
			document.getElementById("scaleKeyboard").innerHTML = '';
			document.getElementById("scaleKeyboard").innerHTML = '<ul id="set">';
			for(k=0; k<25; k++)
			{
				for(i=0; i<7; i++) 
				{
					if(gama[i] == sounds_list[k]) 
					{ 
						flag = "true";
						document.getElementById("set").innerHTML += '<li class="" id="keyboardNote'+k+'" onclick="sprawdz(doSprawdzenia['+i+'])"><div id="activeNoteName'+k+'" class="">'+gama[i]+'</div></li>';
					}
				}
				if(flag	== "false")
					{ 
						document.getElementById("set").innerHTML += '<li class="unactive_" id="keyboardNote'+k+'" onclick=";"><div id="activeNoteName'+k+'" class="">'+sounds_list[k]+'</div></li>';
						
						
						
					}
				flag = "false"; 
				
				
			}
			console.log(scaleKeyboard);
			
		
			document.getElementById('keyboardNote0').className += "white";
				document.getElementById('activeNoteName0').className += "noteWhite";
			document.getElementById('keyboardNote2').className += "white";
				document.getElementById('activeNoteName2').className += "noteWhite";
			document.getElementById('keyboardNote4').className += "white";
				document.getElementById('activeNoteName4').className += "noteWhite";
			document.getElementById('keyboardNote5').className += "white";
				document.getElementById('activeNoteName5').className += "noteWhite";
			document.getElementById('keyboardNote7').className += "white";
				document.getElementById('activeNoteName7').className += "noteWhite";
			document.getElementById('keyboardNote9').className += "white";
				document.getElementById('activeNoteName9').className += "noteWhite";
			document.getElementById('keyboardNote11').className += "white";
				document.getElementById('activeNoteName11').className += "noteWhite";
			document.getElementById('keyboardNote12').className += "white";
				document.getElementById('activeNoteName12').className += "noteWhite";
			document.getElementById('keyboardNote14').className += "white";
				document.getElementById('activeNoteName14').className += "noteWhite";
			document.getElementById('keyboardNote16').className += "white";
				document.getElementById('activeNoteName16').className += "noteWhite";
			document.getElementById('keyboardNote17').className += "white";
				document.getElementById('activeNoteName17').className += "noteWhite";
			document.getElementById('keyboardNote19').className += "white";
				document.getElementById('activeNoteName19').className += "noteWhite";
			document.getElementById('keyboardNote21').className += "white";
				document.getElementById('activeNoteName21').className += "noteWhite";
			document.getElementById('keyboardNote23').className += "white";
				document.getElementById('activeNoteName23').className += "noteWhite";
			document.getElementById('keyboardNote24').className += "white";
				document.getElementById('activeNoteName24').className += "noteWhite";
				
				
			
			document.getElementById('keyboardNote1').className += "black";
				document.getElementById('activeNoteName1').className += "noteBlack";
			document.getElementById('keyboardNote3').className += "black";
				document.getElementById('activeNoteName3').className += "noteBlack";
			document.getElementById('keyboardNote6').className += "black";
				document.getElementById('activeNoteName6').className += "noteBlack";
			document.getElementById('keyboardNote8').className += "black";
				document.getElementById('activeNoteName8').className += "noteBlack";
			document.getElementById('keyboardNote10').className += "black";
				document.getElementById('activeNoteName10').className += "noteBlack";
			document.getElementById('keyboardNote13').className += "black";
				document.getElementById('activeNoteName13').className += "noteBlack";
			document.getElementById('keyboardNote15').className += "black";
				document.getElementById('activeNoteName15').className += "noteBlack";
			document.getElementById('keyboardNote18').className += "black";
				document.getElementById('activeNoteName18').className += "noteBlack";
			document.getElementById('keyboardNote20').className += "black";
				document.getElementById('activeNoteName20').className += "noteBlack";
			document.getElementById('keyboardNote22').className += "black";
				document.getElementById('activeNoteName22').className += "noteBlack";
		}
	}
		
		/////////////////////////////////////////////DRAW/////////////////////////////////////////////
		
	function losujOd() 
	{	
		qtyTemp = qty; //zmienna pomocnicza, żeby nie zepsuć zmiennej qty po wywołaniu fukncji; żeby mechanizm losowania działał
		reset();
					
		//START NOTE
		//jesli startnote jest zdefinpowany to pushujemy do luckyNumbers, a i=1 (bo 1-szy dzwiek juz mamy)
		//jesli nie, jedziemy z petla, a i=0
			
		if(startNote == 100) i=0; //startNote == random
		else { i=1; luckyNumbers.push(startNote); randomNote = chosenScale[startNote]; randomMelody.push(randomNote); console.log("chosen scale - czyli zakres dzwiekow do wyboru "+chosenScale);} 
			
		//QTY
		if(qtyTemp == 100 && randomScaleMode != 12)
		{ 
			qtyTemp = Math.floor(Math.random() * 7)+1;//qty==random //USTAWIĆ BY LOSOWAŁ OD 2
			if(qtyTemp == 1) qtyTemp = 2; //jeśli trafimy na 1, to zmieniamy wartosc na 2 - droga totalnie na około (ale innej nie znam:P)
				console.log("qtyTemp "+qtyTemp);
		} 
		else if(qtyTemp == 100 && randomScaleMode == 12)
		{
			qtyTemp = Math.floor(Math.random() * 12)+1;
			if(qtyTemp == 1) qtyTemp = 2;
		}
			
		//RANDOM ALL 
		if(randomScaleMode == 12) //RANDOM ALL, losujemy z 24 dzwiekow
		{
			for(i;i<qtyTemp;i++)
			{
				noteNr = Math.floor(Math.random() * 25);
				luckyNumbers.push(noteNr);
				
				randomNote = chosenScale[noteNr]; // zamiana numerów na nuty
				randomMelody.push(randomNote); //tworzenie tablicy randomMelody
				
			}
		}
			
			//RANDOM MELODY - z konkretnej gamy
		else 
		{
			for(i;i<qtyTemp;i++)
			{
				noteNr = Math.floor(Math.random() * 7);
				luckyNumbers.push(noteNr);
				
				randomNote = chosenScale[noteNr]; // zamiana numerów na nuty
				randomMelody.push(randomNote); //tworzenie tablicy randomMelody
			
	
				
			}
		}	
///////////////////////////PRÓBA NAPRAWY BŁĘDU//////////////////////////
		for(i=0; i<randomMelody.length; i++)
		{
			for(j=0; j<25; j++) 
			{
				if(randomMelody[i] == sounds_list[j]) luckyNumbers[i] = j; 
			}
			console.log("LUCKY"+luckyNumbers);
		}
			
		melodyLength = qtyTemp;
		console.log("randomMelody - wysolowana melodia z danej gamy "+randomMelody);	
		console.log("melodyLength - długość wylosowanej melodii "+melodyLength);	
		console.log("luckyNumbers - wylosowane numery dźwięków (nowa tablica)"+luckyNumbers);	
		
		//if(startNoteToggle == 1 && startNote == 100) 
			document.getElementById("startNoteFieldScreenH2").innerHTML = randomMelody[0];
				
		
		graj();	
	}
		
	function buildhiddenFieldContainer()
	{
		document.getElementById("hiddenFieldContainer").innerHTML = '';
		console.log("checkUnderline " +checkUnderline);
		for(i=0; i<melodyLength; i++)
		{
			document.getElementById("hiddenFieldContainer").innerHTML += '<div class="hiddenField" id="hiddenField'+i+'"><div class="hiddenNote" id="hiddenNote'+i+'"><img src="img/note.png"></div><br><div class="hiddenNoteUnderline" id="hiddenNoteUnderline'+i+'"></div></div>';
		}
		
		/*document.getElementById('hiddenNoteUnderline'+checkUnderline+'').innerHTML += "<br>___";*/
		document.getElementById('hiddenNote'+checkUnderline+'').style.borderBottom += "4px solid rgba(240,240,240,0.8)";
		/*document.getElementById('hiddenField'+checkUnderline+'').style.borderBottom += "2px solid red";*/

	}
	//////////////////////////////////////sounds set/////////////////////////////////////////
		_C = new Audio("sounds/C.mp3");
		_Cis = new Audio("sounds/Cis.mp3");
		_D = new Audio("sounds/D.mp3");
		_Dis = new Audio("sounds/Dis.mp3");
		_E = new Audio("sounds/E.mp3");
		_F = new Audio("sounds/F.mp3");
		_Fis = new Audio("sounds/Fis.mp3");
		_G = new Audio("sounds/G.mp3");
		_Gis = new Audio("sounds/Gis.mp3");
		_A = new Audio("sounds/A.mp3");
		_Bb = new Audio("sounds/Bb.mp3");
		_B = new Audio("sounds/B.mp3");
		_C1 = new Audio("sounds/C1.mp3");
		_Cis1 = new Audio("sounds/Cis1.mp3");
		_D1 = new Audio("sounds/D1.mp3");
		_Dis1 = new Audio("sounds/Dis1.mp3");
		_E1 = new Audio("sounds/E1.mp3");
		_F1 = new Audio("sounds/F1.mp3");
		_Fis1 = new Audio("sounds/Fis1.mp3");
		_G1 = new Audio("sounds/G1.mp3");
		_Gis1 = new Audio("sounds/Gis1.mp3");
		_A1 = new Audio("sounds/A1.mp3");
		_Bb1 = new Audio("sounds/Bb1.mp3");
		_B1 = new Audio("sounds/B1.mp3");
		_C2 = new Audio("sounds/C2.mp3");
		
		
		var luckyNumbers = [];
		var randomMelody = [];
		var melodyLength = "";
		var randomNote = "";
		var noteNr = "";
		var j = 0; 	
		var j_play = 0;
		var userMelody = [];
		var answer = [];
		var x = 0;
		
		
		
		//////////////////////////////////////////RESETS////////////////////////////////////////////
		function reset()
		{
			luckyNumbers = [];
			randomMelody = [];
			answer = [];
			x = 0;
			pkt = 0;
			userMelody = [];
			j = 0;
			j_play = 0;
		}
		
		function scaleFieldColorsReset()
		{
			for(i=0; i<12; i++)
			{
				document.getElementById('scaleButton'+i+'').className = "";
				document.getElementById('scaleButton'+i+'').className = "button";
			}	
		}
	
		function modeFieldColorsReset()
		{
			for(i=0; i<7; i++)
			{
				document.getElementById('modeButton'+i+'').className = "";
				document.getElementById('modeButton'+i+'').className = "button";
			}	
		}
		
		function startNoteFieldColorsReset()
		{
			for(i=0; i<25; i++)
			{
				
				document.getElementById('startNoteButton'+i+'').className = "";
				document.getElementById('startNoteButton'+i+'').className = "buttonSmall";
			}
			document.getElementById('startNoteButton24').className = "buttonWideSmall";
		}
		
		function quantityFieldColorsReset()
		{
			for(i=0; i<12; i++)
			{
				
				document.getElementById('quantityButton'+i+'').className = "";
				document.getElementById('quantityButton'+i+'').className = "button";
			}
			document.getElementById('quantityButton11').className = "buttonWide";
		}
		
		function RandomScaleModeFieldReset()
		{
			for(i=0; i<2; i++)
			{
				document.getElementById('randomScaleModeButton'+i+'').className = "buttonWideRandom";
			}
		}
		function armagedon()
		{
			document.getElementById("scaleField").innerHTML = '';
			document.getElementById("randomField").innerHTML = '';
			document.getElementById("modeField").innerHTML = '';
			document.getElementById("startNoteField").innerHTML = ''; 
			document.getElementById("quantityField").innerHTML = ''; 
			document.getElementById("scaleKeyboard").innerHTML = '';
			document.getElementById("hiddenFieldContainer").innerHTML = '';
			reset();
			checkReset(); 
			buildScaleField(); 
			buildModeField(); 
			buildRandomScaleModeField(); 
			buildStartNoteField(); 
			buildQuantityField(); 
			buildFreePlayKeyboard();
			scaleTemp = '';
			scale = '';
			mode = '';
			randomScaleMode = ''
			startNote = '';
			qty = '';
			scaleToggle = 0;
			modeToggle = 0;
			randomScaleModeToggle = 0;	
			startNoteToggle = 0;
			qtyToggle = 0;
			startNoteCustomField = 0;
			startNoteCustomScale = 0;
			
			checkUnderline = 0;
			coverFieldCheck(); 

		}
		
	/////////////////////////////////////////////MELODY PLAY/////////////////////////////////////////////
		function freePlay(dzwiek)
		{	console.log("dzwiek "+dzwiek);
			
			
			if(dzwiek == 0) _C.play();
			if(dzwiek == 1) _Cis.play();
			if(dzwiek == 2) _D.play();
			if(dzwiek == 3) _Dis.play();
			if(dzwiek == 4) _E.play();
			if(dzwiek == 5) _F.play();
			if(dzwiek == 6) _Fis.play();
			if(dzwiek == 7) _G.play();
			if(dzwiek == 8) _Gis.play();
			if(dzwiek == 9) _A.play();
			if(dzwiek == 10) _Bb.play();
			if(dzwiek == 11) _B.play();
			if(dzwiek == 12) _C1.play();
			if(dzwiek == 13) _Cis1.play();
			if(dzwiek == 14) _D1.play();
			if(dzwiek == 15) _Dis1.play();
			if(dzwiek == 16) _E1.play();
			if(dzwiek == 17) _F1.play();
			if(dzwiek == 18) _Fis1.play();
			if(dzwiek == 19) _G1.play();
			if(dzwiek == 20) _Gis1.play();
			if(dzwiek == 21) _A1.play();
			if(dzwiek == 22) _Bb1.play();
			if(dzwiek == 23) _B1.play();
			if(dzwiek == 24) _C2.play();
		}
		
		
		function graj()	
		{
			if(luckyNumbers[j_play]=="0")
				 { _C.play();}
			else if(luckyNumbers[j_play]=="1")
				 { _Cis.play();}
			else if(luckyNumbers[j_play]=="2")
				 { _D.play();}
			else if(luckyNumbers[j_play]=="3")
				 { _Dis.play();}
			else if(luckyNumbers[j_play]=="4")
				 { _E.play();}
			else if(luckyNumbers[j_play]=="5")
				 { _F.play();}
			else if(luckyNumbers[j_play]=="6")
				 { _Fis.play();}
			else if(luckyNumbers[j_play]=="7")
				 { _G.play();}
			else if(luckyNumbers[j_play]=="8")
				 { _Gis.play();}
			else if(luckyNumbers[j_play]=="9")
				 { _A.play();}
			else if(luckyNumbers[j_play]=="10")
				 { _Bb.play();}
			else if(luckyNumbers[j_play]=="11")
				 { _B.play();}
			else if(luckyNumbers[j_play]=="12")
				 { _C1.play();}
			else if(luckyNumbers[j_play]=="13")
				 { _Cis1.play();}
			else if(luckyNumbers[j_play]=="14")
				 { _D1.play();}
			else if(luckyNumbers[j_play]=="15")
				 { _Dis1.play();}
			else if(luckyNumbers[j_play]=="16")
				 { _E1.play();}
			else if(luckyNumbers[j_play]=="17")
				 { _F1.play();}
			else if(luckyNumbers[j_play]=="18")
				 { _Fis1.play();}
			else if(luckyNumbers[j_play]=="19")
				 { _G1.play();}
			else if(luckyNumbers[j_play]=="20")
				 { _Gis1.play();}
			else if(luckyNumbers[j_play]=="21")
				 { _A1.play();}
			else if(luckyNumbers[j_play]=="22")
				 { _Bb1.play();}
			else if(luckyNumbers[j_play]=="23")
				 { _B1.play();}
			else if(luckyNumbers[j_play]=="24")
				 { _C2.play();}
		
			console.log("randomMelody[j_play] - granie dźwięków wylosowanych "+randomMelody[j_play]);
			
			if(j_play<melodyLength-1) {
				j_play++;
				setTimeout(graj, 2200);
			}
		}
		
		function repeat()
		{
			j_play = 0;
			graj();
		}
		
		/////////////////////////////////////////////CHECKING/////////////////////////////////////////////
		
			var pkt = 0;
			var fail = 0;
			var chance = 3;
			var accuracy = 0;
			var x = 0; 
			var checkUnderline = 0;
			var pktTotal;
		
		function checkReset()
		{
			pkt = 0;
			pktTotal = 0;
			fail = 0;
			chance = 3;
			accuracy = 0;
			x = 0;
			checkUnderline = 0;
			
		}
		
		function sprawdz(dzwiek)
		{	luckyNumbers[x];
			console.log("dzwiek "+dzwiek);
			
			if(dzwiek == 0) _C.play();
			if(dzwiek == 1) _Cis.play();
			if(dzwiek == 2) _D.play();
			if(dzwiek == 3) _Dis.play();
			if(dzwiek == 4) _E.play();
			if(dzwiek == 5) _F.play();
			if(dzwiek == 6) _Fis.play();
			if(dzwiek == 7) _G.play();
			if(dzwiek == 8) _Gis.play();
			if(dzwiek == 9) _A.play();
			if(dzwiek == 10) _Bb.play();
			if(dzwiek == 11) _B.play();
			if(dzwiek == 12) _C1.play();
			if(dzwiek == 13) _Cis1.play();
			if(dzwiek == 14) _D1.play();
			if(dzwiek == 15) _Dis1.play();
			if(dzwiek == 16) _E1.play();
			if(dzwiek == 17) _F1.play();
			if(dzwiek == 18) _Fis1.play();
			if(dzwiek == 19) _G1.play();
			if(dzwiek == 20) _Gis1.play();
			if(dzwiek == 21) _A1.play();
			if(dzwiek == 22) _Bb1.play();
			if(dzwiek == 23) _B1.play();
			if(dzwiek == 24) _C2.play();

			if(dzwiek == luckyNumbers[x]) 
			{
				console.log("good"); pkt++; 
				pktTotal += pkt;
				document.getElementById('hiddenNote'+checkUnderline+'').innerHTML = randomMelody[''+checkUnderline+''];
				document.getElementById('hiddenNote'+checkUnderline+'').className = "rightNote";
			}
			else 
			{
				console.log("suck"); fail++;
			}
			x++;

///////////////ZAZNACZANIE AKTYWNEGO SPRAWDZANEGO DŹWIĘKU//////////////////

			/*document.getElementById('hiddenNoteUnderline'+checkUnderline+'').innerHTML = "";*/
			document.getElementById('hiddenNote'+checkUnderline+'').style.borderBottom = "4px solid transparent";

			if(checkUnderline<melodyLength-1) //jesli check underline jest mniejszy od długości melodii to jedziemy z pętlą
			{
				checkUnderline++;
				/*document.getElementById('hiddenNoteUnderline'+checkUnderline+'').innerHTML += "<br>___";*/
				document.getElementById('hiddenNote'+checkUnderline+'').style.borderBottom = "4px solid rgba(240,240,240,0.8)";

				console.log("checkUnderline " +checkUnderline);
			}	
			
			else //koniec pętli, dodajemy podkleslenie do pierwszego hiddenNota, bo jedziemy od początku
			{	
				checkUnderline = 0;
				/*document.getElementById('hiddenNoteUnderline'+checkUnderline+'').innerHTML += "<br>___";*/
				document.getElementById('hiddenNote'+checkUnderline+'').style.borderBottom = "4px solid rgba(240,240,240,0.8)";
				console.log("checkUnderline " +checkUnderline);
			}

///////////////VICTORY i FAIL oraz FINAL FAIL//////////////////

			if(x == luckyNumbers.length && pkt == luckyNumbers.length) 
			{
				accuracy = Math.floor((pktTotal/(pktTotal+fail)) * 100);
				document.getElementById("endAlert").style.display = "initial";
				document.getElementById("endAlertContenth2").innerHTML = "VICTORY!";
				document.getElementById("endAlertVictoryh3").innerHTML = "Accuracy: "+accuracy+"%";
				document.getElementById("endAlertContenth3").innerHTML = "";
				document.getElementById("endAlertVictoryh4").innerHTML = "New game";
				console.log("VICTORY");	
				
			}
			else if (x == luckyNumbers.length && pkt < x) { 
				chance -= 1;
				if(chance == 0) 
				{
					document.getElementById("endAlert").style.display = "initial";			
					document.getElementById("endAlertContenth2").innerHTML = "FINAL FAIL!";
					document.getElementById("endAlertContenth3").innerHTML = "New game!";
					
				}
				else
				{
					document.getElementById("failAlert").style.display = "initial";
					document.getElementById("failAlertContenth2").innerHTML = "FAIL!";
					if(chance == 2) document.getElementById("failAlertContenth3").innerHTML = chance+" chances left, go on!";
					else if(chance == 1) document.getElementById("failAlertContenth3").innerHTML = chance+" chance left, go on!";
					x = 0;
					pkt = 0;
					
					console.log("CHUJA") 
				}
			}
			
		}
		
		function hide(object)
		{
			document.getElementById(object).style.display = "none";
		}
		
	