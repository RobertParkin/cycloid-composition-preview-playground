// shop api: answers /health
const http = require('node:http')
http.createServer((req, res) => res.end(JSON.stringify({ ok: true, version: '1.0.0' }))).listen(process.env.PORT || 8080)
