var express = require('express');

var app = express();

app.get('*', (req, res) => {
    res.send(`hello world`)
})

app.listen(9000, () => {
    console.log('start success.');
}).on('error', (e) => {
    console.error(e.code, e.message)
})