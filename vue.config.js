const express = require('express');
const app = express();

// var sidebar = require('./static/html/sidebar');
// var preface = require('./static/html/preface');
// apiList.push(sidebar, preface);

// var apiRoutes = express.Router();
// app.use('/api', apiRoutes);

module.exports = {
  devServer: {
    before: require('./mock/index.js') // 引入mock/index.js
  },
}
