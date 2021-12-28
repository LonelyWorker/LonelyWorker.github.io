const Mock = require('mockjs');
let id = Mock.mock('@id');
console.log(id);

let obj = Mock.mock({
  id: '@id', //得到随机id
  username: '@cname()', //得到随机姓名
  date: '@date()', // 得到随机日期
  avater: "@image('200*200','red','#fff','avater')", // 随机图片
  description: '@paragraph()', // 得到随机描述
  ip: '@ip()', // 得到随机ip
  email: '@email()', // 得到随机邮箱
  haha: 'haha', // 自定义
});
console.log(obj);
