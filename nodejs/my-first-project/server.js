//  教学视频：https://www.youtube.com/watch?v=MQD8lSf439g&list=PL50akgsaBZlF9DADkYuQZLQBDLHZHZ-9N&index=5
//  教学代码：https://github.com/wenxuandecode/nodejs-tutorials-for-beginners/blob/main/episode05-%E7%AC%AC%E4%BA%94%E9%9B%86/server.js

/**
 * 载入module
 */
const http = require("http"); //http module
const fs = require("fs"); //file system module
//const qs = require("querystring"); //querystring module， deprecated
//const emoji = require("node-emoji")

/**
 * 服务器架设在本地，访问的时候就需要这样的网址：http://127.0.0.1:3000/
 */
const port = 3000;
const ip = "127.0.0.1"; //127.0.0.1 意思是指向自己的电脑

/**
 * 尝试按照路径读取文件，成功的话就发送指定的statusCode，一般是200，否则就报错
 * @param {*} filename
 * @param {*} statusCode
 * @param {*} response
 */
const sendResponse = (filename, statusCode, response) => {
  console.log(filename);
  fs.readFile(`./html/${filename}`, (err, data) => {
    // 后面的是回调函数
    if (err) {
      // 未成功读取文件，报错
      response.statusCode = 500; // 报错的话，设置状态码为500
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry, internal error!");
    } else {
      // 成功读取文件
      response.statusCode = statusCode;
      response.setHeader("Content-Type", "text/html");
      response.end(data);
    }
  });
};

/**
 * 创建本地server，这个server接下来会接受各种http的讯息，并且做出反应
 */
const server = http.createServer((request, response) => {   //箭头函数 arrow funciton
  
   // 处理url，提取其中的元素变量
  console.log(request.url, request.method, request.data, request.end); // 看接收到的请求是post还是get请求
  const method = request.method;
  let url = request.url;
  const requestUrl = new URL(url, `http://${ip}:${port}`);

  url = requestUrl.pathname; // 获取http的lang请求参数值作为真正要处理的url
  const lang = requestUrl.searchParams.get("lang"); // 获取http的lang请求参数值
  let langSelector;

  // 从http url判断用户需求, 分为get，post等不同请求
  if (method === "GET") {
    // 处理GET请求

    if (lang === null || lang === "en") {
      langSelector = "";
    } else if (lang === "zh") {
      langSelector = "-zh";
    } else {
      langSelector = "";
    }

    if (url === "/") {
      // 主页, 如果是主页，就返回index.html，pathname比直接的url更靠谱
      sendResponse(`index${langSelector}.html`, 200, response);
    } else if (url === "/about.html") {
      // 如果访问的是about.html
      sendResponse(`about${langSelector}.html`, 200, response);
    } else if (url === `/login${langSelector}.html`) {
      // 如果访问的是about.html
      sendResponse(`login${langSelector}.html`, 200, response);
    } else if (url === `/login-success${langSelector}.html`) {
      // 如果访问的是about.html
      sendResponse(`login-success${langSelector}.html`, 200, response);
    } else if (url === `/login-fail${langSelector}.html`) {
      // 如果访问的是about.html
      sendResponse(`login-fail${langSelector}.html`, 200, response);
    } else {
      // 页面不存在的情况
      sendResponse(`404${langSelector}.html`, 404, response);
    }
  } else if (method === "POST") {   // 专门处理post内容
    if (url === '/process-login') {
        let body = []
        request.on("data", (chunk)=>(  // 传输的data会放在很多个chunk里面
            body.push(chunk)
        ))

        request.on("end", () => {
            body = Buffer.concat(body).toString()  // 将buffer里面的数据整合，再转化为string
            //body = qs.parse(body);   // qs is deprecated
            body = new URLSearchParams(body)
            console.log(body)

            if (body.get('username') === 'john' && body.get('password') === 'doe') {
                response.statusCode = 301   // redirect，301跳转页面
                response.setHeader('Location', "/login-success.html")
        }   else {
            response.statusCode = 301
            response.setHeader('Location', "/login-fail.html")
    }       
            response.end()
    }   
)}

  } else {
  }

  //response.end("Hello from Dave's nodejs server! ") //通过response函数，将信息返回前端
});

// server一直就会监听传到 http://127.0.0.1:3000/ 的信息
server.listen(
  port, // port
  ip, // ip address
  () => {
    console.log(`Server running at http://${ip}:${port}`);
  } // callback 回调函数
);
