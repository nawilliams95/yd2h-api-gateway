var express = require('express');
var userRouter = express.Router()

//INDEX
userRouter.get('/users', (req, res) => {
  res.send(req.path + " called")
})

//SHOW
userRouter.get('/users/:id', (req, res) => {
  res.send(req.path + " called")
})

//CREATE
userRouter.post('/users', (req, res) => {
  res.send(req.path + " called")
})

//LOG-IN
userRouter.post('/users/login', (req, res) => {
    res.send(req.path + " called")
})

//UPDATE
userRouter.put('/users/:id', (req, res) => {
    res.send(req.path + " called")
})

//DELETE
userRouter.delete('/users/:id', (req, res) => {
    res.send(req.path + " called")
  })
module.exports = userRouter