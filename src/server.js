const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos na minha aplicação
//pagina inicial
//Req-> requisição
//Res-> resposta
//__dirname->devolve o nome do diretorio que eu estou
server.get("/", (req, res) => {
   return res.render("index.html", {title: "Um titulo"})
})

server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
 })

//ligar o servidor

server.listen(3000)