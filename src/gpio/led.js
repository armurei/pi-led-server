const Gpio = require('pigpio').Gpio

const leds = {
  'r': new Gpio(17, { mode: Gpio.OUTPUT }),
  'g': new Gpio(22, { mode: Gpio.OUTPUT }),
  'b': new Gpio(24, { mode: Gpio.OUTPUT })
}

const setLed = (color, value) => {
  const led = leds[color]
  led.pwmWrite(value)
}

const makeColor = targetColor => {
  Object.keys(leds).forEach(color => {
    const value = color === targetColor ? 255 : 0
    setLed(color, value)
  })
}

const setRgb = value => {
  Object.keys(leds).forEach(color => setLed(color, value[color]))
}

exports = { setLed, makeColor }
