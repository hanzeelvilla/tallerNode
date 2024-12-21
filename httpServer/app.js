const http = require ('node:http');

const app = http.createServer((req, res) => {
    // routes
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify({message: 'Hola soy la API'}))
        res.end();
    };
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});