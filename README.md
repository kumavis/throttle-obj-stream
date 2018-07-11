# throttle-obj-stream

an object stream that uses [lodash.throttle](https://lodash.com/docs/4.17.10#throttle) to reduce the number of events passing through the stream.

### example

reduces the number of messages sent from some `noisyStream` to `stdout` down to max 1/sec.

```js
const throttleStream = require('throttle-obj-stream')
const pump = require('pump')

pump(
  noisyStream,
  throttleStream(1000),
  process.stdout,
  (err) => console.log('pipeline ended', err)
)
```
