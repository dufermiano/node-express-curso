const http = require('http')
const ip = 'localhost'
const port = 3000

http.createServer((req, res) => {
    console.log('Recebendo request')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<html><body>Uma mensagem na tela</body></html>')
}).listen(port, ip)

console.log(`Servidor executando em http://${ip}:${port}`)