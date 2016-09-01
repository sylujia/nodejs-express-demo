/**
 * Created by Administrator on 2016/8/29 0029.
 */


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jia');//连接数据库
var db = mongoose.connection;
var Schema = mongoose.Schema;   //  创建模型

var userScheMa = new Schema({
    name: String,
    password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

exports.UserModel = mongoose.model('users', userScheMa); //  与users集合关联

    