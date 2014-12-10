UAM.InputView = function (view) {
	UAM.EventEmitter.call(this);
	var addButton = document.getElementById("addButton");
	addButton.addEventListener("click", this.addToStore.bind(this));
}

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

UAM.InputView.prototype.addToStore = function () {
	var inputField = document.getElementById("input");
	var input = inputField.value;
	document.getElementById("input").value = "";
	this.emit("addToStore", input);
}