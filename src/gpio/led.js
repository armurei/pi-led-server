const Gpio = require('pigpio').Gpio

const leds = {
  'r': new Gpio(17, { mode: Gpio.OUTPUT }),
  'g': new Gpio(22, { mode: Gpio.OUTPUT }),
  'b': new Gpio(24, { mode: Gpio.OUTPUT })
}

function setLed (color, value) {
  const led = leds[color]
  led.pwmWrite(value)
}

function makeColor (targetColor) {
  Object.keys(leds).forEach(color => {
    const value = color === targetColor ? 255 : 0
    setLed(color, value)
  })
}

function setRgb (value) {
  Object.keys(leds).forEach(color => setLed(color, value[color]))
}

exports = { setLed, makeColor, setRgb }
