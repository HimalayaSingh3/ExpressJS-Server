const express = require('express')
const path=require('path');
const bodyParser=require('body-parser');
const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req,res) => {
    res.sendFile(path.join (__dirname + "/index.html"));
})

app.post('/api/v1/login', (req, res) => {
  res.send(`
    <h1>Welcome Mr. ${req.body.name}</h1>
    <h2>Your Email is ${req.body.email}</h2>
    <h3>Your Password is ${req.body.password}</h3>
    `)
})
app.listen(port, () => {
  console.log(`Your Server is Running on port ${port}`)
})