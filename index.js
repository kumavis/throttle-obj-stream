const through = require('through2').obj
const throttle = require('lodash.throttle')

module.exports = createThrottleObjStream

function createThrottleObjStream(wait = 0, opts = {}) {
  const throttledSubmitChunk = throttle(submitChunk, wait, opts)

  return through(function (chunk, _, cb) {
    throttledSubmitChunk.call(this, chunk)
    cb()
  })

  function submitChunk(chunk) {
    this.push(chunk)
  }
}
