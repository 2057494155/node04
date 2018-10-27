var express = require('express')

var app = express()

app.engine('html',require('express-art-template'))
/*
    配置使用 art-template 模板引擎
        !第一个参数,表示,当渲染以 .art(可修改) 结尾的文件的时候,使用 art-template 模板引擎
        express-art-template 是专门在 Express 中把 art-template 整合到 Express 中
        这里虽然并不需要加载 art-template 但是也必须安装
        res.render('html模板名',{模板数据})
        原因就在于 express-art-template 依赖了art-template
*/

/*
    Express 为 Response 相应对象提供了一个方法 :render
    render 方法默认是不可以使用的,但是如果配置了 模板引擎 就可以使用了
    !res.render('html模板名',{模板数据})
    第一个参数不能写数据,默认会去项目中的 views 目录中查找该模板文件
    也就是说 Express 有个约定: 开发人员会把所有的视图文件都放入  views 目录中

*/

app.use('/public/',express.static('./public/'))

app.get('/',function(req,res){
    res.render('login.html')
})
app.get('/admin',function(req,res){
    res.render('admin/index.html',{
        title:'管理系统'
    })
    //相对于 views 的路径
    /*
    如果想要修改默认的 views 目录,可以
    app.set('views',render函数的默认路径)
    */
})

app.listen(3000,function(){
    console.log('running');
})
