// services/postService.js
const Post = require('../models/Post');
const sequelize = require('../databases/sequelize');

const createPost = async (userNm, password, title, content) => {
    if (!userNm || !password || !title || !content) {
        throw new Error('모든 필드는 필수입니다.');
      }
      try {
        const post = await Post.create({ userNm, password, title, content });
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
    const post = await Post.findByPk(postId);
    // if (!post || post.password !== password) {
    //     throw new Error('해당하는 게시글이 없거나 비밀번호가 일치하지 않습니다.');
    //   }
    if (!post) {
        throw new Error('해당하는 게시글이 없습니다.');
      }
      if (post.password !== password) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }
    await post.destroy(); 
    console.log('게시물 삭제 성공');
    return true;
  } catch (error) {
    console.log(error);
    throw new Error(error.message)
  }
};

module.exports = { createPost, fetchAllPosts, deletePost };
