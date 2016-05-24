var timeDisplay = require('./../js/time.js').timeDisplay;

var wakeUp;

exports.Alarm = function(wakeUp){
  this.wakeUp = wakeUp;
}

exports.Alarm.prototype.ring = function() {
  setInterval(function() {
    console.log("current time: " + moment().format('H:mm'));
    console.log("alarm time: " + wakeUp);
    if (moment().format('H:mm') === this.wakeUp) {
      alert("Wake Up!");
    }
  }, 1000);
}
