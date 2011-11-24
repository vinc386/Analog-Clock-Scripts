var deg = 0;
function startClock()
{
	// get time from machine
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	// update all positions every second
	update_sec(s);
	update_min(m);
	update_hour(h);
	// if (s == 0){
	// 	// update position of minute arrow while the second arrow hits "12"
	// 	update_min(m);
	// }
	// if (m == 0){
	// 	// update position of hour arrow while the minite arrow hits "12"
	// 	update_hour(h);
	// }
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
	deg += hr/2; // adding this line to make the arrow go gradually from one number to another
	tick(deg, 'ArrowHour');
}

function tick(deg, elmt){
	document.getElementById(elmt).setAttribute("style", "transform:rotate(" + deg + "deg);"
										+ "-moz-transform: (" + deg + "deg);"
										+ "-o-transform: (" + deg + "deg);"
										+ "-webkit-transform:rotate(" + deg + "deg)");
										// add method for IEs
}

startClock();