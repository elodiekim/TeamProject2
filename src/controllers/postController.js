// controllers/postController.js
const { createPost, fetchAllPosts ,deletePost } = require('../services/postService');

exports.createPost = async (req, res, next) => {
    const { userNm, password, title, content } = req.body;
    //console.log(req.body);
    try {
        const post = await createPost(userNm, password, title, content);
        res.status(201).json({ message: '게시물이 작성되었습니다.', post });//Created 상태 코드
    } catch (error) {
        //next(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await fetchAllPosts();
        res.status(200).json(posts)
    } catch (error) {
        //next(error);
        res.status(500).json({ message: error.message });
    }
};

exports.deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const { password } = req.body;
    try {
        const result = await deletePost(postId, password);
        if (result) {
            res.status(200).json({ message: '게시물이 삭제되었습니다.' });
            } else {
            res.status(404).json({ error: error.message });
            }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const { password, title, content } = req.body;
    try {
        const post = await updatePost(postId, password, title, content);
        res.status(200).json({ message: '게시물이 수정되었습니다.' ,post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};