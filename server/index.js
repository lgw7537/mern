const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require('cors')
app.use(cors())
app.use(express.json())

//mongoose.connect('mongodb://localhost:27017/mern')
mongoose.connect(
  'mongodb+srv://wiasuk:dlrjsdn!23@cluster0.gfq2cnm.mongodb.net/mern?retryWrites=true&w=majority'
)
app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.post('/createUser', async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user)
  await newUser.save()

  res.json(user)
})

app.get('/', (req, res) => {
  res.send('<h1>서비스 준비중입니다...기다리세요</h1>')
})

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!', user: 'me' })
})

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('/doc', (req, res) => {
  res.json({ message: 'Document ready', user: 'author' })
})

app.listen(3001, () => {
  console.log('SERVER RUNS PERFECTLY!')
})
