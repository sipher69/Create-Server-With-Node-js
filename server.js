
const http = require('http'); //built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

const port = 3000; //I chosed the port 3000 and  gived  the port the const port


//createServer() method to create an HTTP server:
const server = http.createServer(function (req, res) {


})
server.listen(port, function (error) {
    if (error) {
        console.log('Somthing went wrong', error);

    } else {
        console.log('Server is listening on port' + port);

    }

})