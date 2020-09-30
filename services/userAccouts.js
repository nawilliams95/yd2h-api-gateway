var express = require('express');
var userRouter = express.Router();
const apiAdapter = require('../routers/apiAdapter');
const dotenv = require('dotenv');
dotenv.config();

const BASE_URL = process.env.USER_ACCOUNTS_URL
const api = apiAdapter(BASE_URL)

//INDEX
userRouter.get('/users', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//SHOW
userRouter.get('/users/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//CREATE
userRouter.post('/users', (req, res) => {
   api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//LOG-IN
userRouter.post('/users/login', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//UPDATE
userRouter.put('/users/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//DELETE
userRouter.delete('/users/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
  })
module.exports = userRouter