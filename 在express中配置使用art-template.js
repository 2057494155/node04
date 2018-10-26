var express = require('express')

var app = express()

app.use('/public/',express.static('./public/'))

app.get('/',function(req,res){
    res.send('/ page')
})
app.get('/post',function(req,res){
    res.send('post page')
})

app.listen(3000,function(){
    console.log('running');
})