const express = require('express')
const app = express()
const port = 3080
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('express-http-proxy');

const proxyConfig = {
  '/': {
   target: 'https://github.com/',
  },
 };
  
 for (let key in proxyConfig) {
  app.use(key, proxy(proxyConfig[key].target));
 }


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

