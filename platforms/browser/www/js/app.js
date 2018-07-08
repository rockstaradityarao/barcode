

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			var resultDiv = document.getElementById("results");
			resultDiv.innerHTML = s;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}