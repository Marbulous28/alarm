var alarmFace = require('./../js/alarm-interface.js');


var timeDisplay = function(){
  $('#timeDisplay').text(moment().format('H:mm'));
  var td = setTimeout(timeDisplay, 1000);
}

exports.timeDisplay = timeDisplay;
