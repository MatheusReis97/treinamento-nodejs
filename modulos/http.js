const http = require('http');

const port =  8080; 

const server = http.createServer((req , res) =>{
    if(req.url == '/home'){
        // Determina qual tipo de conteudo está sendo enviado
        res.writeHead(200, {
            "Constent-Type": "text/html"
        })
        // Resposta a ser enviada
        res.end('<h1>PAGINA INICIADA</h1>')
    }
    if(req.url == '/user'){
        const usuarios = [
            {
                usuario: 'Matheus Reis',
                email: 'matheus@hotmail.com'
            },
            {
                usuario: 'Tereco Reis',
                email: 'tereco@hotmail.com',
            },
            {
                usuario: 'Tati R.',
                email: 'tati@hotmail.com'
            },
            {
                usuario: 'Pedroca',
                email: 'pedro@hotmail.com'
            }
        ]

        res.writeHead(200, {"Constent-Type": "application/JSON"});
        res.end(JSON.stringify(usuarios))
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`))