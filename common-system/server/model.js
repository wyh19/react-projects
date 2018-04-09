/**
 * Created by 30113 on 2018/4/8.
 */
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/common-system'
mongoose.connect(DB_URL)

const models = {
    user:{
        user:{type:String,require:true},
        pwd:{type:String,require:true},
        avatar:{type:String}
    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}