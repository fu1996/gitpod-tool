const express = require('express')
const app = express()
const port = 3084
const { curly } = require('node-libcurl');
const proxy = require('express-http-proxy');

const proxyConfig = {
  '/': {
   target: 'https://www.tiktok.com',
  },
 };
  
 app.get('/', async function(req, res, next) {
  const { statusCode, data, headers } = await curly(proxyConfig['/'].target);
  res.end(data);
  console.log('123');

 })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

