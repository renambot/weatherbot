
'use strict';
// Define the objects you will be working with
var five = require ("johnny-five");
var Shield = require("j5-sparkfun-weather-shield")(five);

// Add the following definition for the Particle plugin for Johnny-Five
var Particle = require("particle-io");

var board = new five.Board({
  io: new Particle({
        token:    '1b67fbedf478e95d045fa7cf08bd9c78b182ab6b',
        deviceId: '1f001f000347353138383138'
  })
});

// The board.on() executes the anonymous function when the 
// board reports back that it is initialized and ready.
board.on("ready", function() {
    console.log("Board connected...");

    var light = new five.Light("A1");
    light.on("change", function() {
        console.log('Light', this.level);
    });
    light.within([ 0.0, 0.20 ], function() {
        // This is called when the light's value property falls within 100-200
        console.log('Dark!')
    });
    light.within([ 0.20, 0.90 ], function() {
        // This is called when the light's value property falls within 100-200
        console.log('Bright!')
    });

    // var servo1 = new five.Servo({
    //     pin: 'D1',
    //     startAt: 0
    // });
    // var servo2 = new five.Servo({
    //     pin: 'D2',
    //     startAt: 0
    // });

    // var angle = 0;
    // var step = 10;
    // setInterval(function() {
    //     angle += step;
    //     if (angle > 180 || angle < 0) {
    //         step *= -1;
    //     }
    //     console.log('Angle', angle)
    //     servo1.to(angle);
    //     servo2.to(angle);

    // }, 1000);


});
