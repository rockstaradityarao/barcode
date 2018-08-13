function startScan(p) {
	var product = document.getElementById('scanProduct');
	var device = document.getElementById('scanDevice');
	var options = {
	          saveHistory: true, // Android, save scan history (default false)
	          prompt : "Please scan a DEVICE or PRODUCT", // Android
	          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
	          //formats : "QR_CODE, DATA_MATRIX", 
			  // default: all but PDF_417 and RSS_EXPANDED
	          disableAnimations : true, // iOS
	          disableSuccessBeep: false // iOS and Android
     };
	
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			device.innerHTML = result.text;
	
			cordova.plugins.barcodeScanner.scan(
					function (result) {
						product.innerHTML =  result.text;
					}, 
					function (error) {
						product.innerHTML = "Scanning failed: " + error;
					},
					options
			);
		}, 
		function (error) {
			device.innerHTML = "Scanning failed: " + error;
		},
		options
	);
};
