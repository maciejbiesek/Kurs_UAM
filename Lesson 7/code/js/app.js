window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));

	new InputCtrl(inputView, store);
<<<<<<< HEAD
	new ListCtrl(listView, store);
	new FooterCtrl(footerView, store);

	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState !== 4) {
			return;
		}
		if (httpRequest.status !== 200) {
			alert("Oooops, something went wrong!");
			throw new Error('Request failed');
		}
		var data = JSON.parse(httpRequest.responseText);
		data.forEach(function(element) {
			store.add(element.name, element.state);
		});
		store.update();
	}
	httpRequest.open('GET', '/api/todos');
	httpRequest.send();
=======
	new ListCtrl(listView, store, UAM.Http);
	new FooterCtrl(footerView, store);
>>>>>>> parent of f4fa0d4... homework lesson 7
});
