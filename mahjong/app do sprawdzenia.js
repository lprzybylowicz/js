/*var value = '';
var flag = false;

function check(val) {

	if (flag == false) {
		flag == true;
		value = val;
		document.getElementByID(values.pick).add.styles = "border: 1px solid red;";
	}
																
	else if (flag == true && val == value) {
            sukces
    }
    else if (flag == true && val != value) {
        
        fail
    }
        
*/


//DO SPRAWDZENIA!


function check(value) {
    console.log(v);
}

    var vals = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l', 'm', 'm', 'n', 'n', 'o', 'o'];
    
function pick() {
        
        
        console.log(v = Math.floor(Math.random() * 30));
        
        if (vals[v] === '0') {
            
            pick();
        }
        
        else if (vals[v] != '0') {
            
            value = vals[v];
            vals[v] = '0';
            console.log('-------');
            console.log(value);
              console.log('-------');
            return value;
        }
        
        
    }

(function test() {
for(x=0; x<30; x++) {
    
    if (x === 3 || x === 7 || x === 11 || x === 15 || x === 18 || x === 21 || x === 24 || x === 26 || x === 28) 
        {
            (document.getElementById("playField").innerHTML += '<div id="field'+x+'" onclick="check('+pick()+')"></div><br>');
        }
    
    else console.log((document.getElementById("playField").innerHTML += '<div id="field'+x+'" onclick="check('+pick()+')"></div>'));
    
    
    if (x<16) document.getElementById("field"+x+"").classList.add('first');
    else if (x>=16 && x<25) document.getElementById("field"+x+"").classList.add('second');
    else if (x>=25 && x<29) document.getElementById("field"+x+"").classList.add('third');
    else if (x=29) document.getElementById("field"+x+"").classList.add('fourth');
    
}    
}());
