var timeDisplay = require('./../js/time.js').timeDisplay;
var alarmFace = require('./../js/alarm-interface.js');
var Alarm = require('./../js/alarm.js').Alarm;

var alarmCheck = function(alarm){
  // debugger;
  alarm.ring();
  console.log(alarm.wakeUp);
}
exports.alarmCheck = alarmCheck;
