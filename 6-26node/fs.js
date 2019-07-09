let fs = require('fs')
let fsPromise = fs.promises //node 10.0版本以上

// 读取文件 readFile 参数 文件路径 读取格式
fsPromise.readFile('./app.js', 'utf-8').then(data => {
  console.log(data)
})
//filer

//写入文件  writeFile 参数 1、要写入的文件路径 2、要写入的数据 3、要写入的数据格式 写入的数据会把文件以前的数据覆盖
fs.promises.writeFile('./a.txt', '你好，我是写入的内容', 'utf-8').then(data => {
  console.log('写入成功')
})

// 首先 读取 json 转对象 数据 push放新的数据 写入
