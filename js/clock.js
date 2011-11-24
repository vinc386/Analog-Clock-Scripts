var deg, h, m, s; // make these variable global 

function startClock()
{
	// get time from machine
	var now = new Date();
	h = now.getHours();
	m = now.getMinutes();
	s = now.getSeconds();
	// update all positions every second
	update_hour(h);
	update_min(m);
	update_sec(s);
	// update time every half of a sec
	t = setTimeout('startClock()', 500)
}

function calculate_degree(i){
	deg = 360 / 60 * i;
}

function update_sec(sec){
	// calculate the angle
	calculate_degree(sec);
	// rotate the arrow by the degree that is calculated using the "tick" method
	tick(deg, 'ArrowSec');
}

function update_min(min){
	calculate_degree(min);
	tick(deg, 'ArrowMin');
}

function update_hour(hr){
	if (hr > 12){
		hr -= 12;
	}
	hr *= 5; 
	calculate_degree(hr);
	deg += m/2; // this line fixed the hour hand issue
	tick(deg, 'ArrowHour');
}

function tick(deg, elmt){
	document.getElementById(elmt).setAttribute("style", "transform:rotate(" + deg + "deg);"
										+ "-moz-transform: (" + deg + "deg);"
										+ "-o-transform: (" + deg + "deg);"
										+ "-webkit-transform:rotate(" + deg + "deg);"
										+ "filter:progid:DXImageTransform.Microsoft.BasicImage(" + deg + "deg);"
										); // still have compatibility issue with IE
}
startClock();