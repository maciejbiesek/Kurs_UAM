(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
		this.count = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
		if (Object.getOwnPropertyNames(this.count).length === 0) {
            this.count[0] = '0';
        }

        this.listeners[this.count[0]] = new Array(eventName, listener, context);
        this.count['0']++;

        return (function(a, b) {
            return function () {
                EE.prototype.remove(a, b);
            }
        })(this.count['0']-1,this);

	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
        var values = Array.prototype.slice.call(arguments);

        var values = values.splice(1, values.length - 1);
        for (key in this.listeners) {
            var eventNamecheck = this.listeners[key][0];
            var listener = this.listeners[key][1];
            var context = this.listeners[key][2];
			
            if (eventNamecheck === eventName) {
                listener.apply(context, values)
            }
        }
	};

	EE.prototype.remove = function () {
        context = arguments[1];
        delete context.listeners[arguments[0]];

    };
	

	global.UAM.EventEmitter = EE;

}(window));
