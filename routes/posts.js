const express = require('express')
const router = express.Router()

const Post = require('../models/Posts')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    const savedPost = await post.save()
    .then( (result) => {
        res.json(result)
    }).catch(err => {
        res.json({ message: err })
    })
})

router.get('/:postId', async (req, res) => {
    try {
        const posts = await Post.findById(req.params.postId)
        res.json(posts)
    } catch(err) {
        res.json({ message: err })
    }
})

router.delete('/:postId', async (req, res) => {
    try {
        const posts = await Post.remove({ _id: req.params.postId})
        res.json(posts)
    } catch(err) {
        res.json({ message: err })
    }
})

router.patch('/:postId', async (req, res) => {
    try {
        const posts = await Post.updateOne({ _id: req.params.postId}, { $set: { title: req.body.title }})
        res.json(posts)
    } catch(err) {
        res.json({ message: err })
    }
})

module.exports = router