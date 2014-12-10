UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.active = 0;
	this.count = 0;

	this.findByName = function (data) {
		for (var i = 0; i < this.data.length; i++) {
	    	if (this.data[i].name === data) {
	      		return i;
	    	}
  		}
	}

	this.send = function () {
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function () {
			if (httpRequest.readyState !== 4 ) {
				return;
			}
			if (httpRequest.status !== 200) {
				alert("Oooops, something went wrong!");
				throw new Error('Request failed');
			}
		};
		httpRequest.open('POST', '/api/todos');
		httpRequest.responseType = "json";
		httpRequest.setRequestHeader('Content-Type', 'application/json');
		httpRequest.send(JSON.stringify(this.data));
		console.log("sent");
		//console.log(this.data);


	}
}

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.update = function (data) {
	data = data || 0;
	var that = this;
	if (data) {
		var index = this.findByName(data);
		//console.log(this.data[index].state)
		if (this.data[index].state) {
			this.data[index].state = 0;
			this.active--;
		}
		else {
			this.data[index].state = 1;
			this.active++;
		}
		this.send();
	}
	else {
		this.data.forEach(function (elem) {
			if (elem.state) {
				that.active++;
			}
		});
	}
	this.emit("activeElements", this.active);
}

UAM.Store.prototype.add = function (data, state) {
	state = state || 0;
	var flag = 1;
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i].name === data) {
			flag = 0;
			break;
		}
	}
	if (flag) {
		this.data.push({ id: this.count, name: data, state: state });
		this.send();
		this.count++;

		this.emit("addToView", data, state);
		this.emit("elementAdded", data);
	}
	else alert("This task is already on list!");
	//console.log(this.data);

	
}