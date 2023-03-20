const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');

const Post = sequelize.define('Post', {
    postId: {
        type: DataTypes.INTEGER,
        autoIncrement: true, //자동으로 증가
        primaryKey: true,
    },
    userNm: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { //빈 문자열인지 확인
            notEmpty: true
        },
    },
    }, {
    modelName: 'Post',
    tableName: 'Posts',
    });
    
    module.exports = Post;