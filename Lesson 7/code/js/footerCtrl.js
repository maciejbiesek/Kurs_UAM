FooterCtrl = function (view, store) {
	store.on("elementAdded", function () {
		view.update(store.data.length);
	});

	store.on("activeElements", function (number) {
		view.activeUpdate(number);
	});
		
	
}
	
