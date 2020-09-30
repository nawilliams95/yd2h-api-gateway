const express = require('express');
const app = express();
const router = require('./routers/router');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Simple API Gateway For YD2H")
})

app.use(router)

app.listen(process.env.PORT || 3000, () => {
    console.log(' Big Brother is listening.....');
});