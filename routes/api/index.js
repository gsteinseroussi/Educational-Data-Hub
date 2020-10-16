
const router = require('express').Router();
const userRoutes = require('./users');
const articleRoutes = require('./articles')
const commentRoutes = require('./comments')

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/comments', commentRoutes)


module.exports = router;
