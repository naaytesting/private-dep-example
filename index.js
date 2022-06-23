const https = require('https');
const isok = require ('naaytesting/isok');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`Is HTTP response status a 200 OK? ${isok.check(res)}`);
});

req.on('error', error => {
  console.error(error);
});

req.end();
