const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})


app.listen(process.env.PORT || 3000, () => {
    console.log(' Big Brother is listening.....');
});