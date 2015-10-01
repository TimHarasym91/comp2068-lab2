var http = require('http');

// require node's url module to parse the url's querystring
var url = require('url');

// create the server to run the page
http.createServer(function (req, res) {

    // get the querystring and parse the subtotal as a float value
    var qs = url.parse(req.url, true).query;
    
	var numx = parseFloat(qs.x);
	var numy = parseFloat(qs.y);
	var selectedMethod = String(qs.method);

	// calculate and determine method
	if(selectedMethod == "add")
	{
		var selectedMethod = "+"
		var total = numx + numy;

	}
	else if(selectedMethod == "subtract")
	{
		var selectedMethod = "-"
		var total = numx - numy;

	}
	else if(selectedMethod == "multiply")
	{
		var selectedMethod = "*"
		var total = numx * numy;

	}
	else if(selectedMethod == "divide")
	{
		var selectedMethod = "/"
		var total = numx / numy;

	}
	else
	{
		res.write('<h3>ERROR!! Please use "add","subtract","multiply", or "divide"!</h3>');
	}
	

	res.write('<h1>Calculator</h1> <h4>Output: ' + numx + ' ' + selectedMethod + ' ' + numy + ' = ' + total + '</h4>');
    res.end();

}).listen(3000);

//example http://localhost:3000/lab2.js?method=add&x=5&y=10