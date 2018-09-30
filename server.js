/* eslint-disable no-console */
const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' recieved.');

        
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        let content = route(handle, pathname);
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');

}

module.exports = { start };



