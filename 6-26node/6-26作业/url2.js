// for in循环
let urlstr = '?name=1&age=3'
function UrltoObj(str) {
  str = str.slice(1) //拿问号的参数
  strary = str.split('&')
  let obj = {}
  for (item of strary) {
    item = item.split('=')
    obj[item[0]] = item[1]
  }
  return obj
}
let res = UrltoObj(urlstr)
