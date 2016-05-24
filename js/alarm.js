var timeDisplay = require('./../js/time.js').timeDisplay;

exports.Alarm = function(wakeUp){
  this.wakeUp = wakeUp;
  console.log(this.wakeUp);


  exports.Alarm.prototype.ring = function() {
    setInterval(function() {
      console.log("current time: " + moment().format('H:mm'));
      console.log("alarm time: " + wakeUp);
      if (moment().format('H:mm:ss') === wakeUp + ":00") {
        alert("Wake Up!");
      }
    }, 1000);
  }
}
