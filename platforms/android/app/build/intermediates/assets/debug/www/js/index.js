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
		service.fn.loadMap();
	}
	else if (page.id == "alerts") {
		service.fn.getAlerts(window.fn.loadAlerts);
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

window.fn.loadAlerts = function(alertList) {
	console.log('loadAlerts with list: ' + alertList);
	var alertsElem = document.getElementById('alertlist');
	if (!alertsElem) return;
	for (var i = 0; i < alertList.alerts.length; i++) {
		var alert = alertList.alerts[i];
		var div = document.createElement('ons-list-item');
		div.innerHTML = alert;
		alertsElem.appendChild(div);
	}
};

