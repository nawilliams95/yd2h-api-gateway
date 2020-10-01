const express = require('express');
const taggingRouter = express.Router();
const apiAdapter = require('../routers/apiAdapter');
const dotenv = require('dotenv');
dotenv.config();

const BASE_URL = process.env.TAGGING_URL
const api = apiAdapter(BASE_URL)

//INDEX
taggingRouter.get('/tags', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//NAME INDEX
taggingRouter.get('/tags/:name', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//SHOW
taggingRouter.get('/tags/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//CREATE
taggingRouter.post('/tags', (req, res) => {
   api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//UPDATE
taggingRouter.put('/tags/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//DELETE
taggingRouter.delete('/tags/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
  })
module.exports = taggingRouter