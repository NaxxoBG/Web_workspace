const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var counter = 0;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	res.end('Hello World\n');
	
	
	if (req.url != '/favicon.ico') {
		counter += 1;
		console.log('user ' + counter + ' connected to server');
		
		const exec = require('child_process').exec;
		var yourscript = exec('wget https://studienet.via.dk/Class/IT-DIM1-S18/Session%20Material/dim_about.pdf -P C:\\Users\\Naxxo\\Desktop --password=godzilla1954 --user=239841@via.dk',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
	}
})

server.listen(port, hostname, () => {
	console.log('Server running at http:'+ hostname + ':' + port);
});