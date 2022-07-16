const hostname = '127.0.0.1';
const port = 5000;

const express = require('express')
const app = express()

app.get('/ping', function(req, res) {
    res.send('pong\n')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});