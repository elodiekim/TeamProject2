// services/postService.js
const Post = require('../models/Post');
const sequelize = require('../databases/sequelize');
const { createSalt, createHashedPassword,hashedInputPassword }  = require('../utils/passwordUtils');
//비밀번호 암호화 관련 코드 => utils

//게시글 생성
const createPostData = async (userNm, password, title, content) => {
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
//게시글 조회
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

//게시글 수정
const updatePostData = async (userNm, postId, password, title, content) => {
  if (!userNm || !postId || !password || !title || !content) {
    throw new Error('모든 필드는 필수입니다.');
  }

  try {
    const post = await Post.findByPk(postId, {
      attributes: ['password', 'salt'],
      raw: true,
    });

    if (!post) {
      throw new Error('해당하는 게시글이 없습니다.');
    }

    const { password: hashedPassword, salt } = post;
    const hashedResult = await hashedInputPassword(password, salt);
    //const { pw: hashedInputPassword } = await hashedInputPassword(password, salt);
    // const hashedInputPassword = await new Promise((resolve, reject) => {
    //   crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
    //     if (err) reject(err);
    //     resolve(key.toString('base64'));
    //   });
    // });

    if (hashedPassword !== hashedResult) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    const updatedPost = await Post.update(
      { userNm, title, content },
      { where: { postId }, returning: true, plain: true}

    );
    //console.log(`수정된 개수: ${updatedPost[1]}`);
    console.log('게시물 수정 완료');
    //업데이트된 row의 개수를 반환
      //return updatedPost;
    return updatedPost[1];
    
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

  
  
const deletePostData = async (postId, password) => {
    try {
      const post = await Post.findByPk(postId, {
        attributes: ['password', 'salt'],
        raw: true,//json 형태
      });
      //console.log('11111111111', post);
      if (!post) {
        throw new Error('해당하는 게시글이 없습니다.');
      }
      //hashedPassword-데이터베이스에서 조회된 게시물의 비밀번호
      const { password: hashedPassword, salt } = post;
      const hashedResult = await hashedInputPassword(password, salt);
      //console.log('222222222222', post);
      // const hashedInputPassword = await new Promise((resolve, reject) => {
      //   crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
      //     if (err) reject(err);
      //     resolve(key.toString('base64'));
      //   });
      // });

      if (hashedPassword !== hashedResult) {
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

module.exports = { createPostData, fetchAllPosts, updatePostData, deletePostData };
