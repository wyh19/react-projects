/**
 * Created by 30113 on 2018/4/8.
 */
const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')

Router.get('/list',function(req,res){
    User.find({},function(e,d){
        return res.json({code:0,data:d})
    })
})

module.exports = Router