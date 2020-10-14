
const router = require('express').Router();
const userRoutes = require('./users');
const articleRoutes = require('./articles')
const chatRoutes = require('./chats')

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/chats', chatRoutes);


module.exports = router;
