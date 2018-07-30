document.addEventListener('init', function(event) {
	var page = event.target;
	console.log('init page: ' + page.id);
	if (page.id == "splash") {
		setTimeout(function(){ fn.load('login.html');}, 2000);
	}
});

document.addEventListener('show', function(event) {
	var page = event.target;
	console.log('show page: ' + page.id);
	if (page.id == "dashboard") {
		createMap();
	}
});

window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
	
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

var login = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    fn.load('associate.html');
  } else {
    ons.notification.alert('Incorrect username or password.');
  }
};

function createMap() {
	var div = document.getElementById("map_canvas");
	if (typeof plugin != "undefined") {
		var map = plugin.google.maps.Map.getMap(div, {
		  'mapType': plugin.google.maps.MapTypeId.ROADMAP,
		  'camera' : {
			target: {
			  lat: 37.317646, 
			  lng: -122.000404
			},
			zoom: 10
		  },
		});
		map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
	}
	else {
		var mapOptions = {
			center: {lat: 37.317646, lng: -122.000404},
			zoom: 8
		};
		map = new google.maps.Map(div, mapOptions);
		google.maps.event.addListener(map,'tilesloaded', onMapReady);
	}
}