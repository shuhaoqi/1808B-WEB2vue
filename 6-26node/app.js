//url 和 http模块
let http = require('http')
let url = require('url')
let ary = require('./banner')
let server = http.createServer((req, res) => {
  //设置一个头 解决乱码问题
  res.setHeader('Content-Type', 'text/plain;charset=url-8')
  //根据路径不同，返回不同结果
  //请求的路径会放在req上面 req.url
  //localhost:3000/user?name=1
  ///user =>pathname ?name=1 =>query
  let { pathname, query } = url.parse(req.url, true)
  //localhost:3000/user?name=1
  if (pathname === '/user') {
    console.log(query.name)
    return res.end('访问的是user')
  }
  //localhost:3000/admin
  if (pathname === '/admin') {
    return res.end('admin')
  }
  // localhost:3000/banner
  if (pathname === '/banner') {
    return res.end(JSON.stringify(ary))
  }
  //localhost:3000/aober
  // if (pathname === '/aober') {
  //   return res.end('aober')
  // }
  res.end('404')
})
server.listen(3000, function() {
  console.log('服务器3000端口号')
})
