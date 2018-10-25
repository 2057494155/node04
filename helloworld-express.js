var express = require('express')

// 1. 创建 app
var app = express()

//当以 /public/ 开头的时候,去 ./public 目录中查找对应资源
//更容易辨识,推荐

 app.use('/public/',express.static('./public/'))
 // /public/这个写啥都行,只是个名字,访问的时候带上

//当省略第一个参数的时候,则可以通过省略 /public/ 的方式来访问
app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello</title>
</head>
<body>
    <h1>你好</h1>
</body>
</html>
    `)
})

app.listen(3000, function () {
  console.log('express app is running...')
})
