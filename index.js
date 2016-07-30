
var fs     = require("fs");
var five     = require("johnny-five");
var Particle = require('particle-io');

var board = new five.Board({
	io: new Particle({
		token:    '1b67fbedf478e95d045fa7cf08bd9c78b182ab6b',
		deviceId: '1f001f000347353138383138'
	})
});

board.on("ready", function() {
	console.log('Device ready....');
	// var led = new five.Led("D7");
	var led1 = new five.Led("D1");
	var led2 = new five.Led("D2");
	// led.blink(500);


	this.repl.inject({
	// Allow limited on/off control access to the
	// Led instance from the REPL.
		on1: function() {
			led1.on();
		},
		off1: function() {
			led1.off();
		},
		on2: function() {
			led2.on();
		},
		off2: function() {
			led2.off();
		},
		blink: function() {
			led1.blink(500);
		},
		strobe: function() {
			led1.strobe(100, function() {
				console.log('Strobbing');
			});
		}
	});

});
