const express = require('express');
const commentsRouter = express.Router();
const apiAdapter = require('../routers/apiAdapter');
const dotenv = require('dotenv');
dotenv.config();

const BASE_URL = process.env.COMMENTS_URL
const api = apiAdapter(BASE_URL)

//INDEX
commentsRouter.get('/comments', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})


//SHOW
commentsRouter.get('/comments/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//CREATE
commentsRouter.post('/comments', (req, res) => {
   api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//UPDATE
commentsRouter.put('/comments/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//DELETE
commentsRouter.delete('/comments/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
  })
module.exports = commentsRouter