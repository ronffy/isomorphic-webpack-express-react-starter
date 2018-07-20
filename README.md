# express + webpack + react-dom 实现简单的项目同构

## 涉及说明

-  使用`react-dom`的原因是因为`react-dom`有成熟的虚拟DOM和`renderToString`方法。

## 使用说明

### How to run

安装依赖
```bash
npm install

#or

yarn
```

构建用于浏览器环境运行的文件
```
npm run build
```

构建用于服务端渲染的文件
```
npm run buildServer
```

启动 HTTP 服务器，就可以去浏览器访问了
```
npm run express
```
