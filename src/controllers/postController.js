// controllers/postController.js
const { createPostData, fetchAllPosts, updatePostData ,deletePostData } = require('../services/postService');

exports.createPost = async (req, res) => {
    const { userNm, password, title, content } = req.body;
    //console.log(req.body);
    try {
        const post = await createPostData(userNm, password, title, content);
        res.status(201).json({ message: '게시물이 작성되었습니다.', post });//Created 상태 코드
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await fetchAllPosts();
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePost = async (req, res) => {
    const { postId } = req.params; 
    //console.log(req.params.postId);
    const { password } = req.body;
    try {
        const result = await deletePostData(postId, password);
        if (result) {
            res.status(200).json({ message: '게시물이 삭제되었습니다.' });
            } else {
            res.status(404).json({ error: error.message });
            }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePost = async (req, res) => {
    const { postId } = req.params;
    const { userNm, password, title, content } = req.body;
    try {
        const post = await updatePostData(userNm, postId, password, title, content);
        res.status(200).json({ message: '게시물이 수정되었습니다.' ,post});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};