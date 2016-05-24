var Alarm = require('./../js/alarm.js').Alarm;
var timeDisplay = require('./../js/time.js').timeDisplay;
var alarmCheck = require('./../js/alarmCheck.js').alarmCheck;

var alarmSet;

$(document).ready(function(){
  timeDisplay();


  $("#alarmTime").submit(function(event){
    event.preventDefault();
    var alarmSet = $('#set-time').val();
    $('.alarmDisplay').text(alarmSet);
    var newAlarm = new Alarm(alarmSet);
    alarmCheck(newAlarm);
  });



});
