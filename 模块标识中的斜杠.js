var fs = require('fs')


//    !文件操作(fs)中的路径可以省略 ./
//  !咱们所使用的所有文件操作都是异步的
fs.readFile('data/a.txt',function(err,data){
    if(err){
        return console.log('文件读取失败!');
    }
    console.log(data.toString());
})


//    !而在模块加载中,相对路径中的 ./ 不能省
// 会报错:Error: Cannot find module '/data/foo.js'

require('./data/foo.js')
// fs.readFile('data/a.txt',function(err,data){
//     if(err){
//         return console.log('文件读取失败!');
//     }
//     console.log(data.toString());
// })
