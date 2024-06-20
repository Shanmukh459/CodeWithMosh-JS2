function StopWatch() {
  let startTime, stopTime, running, duration = 0

  this.start = function() {
    if(running) 
      throw new Error("Stop watch is already running!")
    running = true
    startTime = new Date()
  }

  this.stop = function() {
    if(!running)
      throw new Error("StopWatch is not running!")

    running = false
    stopTime = new Date()
    const seconds = (stopTime.getTime() - startTime.getTime())/1000
    duration += seconds
  }

  this.reset = function() {
    running = false
    duration = 0
    startTime = null
    stopTime = null
  }

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration
    }
  })
}