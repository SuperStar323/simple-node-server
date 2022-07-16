const hostname = '127.0.0.1';
const port = 5000;

const express = require('express')
const app = express()

app.get('/ping', function (req, res) {
  res.send('pong\n')
})

const ping = () => {
  const http = require('http');
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/ping',
    method: 'GET',
  };

  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
      process.stdout.write(d);
    });
  });
  req.on('error', error => {
    console.error(error);
  });
  req.end();
}

setInterval(() => {
  ping();
}, 5000);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});