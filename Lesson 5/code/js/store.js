UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.active = 0;

	this.findByName = function (data) {
		for (var i = 0; i < this.data.length; i++) {
	    	if (this.data[i].name === data) {
	      		return i;
	    	}
  		}
	}
}

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.update = function (data) {
	var that = this;
	var index = this.findByName(data);
	console.log(this.data[index].state)
	if (this.data[index].state) {
		this.data[index].state = 0;
		this.active--;
	}
	else {
		this.data[index].state = 1;
		this.active++;
	}
	this.emit("activeElements", this.active);

}

UAM.Store.prototype.add = function (data) {
	var flag = 1;
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i].name === data) {
			flag = 0;
			break;
		}
	}
	if (flag) {
		this.data.push({ name: data, state: 0 });
		this.emit("addToView", data);
		this.emit("elementAdded", data);
	}
	else alert("This task is already on list!")
}