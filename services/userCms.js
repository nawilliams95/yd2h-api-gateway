const express = require('express');
const userCmsRouter = express.Router();
const apiAdapter = require('../routers/apiAdapter');
const dotenv = require('dotenv');
dotenv.config();

const BASE_URL = process.env.USER_CMS_URL
const api = apiAdapter(BASE_URL)

//INDEX
userCmsRouter.get('/posts', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//PUBLIC POSTS INDEX
userCmsRouter.get('/posts/public', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//POSTS BY USER ID
userCmsRouter.get('/posts/by/:user_id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//SHOW
userCmsRouter.get('/posts/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//CREATE
userCmsRouter.post('/posts', (req, res) => {
   api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//UPDATE
userCmsRouter.put('/posts/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//DELETE
userCmsRouter.delete('/posts/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
  })
module.exports = userCmsRouter