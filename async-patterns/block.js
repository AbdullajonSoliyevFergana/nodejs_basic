
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Home Page')
    }else if (req.url === '/about'){
        // BLOKING CODE !!!
        for (let i = 0; i < 500; i++){
            for (let j = 0; j < 500; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }else{
        res.end('Error Page')
    }
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000...')
})