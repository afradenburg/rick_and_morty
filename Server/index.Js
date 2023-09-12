const express = require('express')
const server = express();
const router = require("./routes/index")
const PORT = 3001;



server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json())
server.use('/rickandmorty', router)

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
