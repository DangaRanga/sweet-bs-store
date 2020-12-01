const http = require('http');
const hostname = 'sweetbs.herokuapp.com';
const port = process.env.PORT || 3000;
const server = require('./route.js'); // imports the routing file
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});