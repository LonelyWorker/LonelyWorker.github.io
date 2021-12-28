const fs = require('fs');
const path = require('path');
const Mock = require('mockjs'); // mockjs 导入依赖模块
const JSON5 = require('json5');
let dataList = [{
    api: '/user/sidebar',
    url: '../api/html/sidebar.json5'
  }, // 侧边栏
  {
    api: '/user/menu',
    url: '../api/html/menu.json5'
  }, // 头部导航
  {
    api: '/user/preface',
    url: '../api/html/preface.json5'
  } // 序言

]

// 读取json文件
function getJsonFile(filePath) {
  // 读取制定json文件
  var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
  // 解析并返回
  return JSON5.parse(json);
}

// 返回一个函数
module.exports = function (app) {
  if (process.env.MOCK == 'true') {
    // 监听http请求
    dataList.forEach(item => {
      app.get(`${item.api}`, function (rep, res) {
        // 每次响应请求时读取mock data的json文件
        // getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = getJsonFile(`${item.url}`);
        // 将json传入Mock.mock方法中, 生成的数据返回给浏览器
        res.json(Mock.mock(json));
      })
    })

  }

}
