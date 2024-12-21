# How to make an API HTTP Server in Node.js

1. First you need to create an http server

```
const http = require ('node:http');
const server = http.createServer((req, res) => {});
```

As you can see, it has a request (from the **user**) and a response (from the **server**). It also has a callback to excute when needed