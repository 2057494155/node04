var express = require('express')
var app = express()

app.engine('html',require('express-art-template'))
//express-art-template 包会自动加载 art-template

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
//nodejs04\crud-express\node_modules\bootstrap\dist\css\bootstrap.min.css
// 开放 node_modules 目录,索引是 node_modules
 
app.get('/',function(req,res){
    res.render('index.html',{
        fruit:[
            '苹果',
            '香蕉',
            '橘字'
        ]
    })
})

app.listen(3000,function(){
    console.log('running');
}) 