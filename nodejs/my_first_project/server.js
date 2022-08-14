const http = require("http")   //http module
const fs = require("fs");      //file system module
//const emoji = require("node-emoji")

// 服务器架设在本地，访问的时候就需要这样的网址：http://127.0.0.1:3000/
const port = 3000
const ip = "127.0.0.1"   //127.0.0.1 意思是指向自己的电脑


const sendResponse = (filename, statusCode, response) => {
    console.log(filename)
    fs.readFile(`./html/${filename}`, (err, data) => {    // 后面的是回调函数
        if (err) {  // 未成功读取文件，报错
            response.statusCode = 500  // 报错的话，设置状态码为500
            response.setHeader("Content-Type", "text/plain")
            response.end("Sorry, internal error!")
        } else {   // 成功读取文件
            response.statusCode = statusCode
            response.setHeader("Content-Type", "text/html")
            response.end(data)
        }
    })
}

// 创建本地server，这个server接下来会接受各种http的讯息
const server = http.createServer( 
    (request, response) => {   //箭头函数 arrow funciton
        console.log(request.url, request.method)  // 看接收到的请求是post还是get请求
        const method = request.method 
        let url = request.url
        
        
        // 从http判断用户需求
        if (method === "GET") {   // GET请求
            const requestUrl = new URL(url, `http://${ip}:${port}`)
            //console.log(requestUrl)     // 能帮助将url给分割开来，提取有效信息
            //console.log(requestUrl.searchParams.get('lang'))    // 获取http的lang请求参数值
            url = requestUrl.pathname // 获取http的lang请求参数值
            const lang = requestUrl.searchParams.get('lang')
            let langSelector;

        if (lang === null || lang === 'en') {
                langSelector = ''
            } else if (lang === 'zh') {
                langSelector = '-zh'
            } else {
                langSelector = ''

            }

            if (url === "/") {   // 主页, 如果是主页，就返回index.html，注意pathname比url更靠谱
                sendResponse(`index${langSelector}.html`, 200, response)
            } else if (url === "/about.html") {     // 如果访问的是about.html 
                sendResponse(`about${langSelector}.html`, 200, response)
            } else {  // 页面不存在的情况
                sendResponse(`404${langSelector}.html`, 404, response)
            }   
        } else {

        }

        //response.end("Hello from Dave's nodejs server! ") //通过response函数，将信息返回前端
    }
) 



// server一直就会监听传到 http://127.0.0.1:3000/ 的信息
server.listen(
    port,// port
    ip,// ip address
    () => {
        console.log(`Server running at http://${ip}:${port}`)
    }  // callback 回调函数
)   