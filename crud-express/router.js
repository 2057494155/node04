// 路由
/*
    router.js 路由模块
    职责:
        处理路由
        根据不同的 请求方法 + 请求路径 设置具体的 请求函数

    模块职责有要单一,不要乱写(尤其是文件名)
    划分模块的目的就是为了增强代码的可维护性
    提升开发效率
*/
var fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')

// !express 提供了一种更好的方式 express.Router()
// !专门用来包装路由的
/*
    1. 创建一个路由容器
    2. 把路由都挂载到 router 中
    3. 把 router 导出
*/
var router = express.Router()

router.get('/students', function (req, res) {
  // readFile 的第二个参数是可选的,传入 utf8是告诉它把读取到的文件直接按照 utf-8 编码转化成我们认识的编码
  // 除此之外也可以用 data.toString() 方法实现
  fs.readFile('./db.json', 'utf8', function (err, data) {
    if (err) {
      return res.status(500).send('Server error')
    // 建议加入状态码,更合理
    }
    res.render('index.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘字'
      ],
      students: JSON.parse(data).students
    // 文件中读取的数据一定是字符串
    // 需要先转化为对象,然后转化为json
    })
  })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
  /*
     1. 获取表单数据
     2. 处理
        将数据保存到 db.json 中,用以持久化
          先读取 db.json
           转成对象
           往对象中 push
             再转成字符串
              最后把字符串在此写入文件 db.json 中
     3. 发送响应
  */
  //console.log(req.body);

})

router.get('/students/edit', function (req, res) {})


router.post('/students/edit', function (req, res) {})

router.post('/students/delete', function (req, res) {})

module.exports = router
