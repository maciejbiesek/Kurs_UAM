window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));

	new InputCtrl(inputView, store);
	new ListCtrl(listView, store);
	new FooterCtrl(footerView, store);

	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		console.log("here");
		if (httpRequest.readyState !== 4) {
			return;
		}
		if (httpRequest.status !== 200) {
			throw new Error('Request failed');
		}
		var data = JSON.parse(httpRequest.responseText);
		// console.log(data);
		data.forEach(function(element) {
			store.add(element.value);
		});
	}
	httpRequest.open('GET', '/api/todos');
	httpRequest.send();

	
});
