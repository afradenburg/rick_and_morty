const server = require('./src/src/app')
const PORT = 3001;

server.listen(PORT, () => {
});

//web server
// const http = require("http")
// const {getCharById} = require("./controlers/getCharById")


// http.createServer((request, response)=>{
// const {url} = request //divide la url por /

// response.setHeader("Access-Control-Allow-Origin", "*");

// if(url.includes("/rickandmorty/character")){
//     const id = url.split('/').at(-1)
//    // const id = url.split('/').pop() creo que es el mismo codigo de arriba
//     getCharById(response, +id)
// }
// })
// .listen(3001)
