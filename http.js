const http = require('http')
const host = 'localhost'
const port = '8888'
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
    if(req.method === 'GET') {
        if(req.url === '/api/list') {
            res.end('查询列表接口响应')
        } else {
            res.end('GET请求响应')
        }
    } else if(req.method === 'POST') {
        if(req.url === '/api/register') {
            res.end('注册接口响应')
        } else if(req.url === '/api/login') {
            res.end('登录接口响应')
        } else {
            res.end('POST请求响应')
        }
    }
    console.log(req.method)
    console.log(req.url)
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
})