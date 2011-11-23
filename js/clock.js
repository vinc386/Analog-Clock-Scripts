function startClock()
{
	// get time
	var NOW = new Date();
	var h = NOW.getHours();
	var m = NOW.getMinutes();
	var s = NOW.getSeconds();
	// set time
	update_sec(s);
	if (s == 0){
		update_min(m);
	}
	if (m == 0){
		update_hour(h);
	}
	
	t = setTimeout('startClock()', 1000)
}

function update_sec(sec){
	
}

function update_min(min){
	
}

function update_hour(hr){
	
}

function tick(d, elmt){
	document.getElementById(elmt).style = "";
}

startClock();