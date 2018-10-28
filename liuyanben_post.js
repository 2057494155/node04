var express = require('express')

var bodyParser = require('body-parser')

var app = express()



var comments = [
    {
      name: '杨果',
      message: '今天天气不错，姑姑，我们去郊游嘛',
      dateTime: '2018-11-11'
    },
    {
      name: '鸡腿小龙女',
      message: '过儿，我还想吃鸡腿',
      dateTime: '2018-11-11'
    },
    {
      name: '贾玲龙娘',
      message: '....(自行脑补)',
      dateTime: '2018-11-11'
    },
    {
      name: '李莫愁',
      message: '不如野炊，我去抓个渣男作为食材',
      dateTime: '2018-11-11'
    }
  ]

app.engine('html',require('express-art-template'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/public/',express.static('./public/'))


app.get('/',function(req,res){
    res.render('index2.html',{
       comments:comments
    })
})

app.get('/post2', function (req,res) {
    res.render('post2.html')
})

//当以 post 请求 /post2 的时候,执行指定的处理函数
//这样我们就可以用不同的请求方法,让一个请求路径请求多次
app.post('/post2',function(req,res){
    // 1. 获取表单 POST 请求体数据
    // 2. 处理
    // 3. 发送响应
            //req.query 只能用于 GET
    var comment = req.body
    comment.dateTime = '2018-10-28 20:20:20'
    comments.unshift(comment)
    res.redirect('/')
})



app.listen(3000,function(){
    console.log('running');
})

