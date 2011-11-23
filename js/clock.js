var deg = 0;
function startClock()
{
	// get time from machine
	var NOW = new Date();
	var h = NOW.getHours();
	var m = NOW.getMinutes();
	var s = NOW.getSeconds();
	// update seconds
	update_sec(s);
	if (s == 0){
		// update position of minute arrow while the second arrow hits "12"
		update_min(m);
	}
	if (m == 0){
		// update position of hour arrow while the minite arrow hits "12"
		update_hour(h);
	}
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
	
}

function update_min(min){
	calculate_degree(min);
}

function update_hour(hr){
	calculate_degree(hr);
}

function tick(deg, elmt){
	// 
	document.getElementById(elmt).style = "";
}
startClock();