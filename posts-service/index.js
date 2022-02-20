const express = require('express') 
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios').default

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body
  posts[id] = {
    id, title
  }

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: {
      id, title
    }
  })

  res.status(200).send({
    postId: posts[id],
    post: posts
  })
})

app.post('/events', async (req, res) => {
  console.log('received event', req.body.type)

  res.send({})
})

app.listen(4000, () => {
  console.log('listening on: http://localhost:4000')
})

