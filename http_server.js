const express = require('express');
// 引入构建出的 bundle_server.js 中暴露出的渲染函数
const { render } = require('./dist/bundle_server');
const app = express();

// 调用render函数，拼接 HTML 模版，形成完整的 HTML 文件
app.get('/', function(req, res) {
  res.send(`
  <html>
  <head>
    <meta charset="UTF-8">
    <link href="./dist/main.css" rel="stylesheet"></head>
  </head>
  <body>
  <div id="app">${render()}</div>
  <!--导入 Webpack 输出的用于浏览器端渲染的 JS 文件-->
  <script src="./dist/bundle_browser.js"></script>
  </body>
  </html>
  `);
})

// 其它请求路径返回对应的本地文件
app.use(express.static('.'));

app.listen(3000, function () {
  console.log('Server listening on prot 3000!');
});
