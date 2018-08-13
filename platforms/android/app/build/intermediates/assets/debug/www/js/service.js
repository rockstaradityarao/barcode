var serverURL = "http://35.165.145.50:8080";
//serverURL = "http://dd224aa2.ngrok.io";
var token = 0;	

var service = {};
service.fn = {};

service.fn.login = function() {
	var username = document.getElementById('username').value.trim();
	var password = document.getElementById('password').value.trim();
	var url = serverURL +  "/login";
	var request =  {"userid":username, "password":password}; 
	console.log("url = " + url + " data = " + request);
	$.ajax({
	    url: url,
	    type: 'post',
	    crossDomain: true,
	    datatype: 'application/json',
	    headers: {
	        'Access-Control-Allow-Origin': '*'
	    },	    
	    data: request,
	    error: handleFailure,
	    success: handleSuccess,
	});
	function handleFailure(xhr, status, error){
		console.log("failure - status = " + JSON.stringify(status) + " error = " + JSON.stringify(error));
	    ons.notification.alert('Error: ' + status);
	}
	function handleSuccess(result, status, xhr){
		console.log("result = " + JSON.stringify(result));
		token = result.token;
		if (token > 0) {
		    fn.load('dashboard.html');
		}
		else {
		    ons.notification.alert('Incorrect username or password.');
		}
	}
};

service.fn.loadMap = function() {
	var url = serverURL +  "/map";
	var request =  {}; 
	var mapData = {};
	console.log("url = " + url + " data = " + request);
	$.ajax({
	    url: url,
	    type: 'post',
	    crossDomain: true,
	    datatype: 'application/json',
	    headers: {
	    	'Authorization': 'Bearer ' + token,
	        'Access-Control-Allow-Origin': '*'
	    },	    
	    data: request,
	    error: handleFailure,
	    success: handleSuccess,
	});
	function handleFailure(xhr, status, error){
		console.log("failure - status = " + JSON.stringify(status) + " error = " + JSON.stringify(error));
		createMap(mapData);
	}
	function handleSuccess(result, status, xhr){
		console.log("result = " + JSON.stringify(result));
		createMap(result);
	}
};


var map;
var mapData;
function createMap(p) {
	mapData = p;
	var div = document.getElementById("map_canvas");
	if (typeof plugin != "undefined") {
		map = plugin.google.maps.Map.getMap(div, {
		  'mapType': plugin.google.maps.MapTypeId.ROADMAP,
		  'camera' : {
			target: mapData.center,
			zoom: mapData.zoom
		  },
		});
		map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
	}
	else {
		var mapOptions = {
			center: mapData.center,
			zoom: mapData.zoom
		};
		map = new google.maps.Map(div, mapOptions);
		google.maps.event.addListener(map,'tilesloaded', onMapReady);
	}
}

function onMapReady() {
	if (typeof plugin != "undefined") {
		for (var i = 0; i < mapData.devices.length; i++) {
			var device = mapData.devices[i];
			map.addMarker({
			      'position': device.position,
			      'title': device.title
			    }, function(marker) {
			    });		
		}
	}
	else {
		for (var i = 0; i < mapData.devices.length; i++) {
			var device = mapData.devices[i];
			var marker = new google.maps.Marker({
				position: device.position,
				title: device.title
			});
			marker.setMap(map);
		}
	}
}

service.fn.getAlerts = function(callback) {
	var url = serverURL +  "/alerts";
	var request =  {}; 
	var alertList = {};
	console.log("url = " + url + " data = " + request);
	$.ajax({
	    url: url,
	    type: 'post',
	    crossDomain: true,
	    datatype: 'application/json',
	    headers: {
	    	'Authorization': 'Bearer ' + token,
	        'Access-Control-Allow-Origin': '*'
	    },	    
	    data: request,
	    error: handleFailure,
	    success: handleSuccess,
	});
	function handleFailure(xhr, status, error){
		console.log("failure - status = " + JSON.stringify(status) + " error = " + JSON.stringify(error));
		callback(alertList);
	}
	function handleSuccess(result, status, xhr){
		console.log("result = " + JSON.stringify(result));
		callback(result);
	}
};
