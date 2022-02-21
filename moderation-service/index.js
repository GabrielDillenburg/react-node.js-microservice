const express = require('express') 
const bodyParser = require('body-parser')
const axios = require('axios').default

const app = express()

app.use(bodyParser.json())

app.post('/events', async (req, res) => {
  const { data, type } = req.body

  if (type === 'CommentedCreated') {
    const status = data.content.includes('orange') ? 'rejected': 'approved'

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    })
  }
  
  res.send({})
})

app.listen(4003, () => {
  console.log('listening on http://localhost:4003')
})