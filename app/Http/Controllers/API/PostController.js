const Controller = require('../Controller.js')

const Post = require('../../../Models/Post.js')
const { post } = require('../../../../routes/post.js')

class PostController extends Post
{
    
    index (req, res)
    {
        Post.getAll( (err, posts) =>  
        {
            const getSsn = (post) => post.ssn

            const ssns = posts.map( getSsn )

            return res.status(200).json({
                success : true,
                payload : ssns
            })
        })
    }

    store (req, res)
    {
        Post.create(req.body, (err, post) => 
        {
            return res.status(200).json({
                success : true,
                payload : post.insertId
            })
        })
    }

    show (req, res)
    {
        Post.getByID(req.params.id, (err, post) =>  
        {
            if (!isNaN(post)) return res.status(404).json({
                success : false,
                payload : "Resource Not Found"
            })

            return res.status(200).json({
                success : true,
                payload : post
            })
        })
    }

    update (req, res)
    {
        Post.update(req.params.id, req.body, (err, post) => 
        {
            if (!post.affectedRows) return res.status(404).json({
                success : false,
                payload : "Resource Not Found"
            })

            return res.status(200).json({
                success : true,
            })
        })
    }

    destroy (req, res)
    {
        Post.delete(req.params.id, (err, post) =>  
        {
            if (!post.affectedRows) return res.status(404).json({
                success : false,
                payload : "Resource Not Found"
            })

            return res.status(200).json({
                success : true,
            })
        })
    }
    
}


module.exports = PostController;