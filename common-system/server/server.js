/**
 * Created by 30113 on 2018/4/8.
 */
const express  = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

const userRouter = require('./user')
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

app.listen(9093,function(){
    console.log('Node server start at port 9093')
})