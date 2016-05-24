exports.Alarm = function(wakeUp){
  // this.time = moment.format('LTS');
  this.wakeUp = wakeUp;
}

exports.Alarm.prototype.ring = function() {
  if (this.time === this.wakeUp) {
    console.log("wake up");
  }
}
