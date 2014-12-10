InputCtrl = function (view, store) {	
	view.on("addToStore", function (input) { 
		if (input != "") {
				store.add(input);
			}
	});	
}