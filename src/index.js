const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/',
  (req, res) => {
    res.send('Hello World!')
  }
)

const { setLed } = require('./gpio/led')

app.post('/led',
  express.json(),
  (req, res) => {
    const { value } = req.body
    setLed(value)
    res.json({ message: 'LED state changed' })
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
