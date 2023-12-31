////////////// IMPORT //////////////////
const { Comment, Post, Teacher } = require('../models')

//////////////// GET CONTROLLERS ////////////////
const GetAllPosts = async (req, res) => {

    try{ 
        const allPosts = await Post.findAll({})
        res.send(allPosts)
    }catch(error) {
        throw error
    }

}

const GetIndTeacher = async (req, res) => {

    try{
        const indTeacher = await Teacher.findByPk(parseInt(req.params.teacher_id))
        res.send(indTeacher)
    }catch (error){
         console.log(error)
    }

}

const GetIndTeacherPosts = async (req, res) => {

    try{
        const teacherPosts = await Post.findAll({
            where: {teacher_id: parseInt(req.params.teacher_id)}
        })
        res.send(teacherPosts)
    } catch (error) {
        console.log(error)
    }

}

const IndPost = async (req, res) => {

    try{
        const indPost = await Post.findByPk(parseInt(req.params.post_id))
        const getComments = await Comment.findAll({
            where: {post_id: parseInt(req.params.post_id)}
        })
        res.send({indPost, getComments})
    }catch (error) {
        throw error
    }

}

const GetAllTeacherUsernameNEmail = async (req, res) => {

    try {
        const tUsernames = await Teacher.findAll({
            attributes: ['username'],
            order: [['username', "ASC"]]
        })
        const tEmails = await Teacher.findAll({
            attributes: ['email']
        })
        res.send({tUsernames, tEmails})
    }catch (error) {
        throw error
    }

}

/////////////// CREATE CONTROLLERS ////////////////
const CreatePost = async (req, res) => {

    try{
        const teacher_id = parseInt(req.params.teacher_id)
        let postBody = {
            teacher_id,
            ...req.body
        }
        const newPost = await Post.create(postBody)
        res.send(newPost)
    }catch(error){
        throw error
    }

}

const CreateComment = async (req, res) => {

    try{
        const post_id = parseInt(req.params.post_id)
        const commentBody = {
            post_id,
            ...req.body
        }
        const newComment = await Comment.create(commentBody)
        res.send(newComment)
    }catch(error) {
        throw error
    }


}

/////////////// DELETE CONTROLLERS ////////////////
const DeletePost = async (req, res) => {
    try {
        const postId = parseInt(req.params.post_id)
        const deletedPost = await Post.destroy({where: {id:postId}})
        res.send({message: `Deleted post with an id of ${postId}`})
    } catch(error) {
        throw error
    }
}

///////////// UPDATE CONTROLLERS ////////////////
const UpdatePost = async (req, res) => {
    try {
        const postId = parseInt(req.params.post_id)
        let updatedPost = await Post.update(req.body, {
            where: {id: postId},
            returning: true
        })
        res.send(updatedPost)
    } catch (error) {
        throw error
    }
}

const UpdateTeacher = async (req, res) => {

    try {
        const teacherId = parseInt(req.params.teacher_id)
        let updatedTeacher = await Teacher.update(req.body, {
            where: {id: teacherId},
            returning: true
        })
        res.send(updatedTeacher)
    } catch (error) {
        throw error
    }
}

const UpdateLikes = async (req, res) => {

    try{
        const postId = parseInt(req.params.post_id)
        let likes = parseInt(req.body.likes)
        const postInfo = await Post.findByPk(postId)
        let updatedLikes = await Post.update({
            ...postInfo,
            likes
        }, 
        {where: {id: postId},
        returning: true
        })
        res.send(updatedLikes)
    } catch (error) {
        throw error
    }
    
}

///////////// EXPORT //////////////
module.exports = {
    GetAllPosts,
    GetIndTeacher,
    GetIndTeacherPosts,
    IndPost,
    CreatePost,
    CreateComment,
    DeletePost,
    UpdatePost,
    UpdateTeacher,
    UpdateLikes,
    GetAllTeacherUsernameNEmail,
}

