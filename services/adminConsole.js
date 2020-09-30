const express = require('express');
const adminRouter = express.Router();
const apiAdapter = require('../routers/apiAdapter');
const dotenv = require('dotenv');
dotenv.config();

const BASE_URL = process.env.ADMIN_CMS_URL
const api = apiAdapter(BASE_URL)

///////////////////////////////
////USERS
///////////////////////////////


//INDEX
adminRouter.get('/admin/users', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//LOG-IN
adminRouter.post('/admin/users/login', (req, res) => {
    api.get(req.path).then(resp => {
       res.send(resp.data)
   })
})

//SHOW
adminRouter.get('/admin/users/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//CREATE
adminRouter.post('/admin/users', (req, res) => {
   api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//UPDATE
adminRouter.put('/admin/users/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//DELETE
adminRouter.delete('/admin/users/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

///////////////////////////////
////POSTS
///////////////////////////////

//INDEX
adminRouter.get('/admin/posts', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})


//SHOW
adminRouter.get('/admin/posts/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//CREATE
adminRouter.post('/admin/posts', (req, res) => {
   api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//UPDATE
adminRouter.put('/admin/posts/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

//DELETE
adminRouter.delete('/admin/posts/:id', (req, res) => {
     api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

module.exports = adminRouter