var deg, h, m, s; // make these variables global

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
	document.getElementById(elmt).setAttribute(
	"style", "transform:rotate(" + deg + "deg);"
     + "-moz-transform: rotate(" + deg + "deg);"
     + "-o-transform: rotate(" + deg + "deg);"
     + "-webkit-transform:rotate(" + deg + "deg);"
     // + "-ms-transform:rotate("+ deg +"deg);"
	 //need to convert it to matrix in order to make it work in IE
	);
}
startClock();