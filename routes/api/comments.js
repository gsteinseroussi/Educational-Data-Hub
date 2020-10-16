const express = require('express')
const router = express.Router();
const Comments = require('../../database/models/comments')

// api route to view chats in the database
router.get('/', (req, res) => {
    Comments.find({})
    .then(response => res.json(response))
    .catch(err => console.log(err))
    
})

// api route to create new chats
router.post('/', (req, res) => {
    Comments.create(req.body)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


module.exports = router;