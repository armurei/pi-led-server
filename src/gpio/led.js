const Gpio = require('onoff').Gpio
const led = new Gpio(18, 'out')

exports.setLed = value => {
  led.writeSync(value)
}
