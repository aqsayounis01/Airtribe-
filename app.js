
const http= require('http')

// create a server 
let server = http.createServer((request,response)=>{
    response.end('<h1>this is a webpage</h1>')
    console.log("request");
})
// start the server 
server.listen(7000,'127.0.0.1',()=>
{
    console.log("listening ...")
})