const express = require('express')
const app = express()
const port = 3080
const proxy = require('express-http-proxy');

const proxyConfig = {
  '/': {
   target: 'https://www.google.com',
  },
 };
  
 for (let key in proxyConfig) {
  app.use(key, proxy(proxyConfig[key].target));
 }


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

