ListCtrl = function (view, store) {
	view.on("elementChanged", function (data) {
		store.update(data);
	});

	store.on("addToView", function (data) {
		view.addElementToView(data);
	});
		
}
	
