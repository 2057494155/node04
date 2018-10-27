var express = require('express')


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


app.use('/public/',express.static('./public/'))


app.get('/',function(req,res){
    res.render('index.html',{
       comments:comments
    })
})

app.get('/post', function (req,res) {
    res.render('post.html')
})


app.get('/pinglun', function (req,res) {
    var comment = req.query
    comment.dateTime = '2018-10.27 14:13:12'
    comments.unshift(comment)

//重定向
    // res.statusCode = 302
    // res.setHeader('Location','/')

//express的重定向
    res.redirect('/')

})

app.listen(3000,function(){
    console.log('running');
})

