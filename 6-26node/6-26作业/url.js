// url 查询字符串转对象
//index.html?name=1&age=3
//let urlstr = location.search;
let urlstr = '?name=1&age=3'
function UrltoObj(str) {
  str = str.slice(1) //拿问号的参数
  strary = str.split('&') //把&前后分割拆分成数组
  strary.forEach(item => {
    item = item.split('=')
    //[name:1] [age:3] 数组的第0项key 第一项是value
    Object[item[0]] = item[1]
  })
  return obj
}
let res = UrltoObj(urlstr)
// res { name:'1',age:'3'}
