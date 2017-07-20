//waterline.js
const Waterline = require('waterline')
const mysqlAdapter = require('sails-mysql')
const mongoAdapter = require('sails-mongo')

const config = require('./config')

// 加载数据集合
const Post = require('../models/postModel')

const wlconfig = {
    // 适配器
    adapters: {
        mysql: mysqlAdapter,
        mongo: mongoAdapter,
        default: 'mongo'
    },
    // 连接
    connections: {
        mysql: {
            adapter: 'mysql',
            url: config.mysql
        },
        mongo: {
            adapter: 'mongo',
            url: config.mongo
        },
    }
}

const orm = new Waterline();

// 应用数据集合
orm.loadCollection(Post);

exports.wlconfig = wlconfig; //导出waterline配置文件
exports.orm = orm; //导出orm实例