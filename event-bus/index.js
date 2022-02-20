const express = require('express') 
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/events', (req, res) => {
  const event = req.body

  await axios.post('http://localhost:4000/events', event)
  await axios.post('http://localhost:4001/events', event)
  await axios.post('http://localhost:4002/events', event)

  res.send({ status: 'ok' })
})

app.listen(4005, () => {
  console.log('listening on 4005')
})