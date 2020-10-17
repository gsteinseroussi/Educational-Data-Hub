const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const Comments = require('../../database/models/comments')

// api route to view comments in the database
router.get('/:id', (req, res) => {
    Comments.findByIdAndUpdate({})
    .then(response => res.json(response))
    .catch(err => console.log(err))
    
})

// api route to create new comments
router.post('/submit/:id', (req, res) => {
    console.log("USER",req.user)
    Comments.create({message:req.body.comment,userName:req.user.username})
    .then(({_id}) => {
        Lesson.findByIdAndUpdate({ _id:mongoose.ObjectId(req.params.id) }, { $push: { comments: _id }})})
    .then(lesson => {
        res.json(lesson)
    })
    .catch(err=> console.log(err))
})
module.exports = router;



