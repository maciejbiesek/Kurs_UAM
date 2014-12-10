UAM.FooterView = function (view) {
	UAM.EventEmitter.call(this);
	var total = document.getElementById("total");
	var active = document.getElementById("active");

	this.update = function (number) {
		total.innerHTML = number;
	} 
	this.activeUpdate = function (number) {
		active.innerHTML = number;
	}
}

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);
