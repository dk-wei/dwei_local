const http = require("http")

const server = http.createServer( 
    //(request, response) => {
    function (request, response) {
        response.end("hello from nodejs server!") //通过response函数，将信息返回前端


    }

)

const port = 3000
const ip = "127.0.0.1"   //127.0.0.1 意思是指向自己的电脑

server.listen(
    port,// port
    ip,// ip address
    () => {
        console.log(`Server running at http://${ip}:${port}`)

    }  // callback 回调函数
)   