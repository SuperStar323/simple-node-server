const express = require('express')
const app = express()
const { server1, server2 } = require("./config")

app.get('/ping', function (req, res) {
  res.send('pong\n')
})

const ping = () => {
  const http = require('http');
  const options = {
    hostname: server2.hostname,
    port: server2.port,
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

app.listen(server1.port, server1.hostname, () => {
  console.log(`Server running at http://${server1.hostname}:${server1.port}/`);
});