var resultDiv;
var device;
var product;

function startScan(p) {
	
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			device = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			
			//resultDiv = p.parentElement.childNodes[7];
			//resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			product = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			
			//resultDiv = p.parentElement.childNodes[7];
			//resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	alert(device);
	alert(product); 

}

