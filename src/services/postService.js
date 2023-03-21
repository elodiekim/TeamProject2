// services/postService.js
const Post = require('../models/Post');
const sequelize = require('../databases/sequelize');
const crypto = require('crypto');

//salt반환 함수 
const createSalt = () => 
    new Promise((resolve, reject) => {
      crypto.randomBytes(64, (err, buf) => {
        if (err) reject(err);
        resolve(buf.toString('base64'));
      });
    });

///salt이용해서 비밀번호 암호화
const createHashedPassword = (plainPassword) => 
    new Promise(async(resolve, reject) => {
        const salt = await createSalt();
        crypto.pbkdf2( plainPassword, salt, 9999, 64,'sha512', (err, key) => {
            if (err) reject(err);
            resolve({ pw: key.toString('base64'), salt });
        });
    });



//게시글 생성
const createPost = async (userNm, password, title, content) => {
    if (!userNm || !password || !title || !content) {
      throw new Error('모든 필드는 필수입니다.');
    }
    try {
      const { pw, salt } = await createHashedPassword(password);
      const post = await Post.create({ userNm, password:pw, salt, title, content });
      console.log('게시물 작성 완료');
      return post;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

const fetchAllPosts = async () => {
  try {
    const posts = await Post.findAll();
    console.log('게시물 목록 조회');
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(error.message)
  }
};

const deletePost = async (postId, password) => {
    try {
      const post = await Post.findByPk(postId, {
        attributes: ['password', 'salt'],
        raw: true,
      });

      if (!post) {
        throw new Error('해당하는 게시글이 없습니다.');
      }
      //hashedPassword-데이터베이스에서 조회된 게시물의 비밀번호
      const { password: hashedPassword, salt } = post;
      const hashedInputPassword = () =>
        new Promise((resolve, reject) => {
            crypto.pbkdf2( password, salt, 9999, 64, 'sha512', (err, key) => {
                if (err) reject(err);
                resolve(key.toString('base64'));
            }
            );
        });
  
      if (hashedPassword !== hashedInputPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }
  
      await Post.destroy({ 
        where: { postId } 
    });
      console.log('게시물 삭제 성공');
      return true;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

module.exports = { createPost, fetchAllPosts, deletePost };
