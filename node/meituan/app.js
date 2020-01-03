// 模块化 commonjs
// const express = require('express')
//ES6模块化方案
// node 使用ES6模块化
import express from 'express'
import router from './routes/index.js'
const app = express()
app.listen(3000);
router(app)
module.exports = app
