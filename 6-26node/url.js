let url = require('url')
// let str = 'www.abc.com/user?name=1&age3' //定义一个地址
// let str = 'www.abc.com/aober?name=l&age=2&c=3'
let str = 'https://www.duoji.com/user?name=1&id=3#12346'
let result = url.parse(str, true)
//加true 的属性 会把查询字符串转成对象
//  name=1 =>{name=1}
// 添加 true 属性 把地址中 name=1&id=3 变成 {name : 1 , id : 3}
console.log(result)
//protocol 'http:' 协议
//host 域名 带端口号
//hostoname:域名 'www.abc.com'
//search 带问号查询参数
//query 不带问号的查询参数
//pathname 访问的路径
