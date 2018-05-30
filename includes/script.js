var count = 0;
var size = 6;
var output;

var element = document.getElementById("counter");

function counter() {
	count++;
	output = count+"";
	while (output.length < size) output = "0" + output;
	element.innerHTML = output;
}

var intervalCounter = setInterval(counter, 3000);


