document.addEventListener('init', function(event) {
	var page = event.target;
	console.log('init page: ' + page.id);
	if (page.id == "splash") {
		setTimeout(function(){ fn.load('login.html');}, 2000);
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

document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");
 
  // Initialize the map view
  var map = plugin.google.maps.Map.getMap(div);
 
}, false);