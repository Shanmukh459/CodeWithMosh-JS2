function StopWatch() {
  let startTime,
    stopTime,
    running,
    duration = 0

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration
    },
    set: function(value) {
      duration = value
    }
  })

  Object.defineProperty(this, "running", {
    get: function () {
      return running
    },
  })

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime
    },
  })

  Object.defineProperty(this, "stopTime", {
    get: function () {
      return stopTime
    },
  })
}

StopWatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch is already running!")

  this.running = true
  this.startTime = new Date()
}

StopWatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not running!")

  this.running = false
  this.stopTime = new Date()
  const seconds = (stopTime.getTime() - startTime.getTime()) / 1000
  this.duration += seconds
}

StopWatch.prototype.reset = function () {
  this.duration = 0
  this.startTime = null
  this.stopTime = null
  this.running = false
}
