var deg, h, m, s; 
// var a, b, c, d;

function startClock()
{
	// get time from machine
	var now = new Date();
	h = now.getHours();
	m = now.getMinutes();
	s = now.getSeconds();
	// update all positions every time this method is called
	update_sec(s);
	update_min(m);
	update_hour(h);
	// update time every half of a sec
	t = setTimeout('startClock()', 500)
}

function calculate_degree(i){
	deg = 360 / 60 * i;
	// the rest is for IE 8 and earlier, but has problems with IE 9
	// var deg2rad = Math.PI*2/360;
	// var rad = deg * deg2rad;
	// var cosRad = Math.cos(rad);
	// var sinRad = Math.sin(rad);
	// // calculate the matrix for IE's rotation
	// a = parseFloat(cosRad).toFixed(8);
	// b = parseFloat(-sinRad).toFixed(8);
	// c = parseFloat(sinRad).toFixed(8);
	// d = parseFloat(cosRad).toFixed(8);
}

function update_sec(sec){
	// calculate the degree
	calculate_degree(sec);
	// rotate the hand by the calculated degree
	tick(deg, 'ArrowSec');
}

function update_min(min){
	calculate_degree(min);
	tick(deg, 'ArrowMin');
}

function update_hour(hr){
	if (hr > 12){
		hr -= 12;
	}// to make the format right before passing the number for calculation
	calculate_degree(hr*5);
	deg += m/2; // this line fixed the hour hand issue
	tick(deg, 'ArrowHour');
}

function tick(deg, elmt){
	// write css
	document.getElementById(elmt).setAttribute(
	"style", "transform:rotate(" + deg + "deg);"
     + "-moz-transform: rotate(" + deg + "deg);" //  firefox
     + "-o-transform: rotate(" + deg + "deg);" // opera
     + "-webkit-transform:rotate(" + deg + "deg);" // chrome and safari
	 + "-ms-transform: rotate("+ deg +"deg);" // Works IE 9!! 
  // + "filter: progid:DXImageTransform.Microsoft.Matrix("+ 
		// "M11="+ a +", M12="+ b +",M21="+ c +", M22="+ d +", sizingMethod='auto expand');" //for IE 6-8
	);
}
startClock();