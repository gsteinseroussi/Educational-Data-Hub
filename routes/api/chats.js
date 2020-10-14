const express = require('express')
const router = express.Router();
const Chats = require('../../database/models/chats')

// api route to view chats in the database
router.get('/', (req, res) => {
    Chats.find({})
    .then(response => res.json(response))
    .catch(err => console.log(err))
    
})

// api route to create new chats
router.post('/', (req, res) => {
    Chats.create(req.body)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})


module.exports = router;