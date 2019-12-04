const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/',
  (req, res) => {
    res.send('Connected to Pi server')
  }
)

// const { setLed, makeColor } = require('./gpio/led')

app.post('/led',
  express.json(),
  (req, res) => {
    const { value } = req.body
    // setLed(value)
    res.json({ message: 'LED state changed' })
  }
)

app.post('/red',
  (req, res) => {
    // makeColor('r')
    res.json({ message: 'LED state changed' })
  }
)

app.post('/green',
  (req, res) => {
    // makeColor('g')
    res.json({ message: 'LED state changed' })
  }
)

app.post('/blue',
  (req, res) => {
    // makeColor('b')
    res.json({ message: 'LED state changed' })
  }
)

app.post('/rgb',
  express.json(),
  (req, res) => {
    const { value } = req.body
    console.log(value)
    // setRgb(value)
    res.json({ message: 'LED state changed' })
  }
)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
