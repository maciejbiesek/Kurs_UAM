UAM.ListView = function (view) {
	UAM.EventEmitter.call(this);
	var that = this;
	this.changeState = function () {
		if (this.className === "active"){
			this.className = "inActive";
		}
		else this.className = "active";
		that.emit("elementChanged", this.innerHTML);
	}

	this.addElementToView = function (data) {
		var list = document.getElementById("list");
		var li = document.createElement("li");
		li.setAttribute("id", "elem");
		li.setAttribute("class", "inActive");
		li.innerHTML = data;
		li.addEventListener("click", this.changeState);
		list.appendChild(li);
	}
}

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);