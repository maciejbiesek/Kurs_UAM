(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		this.listeners = {};
	}

	EE.prototype.on = function (eventName, listener, context) {
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}
		
		var tempArray = {
			listener: listener, 
			context: context
		}

		this.listeners[eventName].push(tempArray);
		var index = this.listeners[eventName].length - 1;
		
		var th = this;
		return function () {
			delete th.listeners[eventName][index];
		}
	}

	EE.prototype.emit = function (eventName) {
		var args = Array.prototype.slice.call(arguments, 1);
		var listeners = this.listeners[eventName];
		
		for (var elem in listeners) {
			listeners[elem].listener.apply(listeners[elem].context, args);
		}
		// console.log("eventEmiter: " + eventName + " emited with args: " + args);
	}

	global.UAM.EventEmitter = EE;

}(window))
